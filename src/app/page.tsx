"use client";

import Link from "next/link";
import { Carousel, Navbar } from "flowbite-react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';

export default function Home() {
  return (
    <>
      <Navbar fluid rounded className="background1">
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          {/* <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          /> */}
          <span className="self-center whitespace-nowrap pl-2 text-3xl lg:text-7xl font-semibold dark:text-white color">
            Jeriah Marson
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="https://www.linkedin.com/in/jeriah-marson-2a9722239/"><LinkedInIcon fontSize="large"/></Navbar.Link>
          <Navbar.Link href="https://github.com/JeriahEM"><GitHubIcon fontSize="large"/></Navbar.Link>
          <Navbar.Link href="https://docs.google.com/document/d/17Bf5MDRPqd0Z1cVbCJ7jEZ8W3eBOSbYWyBDgrB8mvvQ/edit#heading=h.5rf9wr4r3no2"><ArticleIcon fontSize="large"/></Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className=" background">
        <div className="grid grid-cols-6 mx-7 py-8 ">

          {/* img */}
          <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
            <div className="flex justify-center">
              <div className="lg:my-4 lg:border- borderYuh placeholder w-[75%] h-40 md:h-[50vh] lg:h-[50vh] rounded-full">
                {/* where image goes */}
              </div>
            </div>
          </div>

          <div className=" col-span-6 md:col-span-3 lg:col-span-4 lg:px-16 flex flex-col justify-between">
            <div className="">

              {/* text */}
              <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 md:pt-14">
                <p className="text-3xl text-center color font-bold">About Me</p>
                <Carousel  pauseOnHover>
                  <p className="text-sm md:text-md lg:text-2xl text-center color1">I am a software engineer with a focus on HTML, CSS, JavaScrpit, and React. I am a graduate of CodeStack Academy where I made fully functioning websites from the styling and responsiveness of the front end to the logic and data of the backend.  Learning how to code was a very interesting and rewarding challenge of problem solving and outside the box thinking.</p>
                  <p className=" text-sm md:text-md text-center color1 lg:text-2xl">I have been also been passionate about music ever since an early teenager where I would sing in choir, learned how to play the guitar, and learned how to play the piano as well. Since then I have studied at a college level but decided to pursue my other passion in software development and keep music as a hobby,  A way I stay close to my passion of music is by collecting vinyl records, I’ve been collecting since the end of 2022 and even with rise in price <a href="https://www.discogs.com/user/shadowK9253/collection" className="text-blue-600 hover:text-blue-300"> my collection </a>has grown a lot.</p>
                </Carousel>
              </div>
              <br />

              



            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 pt-8 justify-center  background1">


<div className="text-2xl mx-8 py-2">
<p className="pb-3 color font-bold">Libraries:</p>
  <div>
    <ul className="grid grid-cols-2">
    <li>
      <i className="">
        {/* react */}
        <img className="lg:w-20 lg:h-20 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
      </i>
    </li>

    </ul>
  </div>
</div>


<div className="text-2xl mx-8 py-2">
<p className="pb-3 color font-bold">Languages:</p>
    <ul className="grid grid-cols-2 gap-3">
      <li>
        <i >
        {/* c# */}
          <img className="lg:w-20 lg:h-20 bg-blend-color color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg" />
        </i>
      </li>
      <li>
        <i className="">

        {/* html */}
          <img className="lg:w-20 lg:h-20 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" />

        </i>
      </li>
      <li>
        <i className="">
        {/* js */}
          <img className="lg:w-20 lg:h-20 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
        </i>
      </li>
      <li>
        <i className="">
        {/* css */}
          <img className="lg:w-20 lg:h-20 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" />
        </i>
      </li>
      <li>
        <i className="">
        {/* typescript */}
          <img className="lg:w-20 lg:h-20 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" />
        </i>
      </li>
      <li>
        <i className="">
        {/* sql */}
        <img className="lg:w-20 lg:h-20 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
        </i>
      </li>

    </ul>
</div>

<div className="text-2xl mx-8 py-2">
<p className="pb-3 color font-bold">Frameworks:</p>
  <ul className="grid grid-cols-2 gap-3">
  <li>
      <i className="">
        {/* nextjs */}
        <img  className="lg:w-20 lg:h-20 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg" />
      </i>
    </li>
    <li>
      <i className="">
        {/* tailwind */}
        <img className="lg:w-20 lg:h-20 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
      </i>
    </li>
    <li>
      <i className="">
        {/* bootstrap */}
        <img className="lg:w-20 lg:h-20 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg" />
      </i>
    </li>
    </ul>
</div>

<div className="text-2xl mx-8 py-2">
  <p className="pb-3 color font-bold">Productivity:</p>
  <ul className="grid grid-cols-2 gap-3">
    <li>
      <i className="">

        {/* postman */}
      <img className="lg:w-20 lg:h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
          
      </i>
    </li>

    <li>
      <i className="">
        {/* vscode */}
      <img className="lg:w-20 lg:h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
      </i>
    </li>
    <li>
      <i className="">
        {/* figma */}
      <img className="lg:w-20 lg:h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
      </i>
    </li>
    <li>
      <i className="">
        {/* azure */}
      <img className="lg:w-20 lg:h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />
      </i>
    </li>

    <li>
      <i className="">
        {/* slack */}
      <img className="lg:w-20 lg:h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" />  
      </i>
    </li>

    <li>
      <i className="">
        {/* github */}
      <img className="lg:w-20 lg:h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
      </i>
    </li>
    
  </ul>
</div>
<br />
</div>


        <div className="flex flex-col items-center text-4xl font-bold pt-14 color ">
          <p id="pro">Projects</p>
        </div>
        <div className="grid grid-cols-6 mx-7 py-8 px-2 gap-5 ">
          <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
            <h1 className="text-3xl font-bold text-center color1"><a href="https://fullstack-frontend-red.vercel.app">Court Monitor</a></h1>
            <br />
            <div className="courtmonitor w-[100%] h-40 md:h-[45vh] lg:h-[35vh] rounded-3xl"><a className="text-transparent text-6xl md:text-8xl lg:text-9xl" href="https://fullstack-frontend-red.vercel.app">we like. <br />coding.</a></div>
            <br />
            <h3 className="text-2xl text-center color1">In a team of three I helped to create a fullstack web application that aims to simplify communication between sports programs.</h3>
            <p className="pt-2 text-xl color">Made With:</p>
            <div className="grid grid-cols-6 justify-items-start mx-6 pb-8">
              
            <img className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" />
            <img className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
            <img className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            <img className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
            <img className="lg:w-10 lg:h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />
            <img className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg" />
            </div>
          </div>

          <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0 ">
            <h1 className="text-3xl font-bold text-center color1"><a href="https://business-redevelop.vercel.app/pages/contactpage.html">Tea Amo</a></h1>
            <br />
            <div className="teaamo w-[100%] h-40 md:h-[45vh] lg:h-[35vh] rounded-3xl"><a className="text-transparent text-6xl md:text-8xl lg:text-9xl" href="https://business-redevelop.vercel.app/pages/contactpage.html">we like. <br />coding.</a></div>
            <br />
            <h3 className="text-2xl text-center color1">Myself and a team of two other software engineers created a <a className="text-blue-600 hover:text-blue-300" href="https://www.figma.com/design/jma9zzUYUldF8NkowwNrBT/business-RE-redesign-(Copy)?t=RV0s4haMVMido1Od-0">figma</a>  design and then coded out a website for a local resturant </h3>
            <p className="pt-2 text-xl color">Made With:</p>
            <div className="grid grid-cols-6 justify-items-start mx-6 pb-8">
              
            <img className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" />          
            <img className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" />
            <img className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
            <img className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg" />
            <img className="lg:w-10 lg:h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />

            </div>
          </div>

          <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
            <h1 className="text-3xl font-bold text-center color1" ><a href="https://react-pokemon-rouge.vercel.app">POKéMON React</a> </h1>
            <br />
            <div className="pokereact w-[100%] h-40 md:h-[45vh] lg:h-[35vh] rounded-3xl"><a className="text-transparent text-6xl md:text-8xl lg:text-9xl" href="https://react-pokemon-rouge.vercel.app">we like. <br />coding.</a></div>
            <br />
            <h3 className="text-2xl text-center color1">Using React and teh PokéMon api the user can look up a PokéMon by name or PokéDex number and favorite them to have their info appear</h3>
            <p className="pt-2 text-xl color">Made With:</p>
            <div className="grid grid-cols-6 justify-items-start mx-6 pb-8">
              
            <img className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" />
            <img className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
            <img className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

            </div>
          </div>
        </div>

      </div>

      <Footer container>
        <div className="w-full">

          <div className="w-full sm:flex sm:items-center sm:justify-between">

            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Link href="https://www.linkedin.com/in/jeriah-marson-2a9722239/"><LinkedInIcon fontSize="large"/></Footer.Link>
          <Footer.Link href="https://github.com/JeriahEM"><GitHubIcon fontSize="large"/></Footer.Link>
          <Footer.Link href="https://docs.google.com/document/d/17Bf5MDRPqd0Z1cVbCJ7jEZ8W3eBOSbYWyBDgrB8mvvQ/edit#heading=h.5rf9wr4r3no2"><ArticleIcon fontSize="large"/></Footer.Link>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}
