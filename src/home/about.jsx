import { useEffect, useState } from "react";
import Container from "../components/container";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { ThemeContext } from '../context/theme';
import { useContext } from 'react'


export default function About() {
    
  const [ year, setYear ] = useState(3);

  var presentYear = 2024
  const d = new Date();
  var newYear = d.getFullYear();
  
    useEffect(()=>{
        setYear(year + (newYear - presentYear));
        AOS.init({duration: 1000})
        document.addEventListener('aos:in:about', ({detail}) => {});
    }, []);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className="pt-10 overflow-x-hidden" style={{ color: theme.textColor, background: theme.bg}}>
            <Container>
                <section data-section id="about">
                    <div id="container-92cc75edd7915abadf199e3d07203d17"></div>
                    <div className="text-center">
                        <h1 data-aos='fade-down' data-aos-id='about' style={{ color: theme.bold}} className="font-bold text-5xl pb-3">About Me</h1>
                        <p data-aos='fade-up' className="text-lg">Know more about me</p>
                    </div>

                    <div className="block md:flex justify-between mt-10 md:mt-20">
                        <div data-aos='fade-right' className="md:w-[80%] w-full">
                            <img src='https://res.cloudinary.com/duoowadag/image/upload/v1719387295/cloudinary/hpynxgjzzjlz4tgmxhcb.jpg' className="h-[350px] md:w-[80%] w-full object-cover" alt="" />
                        </div>
                        <div data-aos='fade-left' className="max-w-[550px]">
                            <div className="md:px-2 pb-5 md:pb-0 mt-5 md:mt-0">
                                
                                <p className="text-lg text-justify">I have {year}+ years of experience and a deep understanding of various web technologies such as HTML5, CSS3, JavaScript ES7 & jQuery, NodeJs, MERN, ReactJs, MongoDB, MySQL, Wordpress, etc and mobile technologies such as React Native, firebase.
                                I am dedicated to keeping up with the latest trends and techniques in both web and mobile development, and I am constantly learning and expanding my skills set. I have a keen eye for details and strive for perfection in every project I work on.
                                When I'm not coding, I enjoy exploring new technologies, trends and work on side projects. 
                                I graduated with BSc Computer Science, from Federal University Lokoja.</p>
                                <div className="flex w-full justify-between md:gap-32 md:justify-center mt-5">
                                    <div className="text-center">
                                        <h2 style={{ color: theme.bold }} className="text-3xl font-bold">{year}+</h2>
                                        <p className="text-sm">Years experience</p>
                                    </div>
                                    <div className="text-center">
                                        <h2 style={{ color: theme.bold }} className="text-3xl font-bold">10+</h2>
                                        <p className="text-sm w-[20px]">Projects completed</p>
                                    </div>
                                    <div className="text-center">
                                        <h2 style={{ color: theme.bold }} className="text-3xl font-bold">8+</h2>
                                        <p className="text-sm">Companies worked/interned</p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    
                </section>
            </Container>
        </div>
    )
}
