import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import map from '../../assets/images/map.png'

function Navbar({user}) {
 
  return (
    <div>
      <nav className="bg-[#101010]">
        <div className="flex justify-between">
            <div className="max-w-7xl mx-4 px-4 sm:px-6 lg:px-8">
            <div className="text-left text-white font-bold text-3xl py-5">
                Edvora
            </div>
            </div>
        <div className="flex flex-row gap-4 items-center  mr-4">
            
            <div className="text-white font-bold text-lg"> {user.name}</div>
            <img src={user.url} className="h-10 w-10 rounded-full"/>
        </div>
        </div>
      </nav>

     
    </div>
  );
}

export default Navbar;