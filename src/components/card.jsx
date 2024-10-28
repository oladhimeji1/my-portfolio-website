import node from '../img/icon/nodejs.png';
import php from '../img/icon/php.png';
import tailwind from '../img/icon/tailwind.png';
import python from '../img/icon/python.png';
import css from '../img/icon/css3.svg';
import html from '../img/icon/html.svg';
import js from '../img/icon/javascript.svg';
import react from '../img/icon/react.svg';
import github from '../img/icon/github.svg';
import link from '../img/icon/link.svg';

export default function Card(props) {
    
    return (
        <div className="card rounded-lg relative md:w-[320px] w-full md:h-[360px] h-[400px] pb-[20px]">
            <div className="">
            <div className="card-header-bar">
                <a title="Preview" href={ props.project.previewLink } target='_blank' className="w-8 h-8 inline-block mt-4 mr-3 float-right">
                <div className="bg-white p-1 shadow-[0_0_5px] rounded-full transform hover:scale-125 transition-all cursor-pointer">
                    <img src={link} className="main-grid-item-icon" alt="" />
                </div></a>
                

                <a title="Get code on github" href={ props.project.githubLink } className="w-8 h-8 inline-block mt-4 ml-3 float-left">
                    
                <div className="bg-white p-1 shadow-[0_0_5px] rounded-full transform hover:scale-125 transition-all cursor-pointer">
                    <img src={github} className="main-grid-item-icon" alt="" />
                </div></a>
            </div>
            <img src={props.project.img} className='md:h-[180px] rounded-tl-lg rounded-tr-lg h-[200px] w-full object-cover' alt="" />
            </div>
    
            <div className="text-center ">
                <h2 className="text-2xl text-red font-bold">{ props.project.title }</h2>
                {/* <h4 className="text-xs">({ props.project.type })</h4> */}
                <div className="px-2 mt-3 text-sm text-justify">{ props.project.desc }
            </div>
            
                {/* Stacks */}
            <div className="flex gap-5 absolute bottom-2 left-[50%] -translate-x-[50%] justify-center">
                {props.project.stack.map(stack => {
                    if(stack === 'html'){
                        return(
                            <img className="w-6 h-6" src={html} alt="" />
                        )
                    }
                    if(stack === 'css'){
                        return(
                            <img className="w-6 h-6" src={css} alt="" />
                        )
                    }
                    if(stack === 'python'){
                        return(
                            <img className="w-6 h-6" src={python} alt="" />
                        )
                    }
                    if(stack === 'tailwindcss'){
                        return(
                            <img className="w-6 h-6" src={tailwind} alt="" />
                        )
                    }
                    if(stack === 'node'){
                        return(
                            <img className="w-6 h-6" src={node} alt="" />
                        )
                    }
                    if(stack === 'php'){
                        return(
                            <img className="w-6 h-6" src={php} alt="" />
                        )
                    }
                    if(stack === 'js'){
                        return(
                            <img className="w-6 h-6" src={js} alt="" />
                        )
                    }
                    if(stack === 'react'){
                        return(
                            <img className="w-6 h-6" src={react} alt="" />
                        )
                    }
                })}
                </div>
            </div>
        </div> 
    )
}