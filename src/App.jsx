import './App.css'
// import constructionImg from './assets/construction.svg'
import logoImg from './assets/logo.jpeg'
import underConstructionGif from './assets/under-construction-img.gif'

function App() {
  return (
    <div className="under-construction-container">
      <img src={logoImg} alt="logo" className="logo-image" />
      <img src={underConstructionGif} alt="Under Construction Animation" className="construction-gif" />
      <p>We're working hard to bring you something awesome!<br/>Please check back soon.</p>
    </div>
  )
}

export default App
