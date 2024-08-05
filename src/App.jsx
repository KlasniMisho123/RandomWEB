
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

    if(targetHero != "") {
      getHeroAPI();
      
      heroInput.value = ""
    } else {

    }



    async function getHeroAPI() {
      const url = `https://superheroapi.com/api/d99ab1ade8802d6e90d06c0e8a041b2e/search/${targetHero}`
       try {
        const res = await fetch(url)
        const apiData = await res.json()
        console.log(apiData)
       } catch(err){
        console.log(err)
       }
    }

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
