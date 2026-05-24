import { Camera, BookOpen, Sparkles } from 'lucide-react'
import PageShell from '../components/PageShell.jsx'
import { content } from '../data/content.js'

export default function Home({ language, setLanguage, goInstructions, goStory }) {
  const t = content[language]

  return (
    <PageShell language={language} setLanguage={setLanguage}>
      <section className="mx-auto grid min-h-[78vh] w-full max-w-6xl items-center gap-10 py-12 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-200/10 px-4 py-2 text-sm text-amber-100">
            <Sparkles size={16} />
            {t.badge}
          </div>

          <h1 className="max-w-3xl text-5xl font-black tracking-tight text-white md:text-7xl">
            {t.title}
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-white/78">
            {t.subtitle}
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/58">
            {t.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={goInstructions}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-300 px-6 py-4 font-bold text-slate-950 shadow-xl shadow-amber-900/30 transition hover:scale-[1.02]"
            >
              <Camera size={20} />
              {t.start}
            </button>

            <button
              onClick={goStory}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-bold text-white transition hover:bg-white/15"
            >
              <BookOpen size={20} />
              {t.readStory}
            </button>
          </div>
        </div>

        <div className="glass relative rounded-[2rem] p-6 shadow-2xl">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-pink-300/20 blur-3xl" />

          <div className="relative rounded-[1.6rem] bg-gradient-to-b from-amber-100/20 to-white/5 p-6">
            <div className="mx-auto flex h-72 w-72 max-w-full items-center justify-center rounded-full border border-amber-200/30 bg-slate-950/30">
              <div className="relative">
                <div className="absolute -inset-14 rounded-full bg-amber-200/10 blur-2xl" />
                <div className="relative text-center">
                  <div className="text-8xl">🪷</div>
                  <div className="-mt-3 text-6xl">✨</div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.32em] text-amber-100">
                    Seven Lotus Steps
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-black/20 p-4 text-sm leading-6 text-white/70">
              Mobile WebAR scene with camera view, sacred Lumbini garden, lotus animation, story panel and ambient sound.
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
