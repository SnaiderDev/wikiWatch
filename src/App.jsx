import Home from "./components/home"
import { LanguageProvider } from "./context/ContextLanguage"


function App() {

  return (
    <LanguageProvider>
      <main className="h-min-screen relative  bg-neutral-950 text-neutral-50 font-iu">
        <Home />
      </main>
    </LanguageProvider>
  )
}

export default App