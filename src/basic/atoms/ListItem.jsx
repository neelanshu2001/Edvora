import React from 'react';
import map from '../../assets/images/map.png'
/*city: "Thanesar"
date: "03/26/2022 04:18 PM"
destination_station_code: 93
id: 661
map_url: "https://picsum.photos/200"
origin_station_code: 5
state: "Haryana"
station_path: Array(4)
0: 56
1: 67
2: 78
3: 80*/
const ListItem =({item})=> {
    return (
        <div className='bg-[#171717] flex justify-between p-4  rounded-md '>
            <div className="flex flex-row " >
                <img src={item.map_url} className='h-32 w-64 rounded-sm mr-5'/>
            <div className='flex flex-col justify-start text-white text-opacity-50'>
                
                <div className='flex flex-row  '>
                   <div className="">Ride Id : </div>  <div className='text-white'>{item.id}</div>
                </div>
                <div className='flex flex-row '>
                <div className=""> Origin Station : </div><div className='text-white'>{item.origin_station_code}</div>
                </div>
                <div className='flex flex-row '>
                <div className="">  station_path : </div> <div className='text-white'> [ {item.station_path.map(station=><p className='inline'>{station},</p>)} ]</div>
                </div>
                <div className="flex flex-row ">
                <div className=""> Date : </div> <div className='text-white'> {item.date} </div>
                </div>
                <div className="flex flex-row ">
                <div className=""> Distance :  </div><div className='text-white'>{item.distance} </div>
                </div>
            </div>
            </div>
            <div className='flex flex-row gap-4 '>
                
                <div className="text-white bg-black rounded-lg py-1 px-2 h-8">{item.state}</div>
                <div className="text-white bg-black rounded-lg  py-1 px-2 h-8 ">{item.city}</div>
                
            </div>
        </div>
    );
}

export default ListItem;