
import {React} from 'react'

import List from '../basic/molecules/List';


const Past= ({user,items,curCity,curState})=>{
    
    
    
    return(
        <div className=" ">
           
            <List  items={items.filter(item=>
                item.state===curState || curCity===item.city
                
        )}/>
        </div>
    )
}


export default Past;