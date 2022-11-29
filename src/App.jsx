import { Galeria } from "./components/Galeria"

function App() {

  return (
    <>
      <header className="bg-dark text-light text-center py-5">
        <p className="h1">PhotoSearcher</p>
        <p>Práctica Buscador de Fotos</p>
      </header>
      <main className="container my-4">
        <Galeria />
      </main>
      <footer className="bg-dark text-light text-center py-1">
        <p className="h6">PhotoSearcher</p>
      </footer>
    </>
  )
}

export default App
