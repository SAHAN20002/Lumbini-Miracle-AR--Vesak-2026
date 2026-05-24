import { ArrowLeft, Camera, ExternalLink, Printer } from 'lucide-react'
import PageShell from '../components/PageShell.jsx'
import { content } from '../data/content.js'

export default function Instructions({ language, setLanguage, goHome }) {
  const t = content[language]

  return (
    <PageShell language={language} setLanguage={setLanguage}>
      <section className="mx-auto flex min-h-[78vh] w-full max-w-3xl items-center py-10">
        <div className="glass w-full rounded-[2rem] p-6 shadow-2xl md:p-10">
          <button onClick={goHome} className="mb-6 inline-flex items-center gap-2 text-white/70 hover:text-white">
            <ArrowLeft size={18} />
            {t.back}
          </button>

          <h1 className="text-4xl font-black text-white md:text-5xl">{t.instructionTitle}</h1>

          <div className="mt-8 grid gap-4">
            {[t.step1, t.step2, t.step3].map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-amber-300 font-black text-slate-950">
                  {index + 1}
                </div>
                <p className="leading-7 text-white/80">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href="/ar.html"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-300 px-5 py-4 font-bold text-slate-950 shadow-xl shadow-amber-900/30"
            >
              <Camera size={20} />
              {t.openAR}
            </a>

            <a
              href="/target.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 font-bold text-white"
            >
              <Printer size={20} />
              {t.printTarget}
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200/20 bg-amber-200/10 p-4">
            <p className="font-bold text-amber-100">{t.noteTitle}</p>
            <p className="mt-2 text-sm leading-6 text-white/65">{t.note}</p>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
