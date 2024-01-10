
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function PanelList() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div>
    <center><h1 style={{fontSize:'60px'}}>Our Panel List</h1></center>
    <Slider {...settings}>
      <div>
        <img src = "1.png" width={100} height={100}/>
      </div>
      <div>
        <img src = "2.png" width={100} height={100}/>
      </div>
      <div>
        <img src = "3.png" width={100} height={100}/>
      </div>
      <div>
        <img src = "4.png" width={100} height={100}/>
      </div>

      <div>
        <img src = "5.png" width={100} height={100}/>
      </div>

      <div>
        <img src = "6.png" width={100} height={100}/>
      </div>

      <div>
        <img src = "7.png" width={100} height={100}/>
      </div>
    <div>      
        <img src = "8.png" width={100} height={100}/>
      </div>
      <div>
        <img src  = "9.jpeg" width={100} height={100}/>
      </div>
      <div>
        <img src = "10.png" width={100} height={100}/>
      </div>
      <div>
        <img src = "11.png" width={100} height={100}/>
      </div>
      <div>
        <img src = "14.png" width={100} height={100}/>
      </div>
      <div>
        <img src = "13.png" width={100} height={100}/>
      </div>

      <div>
        <img src = "14.jpeg" width={100} height={100}/>
      </div>

      <div>
        <img src = "15.jpeg" width={100} height={100}/>
      </div>

      <div>
        <img src = "16.png" width={100} height={100}/>
      </div>
      <div>
        <img src = "17.jpeg" width={100} height={100}/>
      </div>
      <div>
        <img src  = "18.png" width={100} height={100}/>
      </div>
      <div>
        <img src = "20.jpeg" width={100} height={100}/>
      </div>
      <div>
        <img src = "20.png" width={100} height={100}/>
      </div>
      <div>
        <img src = "21.png" width={100} height={100}/>
      </div>
      <div>
        <img src = "22.jpeg" width={100} height={100}/>
      </div>

      <div>
        <img src = "23.jpeg" width={100} height={100}/>
      </div>

      <div>
        <img src = "24.png" width={100} height={100}/>
      </div>

      <div>
        <img src = "25.png" width={100} height={100}/>
      </div>

    </Slider>
    </div>
  );
}
