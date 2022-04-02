
import React,{ useEffect, useState }from 'react';

import ListItem from '../atoms/ListItem';





function List({items}) {
  
    
    return (
        <div className="overflow-y-auto h-[75vh] mx-6 my-5">
        <div className='grid grid-rows-auto grid-cols-1 gap-2'>
            {
           items.sort((a,b)=>((a.distance>b.distance )? 1 : (a.distance<b.distance ) ? -1 : 0)).map((item,index)=>(
                <ListItem key={index} item={item} />
            ))}
        </div>
        </div>
    );
}

export default List;