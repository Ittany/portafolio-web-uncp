import FondoBurbujas from "./components/FondoBurbujar"
import Navbar from "./components/Navbar"
import Inicio from './components/Inicio';

const App = () => {
  return (
    <div>
      <h1 class="text-3xl font-bold underline">
        <FondoBurbujas/>
        <Navbar/>
        <Inicio />
      </h1>
    </div>
  )
}

export default App