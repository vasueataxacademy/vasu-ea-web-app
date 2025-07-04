import './App.css'
// import constructionImg from './assets/construction.svg'
import logoImg from './assets/logo.jpeg'

function App() {
  return (
    <div className="under-construction-container">
      <img src={logoImg} alt="Under Construction" className="construction-image" />
      <h1>Under Construction</h1>
      <p>We're working hard to bring you something awesome!<br/>Please check back soon.</p>
    </div>
  )
}

export default App
