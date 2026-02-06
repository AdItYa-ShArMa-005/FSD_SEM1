import './App.css'
import './components/Header.css'
import './components/Footer.css'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
// import Form from './components/Main.jsx'

function App() {
const y=[2024,2025,2026];
const c={company:"KIET",location:"Ghaziabad",EstYear:1990};
  return (
   <div>
    <Header title="My first react app."/>
    <Header title="We are learning react."/>
    <div className="body">
    <h1>Hello</h1>
    <h1>thanks</h1>
    {/* <Form /> */}
    </div>
    <Footer greet="Thanks for class" person="Aditya" year={y} company={c}/>
   </div>
  )
}

export default App
