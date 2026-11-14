import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { useApp } from '@/lib/app-context';
import type { LangCode } from '@/lib/types';

const BANNER_TEXT: Record<LangCode, { body: string; cta: string }> = {
  ES: {
    body: 'Descubre los rincones más increíbles para tu próximo viaje. Sitios top, ubicaciones exactas y fotografía 100% real verificada, sin Inteligencia Artificial.',
    cta: 'Crear cuenta gratis',
  },
  EUS: {
    body: 'Ezagutu zure hurrengo bidaiarako txokorik harrigarrienak. Leku bikainak, kokapen zehatzak eta % 100 benetako argazki egiaztatuak, Adimen Artifizialik gabe.',
    cta: 'Sortu doako kontua',
  },
  EN: {
    body: 'Discover the most incredible spots for your next trip. Top places, exact locations, and 100% verified real photos, strictly AI-free.',
    cta: 'Sign up free',
  },
  FR: {
    body: 'Découvrez les endroits les plus incroyables pour votre prochain voyage. Lieux incontournables, localisations exactes et photos 100 % réelles vérifiées, sans Intelligence Artificielle.',
    cta: 'Créer un compte gratuit',
  },
  IT: {
    body: 'Scopri i luoghi più incredibili per il tuo prossimo viaggio. Destinazioni top, posizioni esatte e foto reali al 100% verificate, senza Intelligenza Artificiale.',
    cta: 'Crea account gratis',
  },
  DE: {
    body: 'Entdecke die faszinierendsten Orte für deine nächste Reise. Top-Ziele, exakte Standorte und zu 100 % echte, verifizierte Fotos – ganz ohne Künstliche Intelligenz.',
    cta: 'Kostenlos registrieren',
  },
};

const BANNER_KEY = 'ezetu_banner_closed';

export function WelcomeBanner() {
  const { lang, isAuthenticated, setAuthOpen } = useApp();
  const [closed, setClosed] = useState(() => {
    try { return sessionStorage.getItem(BANNER_KEY) === '1'; } catch { return false; }
  });

  if (isAuthenticated || closed) return null;

  const text = BANNER_TEXT[lang];

  const dismiss = () => {
    try { sessionStorage.setItem(BANNER_KEY, '1'); } catch { /* ignore */ }
    setClosed(true);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 max-w-xl mx-auto z-40 bg-slate-900/95 border border-slate-700/80 backdrop-blur-md rounded-2xl p-4 shadow-2xl flex items-center justify-between gap-3 text-white animate-riseIn">
      <div className="flex items-start gap-3 flex-1 min-w-0">
        <span className="grid place-items-center w-9 h-9 rounded-xl bg-forest-600/80 shrink-0">
          <Sparkles className="w-4 h-4 text-emerald-300" />
        </span>
        <div className="min-w-0">
          <p className="text-sm leading-snug text-white/90">{text.body}</p>
          <button
            onClick={() => setAuthOpen(true)}
            className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-forest-600 hover:bg-forest-500 text-white text-xs font-700 transition-colors shadow-soft"
          >
            {text.cta}
          </button>
        </div>
      </div>
      <button
        onClick={dismiss}
        aria-label="Close"
        className="grid place-items-center w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 transition-colors shrink-0"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
