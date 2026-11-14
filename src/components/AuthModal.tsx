import { useState } from 'react';
import { X, Mail, Lock, User as UserIcon, Eye, EyeOff } from 'lucide-react';
import { useApp } from '@/lib/app-context';
import { supabase, hasSupabase } from '@/lib/supabase';
import { Mountain } from 'lucide-react';

export function AuthModal({ onClose }: { onClose: () => void }) {
  const { t, lang, login } = useApp();
  const [mode, setMode] = useState<'signin' | 'signup'>('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) return;
    setLoading(true);
    try {
      if (hasSupabase) {
        if (mode === 'signup') {
          const { data, error: err } = await supabase.auth.signUp({
            email,
            password,
            options: { data: { name: name || email.split('@')[0] } },
          });
          if (err) throw err;
          if (data.user) {
            login({ id: data.user.id, email, name: name || email.split('@')[0] });
            onClose();
          }
        } else {
          const { data, error: err } = await supabase.auth.signInWithPassword({ email, password });
          if (err) throw err;
          if (data.user) {
            login({ id: data.user.id, email: data.user.email ?? email, name: (data.user.user_metadata?.name as string) ?? email.split('@')[0] });
            onClose();
          }
        }
      } else {
        // Fallback: mock login
        login({ id: `mock-${Date.now()}`, email, name: name || email.split('@')[0] });
        onClose();
      }
    } catch {
      setError(t('authError'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[3000] grid place-items-center p-4 animate-fadeIn">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white dark:bg-slate2-900 rounded-3xl shadow-2xl border border-forest-100 dark:border-slate2-800 overflow-hidden animate-popIn">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-forest-600 to-forest-800 dark:from-slate2-800 dark:to-slate2-950 text-white px-6 pt-6 pb-5">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 grid place-items-center w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-white/15 backdrop-blur">
              <Mountain className="w-5 h-5" />
            </span>
            <div>
              <h2 className="font-display text-xl font-700">
                {mode === 'signup' ? t('createAccount') : t('login')}
              </h2>
              <p className="text-xs text-white/70">Ezetu</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="px-6 py-5 space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="text-xs font-600 text-forest-700/70 dark:text-sand-300/70 mb-1.5 block">{t('authName')}</label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-forest-500/50" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('authName')}
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-forest-100 dark:border-slate2-800 bg-forest-50/50 dark:bg-slate2-800/60 text-sm text-forest-800 dark:text-sand-100 placeholder:text-forest-700/40 dark:placeholder:text-sand-400/40 focus:outline-none focus:border-forest-400"
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-xs font-600 text-forest-700/70 dark:text-sand-300/70 mb-1.5 block">{t('authEmail')}</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-forest-500/50" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('authEmail')}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-forest-100 dark:border-slate2-800 bg-forest-50/50 dark:bg-slate2-800/60 text-sm text-forest-800 dark:text-sand-100 placeholder:text-forest-700/40 dark:placeholder:text-sand-400/40 focus:outline-none focus:border-forest-400"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-600 text-forest-700/70 dark:text-sand-300/70 mb-1.5 block">{t('authPassword')}</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-forest-500/50" />
              <input
                type={showPw ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('authPassword')}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-forest-100 dark:border-slate2-800 bg-forest-50/50 dark:bg-slate2-800/60 text-sm text-forest-800 dark:text-sand-100 placeholder:text-forest-700/40 dark:placeholder:text-sand-400/40 focus:outline-none focus:border-forest-400"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-forest-500/50"
              >
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-forest-600 text-white text-sm font-700 hover:bg-forest-700 disabled:opacity-50 transition-colors shadow-soft"
          >
            {loading ? '…' : mode === 'signup' ? t('createAccount') : t('signIn')}
          </button>

          <button
            type="button"
            onClick={() => { setMode(mode === 'signup' ? 'signin' : 'signup'); setError(''); }}
            className="w-full text-center text-xs font-600 text-forest-600 dark:text-forest-300 hover:text-forest-800 dark:hover:text-sand-100 transition-colors"
          >
            {mode === 'signup' ? t('haveAccount') : t('noAccount')}
          </button>
        </form>
      </div>
    </div>
  );
}
