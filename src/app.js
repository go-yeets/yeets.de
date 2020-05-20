import Header from './components/Header'
import Footer from './components/Footer'

async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container">
      ${Header()}
      ${Footer()}
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;