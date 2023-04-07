import React, { useState } from 'react'
import { TiChevronLeft,TiChevronRight } from "react-icons/ti";
export const Testimonial = (props) => {

    const data=props.data;
   const [value,setValue]=useState(0);
    

     function prevClickHandler()
     {  
        if(value -1 < 0)
        {
            setValue(parseInt(data.length)-1);
            console.log(value);
        }
        else {
            setValue(value-1);
            console.log(value);
        }
     }

     function nextClickHandler()
     {
        if(value + 1 >= parseInt(data.length))
        {
            setValue(0);
            console.log(value);
        }
        else {
           setValue(value+1);
           console.log(value);
        } 
       
     }

     function surpriseHandler()
     {
        
        setValue((Math.floor(Math.random()*(data.length))))
        console.log(value);
     }

  return (
    <div className=" relative w-[700px] h-[500px] flex flex-col flex-wrap justify-center   border-slate-200 border-[1px] rounded-[8px] shadow-xl  ">
        <img src={data[value].image} alt='' className='w-[120px] h-[120px] rounded-[50%] absolute top-[-38px] left-[30px]'/>
        <div className='flex flex-col justify-center items-center gap-4'>
            <h2 className='text-[2rem] text-black font-bold li tracking-normal'>{data[value].name}</h2>
            <h3 className='text-[1.5rem] text-purple-500 font-bold mt-[-22px]'>{data[value].job}</h3>
            -----
            <p className='text-[1.2rem] px-[20px] text-blue-800'>{data[value].text}</p>
            -----
            <div>
                <button onClick={prevClickHandler} >
                <TiChevronLeft fontSize='3rem' />
                </button>
                <button onClick={nextClickHandler} >
                <TiChevronRight  fontSize='3rem'  />
                </button>
            </div>
            <button onClick={surpriseHandler} className='w-[160px] h-[50px] bg-blue-400 text-white font-bold text-[1.2rem] rounded-[7px] tracking-[1px] shadow-2xl'>Surprise Me</button>
        </div>


    </div>
  )
}
