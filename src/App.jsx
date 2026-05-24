import { useMemo, useState } from 'react'
import Home from './pages/Home.jsx'
import Instructions from './pages/Instructions.jsx'
import Story from './pages/Story.jsx'

export default function App() {
  const [page, setPage] = useState('home')
  const [language, setLanguage] = useState('en')

  const currentPage = useMemo(() => {
    if (page === 'instructions') {
      return <Instructions language={language} setLanguage={setLanguage} goHome={() => setPage('home')} />
    }
    if (page === 'story') {
      return <Story language={language} setLanguage={setLanguage} goHome={() => setPage('home')} />
    }
    return <Home language={language} setLanguage={setLanguage} goInstructions={() => setPage('instructions')} goStory={() => setPage('story')} />
  }, [page, language])

  return currentPage
}
