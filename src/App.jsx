import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import { RotatingTriangles } from 'react-loader-spinner'


function App() {
  const [loading,setLoading]=useState(false)
  
  useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
          setLoading(false);
      },3000)
  },[])

  return (
    <>
     
      <div >
      {
        loading?<div className='App'>< RotatingTriangles
        visible={true}
        height="200"
        width="100"
        
        ariaLabel="rotating-triangles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        /></div>
        :<div>
           <NavBar></NavBar>
        <PriceOptions></PriceOptions>
        <Footer></Footer>
        </div>
       
      }
      
      </div>
      
    </>
  )
}

export default App
