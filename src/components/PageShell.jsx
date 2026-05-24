import LanguageToggle from './LanguageToggle.jsx'

export default function PageShell({ children, language, setLanguage }) {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 text-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="lotus-glow flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-200 to-pink-300 text-xl">
            🪷
          </div>
          <div>
            <p className="text-sm font-semibold text-amber-200">Vesak AR</p>
            <p className="text-xs text-white/60">Lumbini Miracle</p>
          </div>
        </div>
        <LanguageToggle language={language} setLanguage={setLanguage} />
      </div>

      {children}
    </main>
  )
}
