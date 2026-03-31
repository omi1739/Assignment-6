import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Cart from './components/Cart'
import Footer from './components/Footer'
import LastBanner from './components/LastBanner'
import MainCard from './components/MainCard'
import NavBar from './components/NavBar'
import Pricing from './components/Pricing'
import Status from './components/Status'
import Steps_3 from './components/Steps_3'
import Tab from './components/Tab'


const getData =  async ()=>{
  const res = await fetch('./data.json')
  return res.json()
}

const dataPromice = getData()

function App() {

  const [activeTab, setActiveTab] = useState('Products')
  const [carts, setCarts] = useState([])

  return (
    <>
      <NavBar/>

      <Banner/>

      <Status/>

      <Tab  carts={carts} setActiveTab={setActiveTab}/>

      {activeTab === 'Products' && <MainCard dataPromice={dataPromice} carts={carts} setCarts={setCarts} />}

      {activeTab === 'Carts' && <Cart carts={carts} setCarts={setCarts} />}

      <Steps_3/>

      <Pricing/>

      <LastBanner/>

      <Footer/>

    </>
  )
}

export default App
