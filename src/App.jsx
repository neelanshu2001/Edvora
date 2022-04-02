
import './App.css'
import Nearest from './layout/Nearest'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {React,useState,useEffect} from 'react'
import Navbar from './basic/atoms/Navbar';
import Paginate from './basic/molecules/Paginate';
import Upcoming from './layout/Upcoming';
import Past from './layout/Past';
import Filter from './basic/atoms/Filter';

function App() {
  const [items,setItems]=useState([])
  const [user,setUser]=useState({})
  const [city,setCity]=useState([])
  const [state,setState]=useState([])
  const [open,setOpen] =useState(false);
  const [curCity,setCurCity]=useState();
  const [curState,setCurState]=useState();
  const toggle=()=>{
    setOpen(!open);
  }

 


  const getItems=()=>{
    axios.get('https://assessment.api.vweb.app/rides').then((response)=>{
      var userd= Object.keys(user)==0 ? 0 : user.station_code
      console.log(user)
        const rides=response.data && response.data.map(ride=>{
          var minDistance=Infinity;
         
          for(let i=0;i<ride.station_path.length;i++)
          {
            minDistance=Math.min(minDistance,Math.abs(ride.station_path[i]-userd))
          }
          return ({
            ...ride,
            distance:minDistance
          })
        });
        console.log(rides)
        setItems(rides)
        const states=[]
        rides.map(ride=>{
          if (states.indexOf({value:ride.state, label:ride.state}) === -1) {
              states.push({value:ride.state, label:ride.state})
          }
      })
        setState(states);
        const cities=[]
        rides.map((ride)=>{
          if (cities.indexOf({value:ride.city, label:ride.city}) === -1) {
              cities.push({value:ride.city, label:ride.city})
          }
      })
        setCity(cities)
       // console.log(cities)
       // console.log(states)

    })
  }
  
  const getUser=async()=>{
    const response= await axios.get('https://assessment.api.vweb.app/user')
    
    const users=await response.data;
    setUser(users,getItems());
   //console.log(user)
    console.log(users)
    

}
  
  
  
  
  useEffect(()=>{ 
      getUser()  },[]);
   
  return (
    <div className="App bg-[#303632] h-screen">
     
    <BrowserRouter>
    <Navbar user={user}/>
    <div className="flex flex-row justify-between mx-8 items-center ">
     <Paginate/>
     {open?<div className='mr-48'><Filter state={state} city={city} setCity={(e)=>{setCurCity(e.value); //console.log(curCity)
     }} setState={(e)=>setCurState(e.value)} toggle={toggle}/></div>:
     <div className='text-white cursor-pointer' onClick={toggle}>Filters </div>}
     
     </div>
    <Routes>
     <Route path='/' element={<Nearest items={items} user={user} curState={curState} curCity={curCity} />}/>
     <Route path='/upcoming' element={<Upcoming items={items} user={user} curState={curState} curCity={curCity}/>}/>
     <Route path='/past' element={<Past items={items} user={user} curState={curState} curCity={curCity} />}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
