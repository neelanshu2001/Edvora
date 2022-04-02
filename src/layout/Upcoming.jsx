
import {React,useState,useEffect} from 'react'

import List from '../basic/molecules/List';


const Upcoming =({user,items,curCity,curState})=>{
    
    
    
    return(
        <div className=" ">
           
            <List   items={items.filter(item=>
                item.state===curState || curCity===item.city
                
        )}/>
        </div>
    )
}

export default Upcoming;