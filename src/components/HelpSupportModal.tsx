import { useState } from 'react';
import { X, ChevronDown, Mail, Camera, MapPin, BarChart3, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { getHelpContent } from '@/data/help-terms-i18n';
import { useApp } from '@/lib/app-context';

const TAB_ICONS: Record<string, LucideIcon> = {
  foto: Camera,
  mapa: MapPin,
  rankings: BarChart3,
  comunidad: Users,
};

export function HelpSupportModal({ onClose }: { onClose: () => void }) {
  const { lang } = useApp();
  const content = getHelpContent(lang);
  const [activeTab, setActiveTab] = useState(content.tabs[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const tab = content.tabs.find((tb) => tb.id === activeTab) ?? content.tabs[0];

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

        <div className="flex gap-1.5 mt-4 overflow-x-auto pb-1 -mx-1 px-1">
          {content.tabs.map((tb) => {
            const Icon = TAB_ICONS[tb.id] ?? Camera;
            const active = tb.id === activeTab;
            return (
              <button
                key={tb.id}
                onClick={() => { setActiveTab(tb.id); setOpenIndex(0); }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-600 whitespace-nowrap transition-colors ${
                  active
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-slate-700/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tb.label}
              </button>
            );
          })}
        </div>

        <div className="mt-4 space-y-2">
          {tab.faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="rounded-xl border border-slate-700/60 bg-white/[0.03] overflow-hidden">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-white/5"
                >
                  <span className="text-sm font-600 leading-snug">{item.q}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
                </button>
                {open && (
                  <p className="px-4 pb-3.5 text-[13px] leading-relaxed text-slate-300 animate-riseIn">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1">
            <p className="text-sm text-slate-200 leading-relaxed">{content.contactText}</p>
          </div>
          <a
            href="mailto:info@ezetu.com"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-600 whitespace-nowrap transition-colors"
          >
            <Mail className="w-4 h-4" />
            {content.contactButton}
          </a>
        </div>
      </div>
    </div>
  );
}
