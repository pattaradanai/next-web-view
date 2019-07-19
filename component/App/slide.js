import React from "react"
import Slider from "react-slick"


class SimpleSlider extends React.Component {
  render() {
    var settings = {
      className: "center",
      dots: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const slideImages = [

      ];
    return(
        <div id="slide" >
            <Slider {...settings}>
                    {slideImages.map((value, key) => 
                    <div className="img-wrapper" key={`slide${key}`}>
                        <img src={value}/> 
                    </div>
                    )}
            </Slider>
        </div>
    )
  }
}

export default SimpleSlider