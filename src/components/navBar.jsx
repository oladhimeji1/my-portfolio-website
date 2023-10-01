import { useContext, useState } from 'react'
import logo from '../img/Oladhimeji_fav.jpg'
import switch1 from '../img/icon/switch1.svg'
import switch2 from '../img/icon/switch2.svg'
import Container from './container'
import { ThemeContext } from '../context/theme';
import { ObserverContext } from '../context/observer'


export default function Navbar() {

    const navItems = [
        {
            name: 'Home',
            path: ''
        },
        {
            name: 'About',
            path: 'about'
        },
        {
            name: 'Portfolio',
            path: 'portfolio'
        },
        {
            name: 'Projects',
            path: 'projects'
        },
        {
            name: 'Contact',
            path: 'contact'
        },
    ]
    const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
    const { activeSection, setActiveSection } = useContext(ObserverContext);
    const theme = isLightTheme ? light : dark;
    const navThem = isLightTheme ? dark : light;
    const [openNav, setOpenNav] = useState(false);

    const [active, setActive] = useState(0)

    function toggleNav(){
        setOpenNav(!openNav)
    }
    return (
        <div style={{ color: theme.textColor, background: theme.bg}} className='z-50 sticky top-0 bg-white'>
        <Container>
            <nav className="md:flex block justify-between items-center py-5">
                <div className="flex items-center justify-between">
                <div className="flex items-center justify-center">
                    <img src='https://res.cloudinary.com/dqjkwyzgx/image/upload/v1696167375/Oladhimeji_fav_rxwxgg.jpg' className="h-[30px] max-w-[30px] rounded-full mr-3" alt="" />
                    <span className="font-medium">Abdulrazaq Oladimeji</span>
                </div>

                <div
                onClick={toggleNav}
                 className="cursor-pointer md:hidden">
                {!openNav ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
  <line x1="3" x2="21" y1="12" y2="12" />
  <line x1="3" x2="21" y1="6" y2="6" />
  <line x1="3" x2="21" y1="18" y2="18" />
</svg> : 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
  <line x1="18" x2="6" y1="6" y2="18" />
  <line x1="6" x2="18" y1="6" y2="18" />
</svg>}
                </div>
                </div>

                { <div className={`relative md:hidden w-full ${openNav ? 'slide' : 'out'}`}>
                <div style={{ color: navThem.bg, background: navThem.textColor}} className="absolute list-none w-full top-5 font-semibold p-3 left-0">
                    {navItems.map((i, index) => (
                        <a key={index} className='py-2 hover:bg-gray-400 px-3 block' href={i.path}>{i.name}</a>
                    ))}
                    
                    {isLightTheme ? 
                    <li onClick={toggleTheme} className="py-1 px-3 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <rect height="14" rx="7" ry="7" width="22" x="1" y="5" />
                    <circle cx="8" cy="12" r="3" />
                    </svg></li> :
                    <li onClick={toggleTheme} className="py-1 px-3 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <rect height="14" rx="7" ry="7" width="22" x="1" y="5" />
                    <circle cx="16" cy="12" r="3" />
                    </svg></li>}
                </div>
                </div>}  

                <div className="md:flex hidden justify-evenly list-none">

                    {navItems.map((nav, index) => (
                        <a key={index}
                        onClick={() => setActiveSection(nav.path)}
                         className={`${activeSection === nav.path ? 'border-b-2' : ''} hover:text-gray-400`} href={`/#${nav.path}`}><li className="py-1 px-3 ">{nav.name}</li></a>
                    ))}

                    {isLightTheme ? 
                    <li onClick={toggleTheme} className="py-1 px-3 cursor-pointer">
                        <img src={switch1} alt="" />
                    </li> :
                    <li onClick={toggleTheme} className="py-1 px-3 cursor-pointer">
                        <img src={switch2} alt="" className='' />
                    </li>}
                </div>
                
            </nav>
        </Container>
            <hr />
        </div>
         
    )
}