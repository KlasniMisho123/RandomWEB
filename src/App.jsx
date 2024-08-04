
import { useState } from "react"
import Footer from "./Components/Footer"
import Main from "./Components/Main"
import Sidebar from "./Components/Sidebar"

function App() {
  const [targetHero, setTargetHero] = useState('')

  function chooseHero() {

    const heroInput = document.querySelector("#heroInput")

    setTargetHero(heroInput.value)
    console.log("targetHero:", targetHero)
  }

  return (
    <>
      <Sidebar />
      <Main chooseHero={chooseHero} />
      <Footer />
    </>
  )
}

export default App;
