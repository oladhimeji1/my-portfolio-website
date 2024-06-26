import { useEffect, useState } from "react";
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

    const [ all, setAll ] = useState('See all');
    const [ arraySlice, setArraySlice ] = useState(3);
    const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const onHandleBtn = () => {
        setAll(all ==='See all' ? 'See less' : 'See all')
        setArraySlice(all === 'See all' ? projects.length : 3);
    }
    return (
        <div className="pt-20 flex items-center" data-section id="projects" style={{ color: theme.textColor, background: theme.bg}}>
            <Container>
                <section className="relative pb-10">
                    <div className="text-center">
                        <h1 data-aos='fade-down' style={{ color: theme.bold}} className="font-bold text-5xl pb-3">Top Projects</h1>
                        <p data-aos='fade-up' className="text-lg">Each projects was developed uniquely from development to production</p>
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-10">
                        {projects.slice(0, arraySlice).map(project => (
                            <div data-aos='zoom-in' className="" key={project.id}>
                            <Card project={project} theme = {theme} />
                            </div>
                        ))}
                    </div>
                        
                    <div onClick={onHandleBtn} className="max-w-full mt-5 animate-bounce font-semibold">
                        <a className="inline">{all}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 inline" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <polyline points="9 18 15 12 9 6" />
                        </svg></a>
                    </div>
                </section>
            </Container>
        </div>
    )
}