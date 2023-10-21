
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import MyAccount from "./Pages/MyAccount"

function App() {

  return (
    <div className="flex flex-col gap-6">
      <Navbar />
      <Home />
      <MyAccount />
    </div>
  )
}

export default App
