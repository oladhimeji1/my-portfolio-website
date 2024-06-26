import { useEffect, useState } from "react";
import Container from "../components/container";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "../context/theme";
import { useContext } from "react";

export default function Contact() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const theme2 = isLightTheme ? dark: light;
  return (
    <div
      className="pt-20 pb-5"
      data-section
      id="contact"
      style={{ color: theme.textColor, background: theme.bg }}
    >
      <Container>
        <section id="about">
          <div className="text-center">
            <h1
              data-aos="fade-down"
              style={{ color: theme.bold }}
              className="font-bold text-5xl pb-3"
            >
              Contact Me
            </h1>
            <p data-aos="fade-up" className="text-lg">
              Get in touch, let me work for you
            </p>
          </div>

          <div className="block md:flex mt-5 justify-center w-full">
            <div className="bg-back p-10 shadow-md md:w-[40%] text-center">
              <p><b>Social Media Handles</b></p>

              <p className="my-5 gap-2 flex">
              <a
                href="https://wa.me/message/C3R6WT4ZGPVEN1"
                target="_blank"
                rel="noopener noreferrer"
              >
              <div className="flex transform hover:scale-125 transition-all items-center md:justify-normal justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 text-red-500" viewBox="0 0 512 512">
                  <path fill={theme.textColor === '#555' ? "#000" : "#fff"} d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z" /></svg>
                <span>Whatsapp</span>
              </div></a>
              </p>
              <p className="my-5 gap-2 flex">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
              <div className="flex transform hover:scale-125 transition-all items-center md:justify-normal justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
                  <path fill={theme.textColor === '#555' ? "#000" : "#fff"} d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fill-rule="evenodd"/></svg>
                <span>Facebook</span>
              </div></a>
              </p>
              <p className="my-5 gap-2 flex">
              <a
                href="https://www.twitter.com/iam_oladhimeji"
                target="_blank"
                rel="noopener noreferrer"
              >
              <div className="flex transform hover:scale-125 transition-all items-center md:justify-normal justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
                  <path fill={theme.textColor === '#555' ? "#000" : "#fff"} d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"/></svg>
                <b>X</b>
              </div></a>
              </p>
              <p className="my-5 gap-2 flex">
              <a
                href="https://www.twitter.com/iam_oladhimeji"
                target="_blank"
                rel="noopener noreferrer"
              >
              <div className="flex transform hover:scale-125 transition-all items-center md:justify-normal justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
                  <path fill={theme.textColor === '#555' ? "#000" : "#fff"} d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/></svg>
                <span>Instagram</span>
              </div></a>
              </p>
            </div>
            
            <div className="p-10 shadow-md mt-10 md:mt-0 md:w-[40%] text-center">
              <p><b>Reach out to me</b></p>
              
              <p className="my-5 gap-2 flex">
              <a
                target="_blank"
                rel="noopener noreferrer"
              >
              <div className="flex transform hover:scale-125 transition-all items-center md:justify-normal justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
                  <circle cx="256" cy="192" r="32"/>
                    <path fill={theme.textColor === '#555' ? "#000" : "#fff"} d="M256 32c-88.22 0-160 68.65-160 153 0 40.17 18.31 93.59 54.42 158.78 29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0051.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"/>
                  </svg>
                <span>Kubwa, Abuja, Nigeria</span>
              </div></a>
              </p>
              <p className="my-5 gap-2 flex">
              <a
                href="tel:+2347069223477"
                target="_blank"
                rel="noopener noreferrer"
              >
              <div className="flex transform hover:scale-125 transition-all items-center md:justify-normal justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
                  <path fill={theme.textColor === '#555' ? "#000" : "#fff"} d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 01391 480z"/>
                </svg>
                <span>(+234) 7069223477</span>
              </div></a>
              </p>
              <p className="my-5 gap-2 flex">
              <a
                href="mailto:abdulrazaq2a@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
              <div className="flex transform hover:scale-125 transition-all items-center md:justify-normal justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
                  <path fill={theme.textColor === '#555' ? "#000" : "#fff"} d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z"/>
                </svg>
                <span>abdulrazaq2a@gmail.com</span>
              </div></a>
              </p>
              <p className="my-5 gap-2 flex">
              <a
                href="https://github.com/oladhimeji1"
                target="_blank"
                rel="noopener noreferrer"
              >
              <div className="flex transform hover:scale-125 transition-all items-center md:justify-normal justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
                  <path fill={theme.textColor === '#555' ? "#000" : "#fff"} d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/>
                </svg>
                <span>github.com/oladhimeji1</span>
              </div></a>
              </p>
            </div>
          </div>

          {/* <div className="block md:flex gap-10 mt-5 justify-center">
            <a
              href="https://wa.me/message/C3R6WT4ZGPVEN1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex transform hover:scale-125 transition-all items-center md:justify-normal justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  class="main-grid-item-icon"
                  fill="none"
                >
                  <path
                    d="M6.579 8.121c.209-.663.778-1.457 1.19-1.66.183-.09.319-.11.763-.11.522 0 .548.005.684.14.088.095.328.606.673 1.432.292.71.533 1.315.533 1.347 0 .146-.293.61-.627 1.002-.23.267-.365.47-.365.543 0 .068.167.381.376.69.506.757 1.44 1.696 2.167 2.177.568.376 1.582.867 1.785.867.152 0 .429-.272.992-.982.23-.287.434-.495.512-.511.068-.021.235.005.37.057.392.152 2.371 1.117 2.476 1.211.203.188.037 1.264-.267 1.702-.464.68-1.79 1.259-2.663 1.17-.636-.068-2.14-.564-3.117-1.029-1.253-.6-2.574-1.697-3.644-3.038-.611-.763-1.227-1.692-1.493-2.246-.36-.751-.491-1.331-.455-2 .016-.287.068-.631.11-.762Z"
                    fill="#25D366"
                  />
                  <path
                    clip-rule="evenodd"
                    d="M.606 9.5C1.582 4.491 5.576.76 10.709.06c.705-.1 2.684-.068 3.368.046.715.126 1.66.371 2.24.59 3.832 1.426 6.663 4.72 7.466 8.683.35 1.729.272 3.755-.203 5.457-1.133 4.03-4.423 7.205-8.511 8.218-2.663.658-5.462.37-7.983-.81l-.617-.292-3.226 1.029C1.473 23.545.01 23.994 0 23.983c-.01-.01.45-1.415 1.029-3.112l1.05-3.096-.424-.84C.48 14.569.12 12.01.605 9.498Zm21.172-.408c-1.028-3.76-4.297-6.626-8.145-7.148-2.099-.282-4.078.037-5.9.956-4.417 2.234-6.522 7.341-4.93 11.957.204.59.752 1.702 1.092 2.213l.271.408-.605 1.775a69.688 69.688 0 0 0-.606 1.817c0 .026.84-.224 1.864-.548a99.767 99.767 0 0 1 1.9-.596c.022 0 .225.11.45.24 2.428 1.447 5.456 1.76 8.187.852a9.927 9.927 0 0 0 6.48-6.945 9.998 9.998 0 0 0-.058-4.98Z"
                    fill="#25D366"
                    fill-rule="evenodd"
                  />
                </svg>
                <div className="">
                <p className="">Whatsapp me</p>
                </div>
              </div>
            </a>
            <div className="flex justify-center md:justify-normal">
              {/* Icon 
              {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 172 172" ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#1fb141"><path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"></path></g></g></svg> 
              <div className="">
                <h3 className="">Email</h3>
                <p className="">abdulrazaq2a@gmail.com</p>
              </div>
            </div>
          </div> */}
        </section>
      </Container>
    </div>
  );
}
