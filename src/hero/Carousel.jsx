
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { data } from './data';
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Container from "../components/container";
import { useEffect } from "react";
import { ThemeContext } from '../context/theme';
import { useContext } from 'react';

import reactnative from '../img/icon/reactnative.png'
import node from '../img/icon/nodejs.png'
import js from '../img/icon/javascript.svg'
import react from '../img/icon/react.svg'
import css from '../img/icon/css3.svg'
import html from '../img/icon/html.svg'


export default function Carousel(){
    const settings = {
        dots: true,
        arrows: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
    };
    useEffect(()=>{
        AOS.init({duration: 1000, mirror: true, once: false, debounceDelay: 50})
    }, [])
    const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div style={{ color: theme.textColor, background: theme.bg}} data-section id="" className="">
            <Container>
                <Slider {...settings}>
                    {data.map(item => (
                        <div className="" key={item.id}>
                            <div className={`md:flex justify-between flex-col-reverse md:flex-row flex mt-7 md:mt-0 items-center md:h-[90vh] h-full w-full`}>
                                <div className="flex justify-center w-[90%] items-center">
                                    <div data-aos='fade-right' className="aos-item" data-aos-mirror='true'>
                                        <h1 style={{ color: theme.bold }} className="md:text-[50px] text-[40px] md:leading-[4rem] leading-[3rem] md:mb-10 my-5 font-bold">{ item.title }</h1>
                                        <p className="text-lg">{ item.desc }</p>

                                        <div id="about" className="flex gap-5">
                                            
                                            <img src={html} className="w-10 md:leading-[4rem] leading-[3rem] md:mb-10 my-5" alt="" />
                                            
                                            <img src={css} className="w-10 md:leading-[4rem] leading-[3rem] md:mb-10 my-5" alt="" />

                                            <img src={js} className="w-10 md:leading-[4rem] leading-[3rem] md:mb-10 my-5" alt="" />

                                            <img src={react} className="w-10 md:leading-[4rem] leading-[3rem] md:mb-10 my-5" alt="" />

                                            <img src={node} className="w-10 md:leading-[4rem] leading-[3rem] md:mb-10 my-5" alt="" />

                                            <img src={reactnative} className="w-10 md:leading-[4rem] leading-[3rem] md:mb-10 my-5" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div data-aos='fade-left' className="md:h-96 h-60  w-full md:w-[90%]">
                                    <img src={ item.img } className="h-full w-full md:w-[90%] object-cover md:rounded-3xl" alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    )
}