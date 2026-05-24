import { ArrowLeft } from 'lucide-react'
import PageShell from '../components/PageShell.jsx'
import { content } from '../data/content.js'

export default function Story({ language, setLanguage, goHome }) {
  const t = content[language]

  return (
    <PageShell language={language} setLanguage={setLanguage}>
      <section className="mx-auto flex min-h-[78vh] w-full max-w-3xl items-center py-10">
        <article className="glass rounded-[2rem] p-6 shadow-2xl md:p-10">
          <button onClick={goHome} className="mb-6 inline-flex items-center gap-2 text-white/70 hover:text-white">
            <ArrowLeft size={18} />
            {t.back}
          </button>

          <div className="mb-5 text-7xl">🪷</div>
          <h1 className="text-4xl font-black text-white md:text-5xl">{t.storyTitle}</h1>
          <p className="mt-6 text-lg leading-9 text-white/75">{t.story}</p>

          <div className="mt-8 rounded-2xl border border-amber-200/20 bg-amber-200/10 p-5 text-sm leading-6 text-white/65">
            Design direction: use calm gold, white, lotus pink, gentle green and deep blue. Keep visuals respectful, peaceful and not game-like.
          </div>
        </article>
      </section>
    </PageShell>
  )
}
