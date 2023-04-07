import React from "react";
import { Heading } from "./components/Heading";
import { Testimonial } from "./components/Testimonial";
import reviews from "./data";
const App = () => {

  const data=reviews;

  return (
  <div className=" w-[100vw] h-[100vh] flex flex-col justify-center items-center realtive">
    <div className='relative'>
    <Heading  />
    <div className="w-[150px] h-[4px] bg-purple-300 absolute top-[50px] left-[70px] mt-[10px]"></div>
    </div>
    
    <Testimonial data={data}/>
  </div>
  )
};

export default App;
