import { useEffect } from "react";
import Card from "../components/card";
import Container from "../components/container";
import { projects } from "../hero/data";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeContext } from '../context/theme';
import { useContext } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Project() {

    const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className="pt-20 flex items-center" data-section id="projects" style={{ color: theme.textColor, background: theme.bg}}>
            <Container>
                <section className="relative pb-10">
                    <div className="text-center">
                        <h1 data-aos='fade-down' style={{ color: theme.bold}} className="font-bold text-5xl pb-3">Top Projects</h1>
                        <p data-aos='fade-up' className="text-lg">Each projects was developed uniquely from development to production</p>
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-10">
                        {projects.map(project => (
                            <div data-aos='zoom-in' className="" key={project.id}>
                            <Card project={project} theme = {theme} />   
                            </div>
                        ))}
                    </div>
                        
                    <div className="absolute hover:text-red-500 flex items-center animate-bounce font-semibold bottom-0 right-2">
                        <a className="inline" href="">See more</a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 mt-1 inline" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </div>
                </section>
            </Container>
        </div>
    )
}