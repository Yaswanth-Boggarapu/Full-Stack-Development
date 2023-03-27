import React from "react";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./App.css";

function App() {
  const Images =[    
    {
      url: "C://Users//HP//Desktop//Taboo//Sem VI//LAB//Full Stack Development//Full-Stack-Development//Exercise8//imageslider//src//images//1.jpg"
    },
    {
      url: "C://Users//HP//Desktop//Taboo//Sem VI//LAB//Full Stack Development//Full-Stack-Development//Exercise8//imageslider//src//images//2.jpg"
    },

    {
      url: "C://Users//HP//Desktop//Taboo//Sem VI//LAB//Full Stack Development//Full-Stack-Development//Exercise8//imageslider//src//images//3.jpg"
    },
    {
      url: "C://Users//HP//Desktop//Taboo//Sem VI//LAB//Full Stack Development//Full-Stack-Development//Exercise8//imageslider//src//images//4.jpg"
    },
    {
      url: "C://Users//HP//Desktop//Taboo//Sem VI//LAB//Full Stack Development//Full-Stack-Development//Exercise8//imageslider//src//images//5.jpg"
    }                
  ];
  const [activeImage, setCurrent] = useState(0);
  const length = Images.length;
  const nextSlide = ()=>{
    setCurrent(activeImage === length -1 ? 0: activeImage+1);
  };
  const prevSlide = ()=>{
    setCurrent(activeImage === 0 ? length-1: activeImage-1);
  };
  if(!Array.isArray(Images)||Images.length <= 0)
  {
    return null;
  }
  return(
    <div>
      <h1 style={{textAlign:'center'}}>Image Slider</h1>
       <section class = "imageslider">
        <div class = "left">
          <ArrowBackIosIcon onClick = {prevSlide}/>
        </div>
        <div class = "right">
          <ArrowForwardIosIcon onClick = {nextSlide}/>
        </div>
        {
          Images.map((currentSlide, ind)=>{
            return(
              <div className={ind === activeImage ? "currentSlide active":"CurrentSlide"}
              key = {ind}>
                 {ind === activeImage && <img src= {currentSlide.url} className="image" alt= "not loaded" />}
              </div>
            )
          })
        }     
       </section>
    </div>
  )
}

export default App;
