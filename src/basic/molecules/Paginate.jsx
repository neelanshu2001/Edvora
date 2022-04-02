import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Paginate=(props)=> {
    return (
        <div className='my-8 flex flex-row gap-5 text-white text-opacity-70  font-semibold mx-6 text-lg my-2'>
            <NavLink to='/' style={({isActive})=> isActive?{textDecoration:"underline",color:'rgba(255,255,255,1)'}: undefined}>Nearest Rides</NavLink>
            <NavLink to='/upcoming' style={({isActive})=> isActive?{textDecoration:"underline",color:'rgba(255,255,255,1)'}: undefined}>Upcoming Rides</NavLink>
            <NavLink to='/past' style={({isActive})=> isActive?{textDecoration:"underline",color:'rgba(255,255,255,1)'}: undefined}>Past Rides</NavLink>
        </div>
    );
}

export default Paginate;