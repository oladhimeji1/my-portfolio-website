import { useEffect } from "react";
import Container from "../components/container";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeContext } from '../context/theme';
import { useContext } from 'react'


export default function Qualification() {
    useEffect(()=>{
        AOS.init({duration: 1000})
    }, []);
    const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className="pt-10 md:pt-20" data-section id="portfolio" style={{ color: theme.textColor, background: theme.bg}}>
            <Container>
                <section>
                    <div className="text-center">
                        <h1 data-aos='fade-down' style={{ color: theme.bold}} className="font-bold text-5xl pb-3">Portfolio</h1>
                        <p data-aos='fade-up' className="text-lg">My personal journey</p>
                    </div>

                    <div className="">
                        
                    <div className="block md:flex mt-5 justify-between">

                        {/* Work */}
                        <div data-aos='fade-right' className="">
                        <div className="flex mt-5 justify-center">
                            <h3 style={{ color: theme.bold }} className="font-semibold text-xl">Education</h3>
                        </div>
                            <div className="mt-5 grid grid-cols-[1fr_max-content_1fr] gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold">Bsc Computer Science</h3>
                                    <span className="inline-block font-semibold"> Federal University Lokoja </span>
                                    <div className="text-sm qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2019-2022
                                    </div>
                                </div>

                                <div className="mt-1">
                                    <span style={{ backgroundColor: theme.textColor}} className="inline-block w-3 h-3 rounded-full bg-white"></span>
                                    <span style={{ backgroundColor: theme.textColor}} className="h-full w-[1px] block bg-white translate-x-[5px] translate-y-[-6px]"></span>
                                </div>
                            </div>
                            <div className=" grid grid-cols-[1fr_max-content_1fr] gap-6">

                                <div></div>
                                <div className="mt-1">
                                    <span style={{ backgroundColor: theme.textColor}} className="inline-block w-3 h-3 rounded-full bg-white"></span>
                                    <span style={{ backgroundColor: theme.textColor}} className="h-full w-[1px] block bg-white translate-x-[5px] translate-y-[-6px]"></span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Microsoft Powerplatform</h3>
                                    <span className="inline-block font-semibold text-sm"> Tech Mahindra </span>
                                    <div className="text-sm qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-[1fr_max-content_1fr] gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold">GDSC Core Team Member</h3>
                                    <span className="inline-block font-semibold text-sm"> Tech Team </span>
                                    <div className="text-sm qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                    </div>
                                </div>

                                <div className="mt-1">
                                    <span style={{ backgroundColor: theme.textColor}} className="inline-block w-3 h-3 rounded-full bg-white"></span>
                                    <span style={{ backgroundColor: theme.textColor}} className="h-full w-[1px] block bg-white translate-x-[5px] translate-y-[-6px]"></span>
                                </div>
                            </div>
                        </div>

                        {/* Education */}
                        <div data-aos='fade-left' className="">
                        <div className="flex mt-14 md:mt-5 justify-center">
                            <h3 style={{ color: theme.bold }} className="font-semibold text-xl">Work Experience</h3> 
                        </div>
                            <div className="mt-5 grid grid-cols-[1fr_max-content_1fr] gap-6">
                                <div>
                                    <h3 className="text-lg font-medium">Konectar Nig. Ltd</h3>
                                    <span className="inline-block font-semibold text-sm text-md">Software Developer</span>
                                    <div className="text-sm mt-3">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Present
                                    </div>
                                </div>

                                <div className="mt-1">
                                    <span style={{ backgroundColor: theme.textColor}} className="inline-block w-3 h-3 rounded-full bg-white"></span>
                                    <span style={{ backgroundColor: theme.textColor}} className="h-full w-[1px] block bg-white translate-x-[5px] translate-y-[-6px]"></span>
                                </div>
                            </div>
                            <div className=" grid grid-cols-[1fr_max-content_1fr] gap-6">

                                <div></div>
                                <div className="mt-1">
                                    <span style={{ backgroundColor: theme.textColor}} className="inline-block w-3 h-3 rounded-full bg-white"></span>
                                    <span style={{ backgroundColor: theme.textColor}} className="h-full w-[1px] block bg-white translate-x-[5px] translate-y-[-6px]"></span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Spexes Consulting Nig. Ltd</h3>
                                    <span className="inline-block font-semibold text-sm">Frontend Developer</span>
                                    <div className="text-sm qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Present
                                    </div>
                                </div>
                            </div>
                            <div className=" grid grid-cols-[1fr_max-content_1fr] gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold">Enovellab</h3>
                                    <span className="inline-block font-semibold text-sm">Frontend Developer (intern) </span>
                                    <div className="text-sm qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Present
                                    </div>
                                </div>

                                <div className="mt-1">
                                    <span style={{ backgroundColor: theme.textColor}} className="inline-block w-3 h-3 rounded-full bg-white"></span>
                                    <span style={{ backgroundColor: theme.textColor}} className="h-full w-[1px] block bg-white translate-x-[5px] translate-y-[-6px]"></span>
                                </div>
                            </div>
                            <div className=" grid grid-cols-[1fr_max-content_1fr] gap-6">

                                <div></div>
                                <div className="mt-1">
                                    <span style={{ backgroundColor: theme.textColor}} className="inline-block w-3 h-3 rounded-full bg-white"></span>
                                    <span style={{ backgroundColor: theme.textColor}} className="h-full w-[1px] block bg-white translate-x-[5px] translate-y-[-6px]"></span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Gitech Nig. Ltd</h3>
                                    <span className="inline-block font-semibold text-sm">Frontend Developer/Instructor</span>
                                    <div className="text-sm qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022
                                    </div>
                                </div>
                            </div>
                            <div className=" grid grid-cols-[1fr_max-content_1fr] gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold">HNG</h3>
                                    <span className="inline-block font-semibold text-sm">Frontend Developer (intern) </span>
                                    <div className="text-sm qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022
                                    </div>
                                </div>

                                <div className="mt-1">
                                    <span style={{ backgroundColor: theme.textColor}} className="inline-block w-3 h-3 rounded-full"></span>
                                    <span style={{ backgroundColor: theme.textColor}} className="h-full w-[1px] block translate-x-[5px] translate-y-[-6px]"></span>
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