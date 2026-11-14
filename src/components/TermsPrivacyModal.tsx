import { X, Copyright, ShieldCheck, Lock, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { getTermsContent } from '@/data/help-terms-i18n';
import { useApp } from '@/lib/app-context';

const BLOCK_ICONS: LucideIcon[] = [Copyright, ShieldCheck, Lock];
const BLOCK_ACCENTS = ['text-emerald-400', 'text-sky-400', 'text-amber-400'];

export function TermsPrivacyModal({ onClose }: { onClose: () => void }) {
  const { lang } = useApp();
  const content = getTermsContent(lang);

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative bg-slate-900/95 border border-slate-700/80 backdrop-blur-md rounded-2xl max-w-2xl w-full p-6 text-slate-100 z-50 m-auto max-h-[85vh] overflow-y-auto shadow-lift animate-popIn pointer-events-auto">
        <button
          onClick={onClose}
          aria-label={content.title}
          className="absolute top-4 right-4 grid place-items-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <h2 className="font-display text-xl font-700 leading-tight pr-10">{content.title}</h2>
        <p className="text-sm text-slate-400 mt-0.5">{content.subtitle}</p>

        <div className="mt-5 space-y-4">
          {content.blocks.map((block, bi) => {
            const Icon = BLOCK_ICONS[bi] ?? Copyright;
            const accent = BLOCK_ACCENTS[bi] ?? 'text-emerald-400';
            return (
              <section key={block.title} className="rounded-xl border border-slate-700/60 bg-white/[0.03] p-4">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className={`grid place-items-center w-8 h-8 rounded-lg bg-white/5 ${accent}`}>
                    <Icon className="w-4 h-4" />
                  </span>
                  <h3 className="text-sm font-700 leading-snug">{block.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {block.points.map((p) => (
                    <li key={p.title} className="flex gap-2.5">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0" />
                      <p className="text-[13px] leading-relaxed text-slate-300">
                        <span className="font-600 text-slate-100">{p.title}: </span>
                        {p.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <div className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <p className="flex-1 text-[13px] text-slate-300 leading-relaxed">{content.contactText}</p>
          <a
            href="mailto:info@ezetu.com"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-600 whitespace-nowrap transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@ezetu.com
          </a>
        </div>
      </div>
    </div>
  );
}
