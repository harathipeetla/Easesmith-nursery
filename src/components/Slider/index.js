import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import slider1 from '../../assests/slider1.png'
import slider2 from "../../assests/slider2.png"
import slider3 from '../../assests/slider3.png'
import slider4 from "../../assests/slider4.png"

import "./index.css"

const SliderSlick = () => {



    const sliderData = [
        {id:1, image: slider1, content: "Lorem ipsum dolor." },
        {id:2, image: slider2, content: "Lorem ipsum dolor." },
        {id:3, image: slider3, content: "Lorem ipsum dolor." },
        {id:4, image: slider4, content: "Lorem ipsum dolor." },
        {id:5, image: slider1, content: "Lorem ipsum dolor." },
        {id:6, image: slider2, content: "Lorem ipsum dolor." },
        {id:7, image: slider3, content: "Lorem ipsum dolor." },
        {id:8, image: slider4, content: "Lorem ipsum dolor." },


    ]
//large screen
    const settings ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    }


    //small screen
    const settings2 ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        }

        // medium screen 
        const settings3 ={
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            }


    return(
        <div>
        <div className='slider-container'>
            <h1 className='slider-title'>Nursery</h1>
            <Slider {...settings}>
                {sliderData.map((slid) =>(
                    <div key={slid.id} className='slid-container'>
                        <img src={slid.image} alt='slider'/>
                        <p>{slid.content}</p>
                    </div>
                ))}
            </Slider>
        </div>
        <div className='slider-container-small'>
        <h1 className='slider-title'>Nursery</h1>
            <Slider {...settings2}>
                {sliderData.map((slid) =>(
                    <div key={slid.id} className='slid-container'>
                        <img src={slid.image} alt='slider'/>
                        <p>{slid.content}</p>
                    </div>
                ))}
            </Slider>
        </div>
        <div className='slider-container-medium'>
        <h1 className='slider-title'>Nursery</h1>
            <Slider {...settings3}>
                {sliderData.map((slid) =>(
                    <div key={slid.id} className='slid-container'>
                        <img src={slid.image} alt='slider'/>
                        <p>{slid.content}</p>
                    </div>
                ))}
            </Slider>
        </div>
        </div>
    )
}

export default SliderSlick