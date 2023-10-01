import { useEffect } from "react";
import Container from "../components/container";
import reactLogo from '../img/dhim.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { ThemeContext } from '../context/theme';
import { useContext } from 'react'


export default function About() {
    useEffect(()=>{
        AOS.init({duration: 1000})
    document.addEventListener('aos:in:about', ({detail}) => console.log(5555));
    console.log(777)
    }, []);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className="pt-10" style={{ color: theme.textColor, background: theme.bg}}>
            <Container>
                <section data-section id="about">
                    <div className="text-center">
                        <h1 data-aos='fade-down' data-aos-id='about' style={{ color: theme.bold}} className="font-bold text-5xl pb-3">About Me</h1>
                        <p data-aos='fade-up' className="text-lg">Know more about me</p>
                    </div>

                    <div className="block md:flex justify-between mt-10 md:mt-20">
                        <div data-aos='fade-right' className="md:w-[80%] w-full">
                            <img src={reactLogo} className="h-[350px] md:w-[80%] w-full object-cover" alt="" />
                        </div>
                        <div data-aos='fade-left' className="max-w-[550px]">
                            <div className="md:px-2 pb-5 md:pb-0 mt-5 md:mt-0">
                                
                                <p className="text-lg text-justify">I have 2+ years of experience and a deep understanding of various web technologies such as HTML, CSS, JavaScript, NodeJs, MERN, and React.
                                I am dedicated to keeping up with the latest trends and techniques in web development, and I am constantly learning and expanding my skill set. I have a keen eye for detail and strive for perfection in every project I work on.
                                When I'm not coding, I enjoy exploring new technologies, trends and work on side projects. 
                                I graduated with BSc Computer Science, from Federal University Lokoja.</p>
                                <div className="flex gap-32 justify-center mt-5">
                                    <div className="text-center">
                                        <h2 style={{ color: theme.bold }} className="text-3xl font-bold">2+</h2>
                                        <p className="text-sm">Years experience</p>
                                    </div>
                                    {/* <div className="">
                                        <h2 style={{ color: theme.bold }} className="text-4xl font-bold">10+</h2>
                                        <p className="text-sm w-[20px]">Projects completed</p>
                                    </div> */}
                                    <div className="text-center">
                                        <h2 style={{ color: theme.bold }} className="text-4xl font-bold">4+</h2>
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