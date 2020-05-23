import Header from './components/Header'
import Footer from './components/Footer'
import Contact from "./components/Contact";

async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div>
      ${Header()}
      ${Contact()}
      ${Footer()}
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;