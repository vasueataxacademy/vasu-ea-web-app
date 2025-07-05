import './App.css'
// import constructionImg from './assets/construction.svg'
import logoImg from './assets/logo.jpeg'
import underConstructionGif from './assets/under-construction-img.gif'

function App() {
  return (
    <div className="under-construction-container">
      <header className="site-header">
        <img src={logoImg} alt="Vasu EA Tax Academy Logo" className="logo-image" />
      </header>
      
      <main className="main-content">
        <section className="construction-notice">
          <img src={underConstructionGif} alt="Under Construction Animation" className="construction-gif" />
          <h1 className="sr-only">Vasu EA Tax Academy - Coming Soon</h1>
          <p>We're working hard to bring you something awesome!<br/>Please check back soon.</p>
        </section>
      </main>
      
      <footer className="site-footer">
        <p>&copy; 2024 Vasu EA Tax Academy. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
