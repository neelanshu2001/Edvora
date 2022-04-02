import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

function Filter({state,city,setCity,setState,toggle}) {
    return (
        <div className='flex flex-col gap-2 w-48 py-3 px-3 bg-black h-42 absolute  '>
          <div className="flex justify-end">
          <div className="  bg-opacity-0.85 shadow-md h-6 rounded-full w-6 font-semibold m-1 text-sm  top-0 right-0 bg-red-600 text-gray-200 px-2 hover:cursor-pointer hover:bg-red-300 hover:text-white hover:scale-105 transition delay-150 text-center "
           onClick={toggle}>x</div></div>
          <Select
      closeMenuOnSelect={true}
      components={animatedComponents}
      defaultValue={city[0]}
      isMulti={false}
      options={city}
      placeholder={'City'}
      onChange={e=>setCity(e)}
    />  
       <Select
      closeMenuOnSelect={true}
      components={animatedComponents}
      defaultValue={state[0]}
      isMulti={false}
      options={state}
      placeholder={'State'}
      onChange={e=>setState(e)}
    /> 
        </div>
    );
}

export default Filter;