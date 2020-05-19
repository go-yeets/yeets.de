import Header from './components/Header'
import User from './components/User'
import Footer from './components/Footer'

async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container">
      ${Header()}
      ${await User()}
      ${Footer()}
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;