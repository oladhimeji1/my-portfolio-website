import React, { createContext, useEffect, useRef, useState } from "react";

export const ObserverContext = createContext();

export default function ObserverContextProvider(props){

    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);

    useEffect(()=>{
        observer.current = new IntersectionObserver(enteries => {
            const visibleSection = enteries.find(entry => entry.isIntersecting)?.target;
            // update state with the visible id
            if(visibleSection) {
                setActiveSection(visibleSection.id);
                console.log(visibleSection.id)
            }
        });

        // Getting custom attr data-section
        const sections = document.querySelectorAll('[data-section]');
        sections.forEach(section => {
            observer.current.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.current.unobserve(section);
            });
        }
    }, [])

    return (
        <ObserverContext.Provider value={{ activeSection, setActiveSection }}>
            { props.children }
        </ObserverContext.Provider>
    )
}
