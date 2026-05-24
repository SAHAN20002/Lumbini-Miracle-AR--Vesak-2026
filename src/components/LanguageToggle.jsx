export default function LanguageToggle({ language, setLanguage }) {
  return (
    <div className="inline-flex rounded-full border border-white/20 bg-white/10 p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`rounded-full px-4 py-2 text-sm transition ${language === 'en' ? 'bg-amber-300 text-slate-950' : 'text-white/80'}`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('si')}
        className={`rounded-full px-4 py-2 text-sm transition ${language === 'si' ? 'bg-amber-300 text-slate-950' : 'text-white/80'}`}
      >
        සිං
      </button>
    </div>
  )
}
