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
import Image from "next/image";
import flowcart from "./asset/file-type-drawio-icon-2048x2048-dxjfklgq.png"
import work1 from "./asset/courtmonitor.png"
import work2 from "./asset/teaamoimg.png"
import work3 from "./asset/pokePortfolioIMg.png"

export default function Home() {
  return (
    <>
      <Navbar fluid rounded className="background1">
        <Navbar.Brand as={Link} target="blank" href="https://www.linkedin.com/in/jeriah-marson-2a9722239/">
          {/* <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          /> */}
          <span className="self-center whitespace-nowrap pl-2 text-4xl lg:text-7xl font-semibold dark:text-white color">
            Jeriah Marson
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link target="blank" href="https://www.linkedin.com/in/jeriah-marson-2a9722239/"><LinkedInIcon fontSize="large" /></Navbar.Link>
          <Navbar.Link target="blank" href="https://github.com/JeriahEM"><GitHubIcon fontSize="large" /></Navbar.Link>
          <Navbar.Link target="blank" href="https://docs.google.com/document/d/17Bf5MDRPqd0Z1cVbCJ7jEZ8W3eBOSbYWyBDgrB8mvvQ/edit#heading=h.5rf9wr4r3no2"><ArticleIcon fontSize="large" /></Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className=" ">
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
                <p className="text-5xl lg:text-6xl text-center bg-green-800 text-white max-w-64 lg:max-w-80 font-bold pb-2">About Me</p>
                <p className="text-sm md:text-md lg:text-2xl text-center color1">I am a software engineer focused on HTML, CSS, JavaScript, and React, graduating from CodeStack Academy where I built full-stack websites. Coding challenged me through problem-solving and creative thinking. Alongside this passion, I have loved music since my early teens - singing in choir, playing guitar and piano, and studying music at a college. Although pursuing software development as a career, I maintain my musical interests by collecting vinyl records, with <a href="https://www.discogs.com/user/shadowK9253/collection" className="text-blue-600 hover:text-blue-300">my collection</a> growing since late 2022 despite rising prices.</p>
              </div>
              <br />





            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-5xl font-bold pt-6 color bg-gray-400">
          <p className="text-5xl lg:text-6xl text-center bg-green-800 text-white max-w-72 lg:max-w-96 font-bold pb-2 whitespace-break-spaces"> Languages </p>
        </div>
        <div className=" grid md:grid-cols-3 lg:grid-cols-3 pt-8 justify-center  bg-gray-400">


          <div className="text-2xl mx-8 py-2">
            <p className="pb-3 color font-bold">Languages:</p>
            <ul className="grid grid-cols-4 gap-3">
              <li>
                <i >
                  {/* c# */}
                  <img title="C#" className="md:w-20 md:h-20 bg-blend-color color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg" />
                </i>
              </li>
              <li>
                <i className="">

                  {/* html */}
                  <img title="HTML5" className="md:w-20 md:h-20 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" />

                </i>
              </li>
              <li>
                <i className="">
                  {/* js */}
                  <img title="Java Script" className="md:w-20 md:h-20 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
                </i>
              </li>
              <li>
                <i className="">
                  {/* css */}
                  <img title="CSS" className="md:w-20 md:h-20 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" />
                </i>
              </li>
              <li>
                <i className="">
                  {/* typescript */}
                  <img title="Typescript" className="md:w-20 md:h-20 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" />
                </i>
              </li>
              <li>
                <i className="">
                  {/* sql */}

                  <img title="SQL" className="md:w-20 md:h-20 color  " src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
                </i>
              </li>

              <li>
                <i className="">
                  {/* Unity */}     
            <img title="Unity" className="md:w-20 md:h-20 color  " src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" />
                </i>
              </li>

            </ul>
          </div>

          <div className="text-2xl mx-8 py-2">
            <p className="pb-3 color font-bold">Frameworks:</p>
            <ul className="grid grid-cols-4 gap-3">
              <li>
                <i className="">
                  {/* nextjs */}
                  <img title="Next.js" className="md:w-20 md:h-20 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg" />
                </i>
              </li>
              <li>
                <i className="">
                  {/* tailwind */}
                  <img title="Tailwind" className="md:w-20 md:h-20 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                </i>
              </li>
              <li>
                <i className="">
                  {/* bootstrap */}
                  <img title="Bootstrap" className="md:w-20 md:h-20 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg" />
                </i>
              </li>
              <li>
                <i className="">
                  {/* react native */}
                  <img title="React Native" className="md:w-20 md:h-20 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                </i>
              </li>
              <li>
                <i className="">
                  {/* react */}
            <img title="React" className="md:w-20 md:h-20 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                </i>
              </li>
              <li>
                <i className="">
                  {/* angular */}  
            <img title="Angular" className="md:w-20 md:h-20 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
                </i>
              </li>

              <li>
                <i className="">
                  {/* dot net */}  
                  <img title="Dot-Net" className="md:w-20 md:h-20 color"  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" />
                </i>
              </li>
            </ul>
          </div>

          <div className="text-2xl mx-8 py-2">
            <p className="pb-3 color font-bold">Productivity:</p>
            <ul className="grid grid-cols-4 gap-3">
              <li>
                <i className="">

                  {/* postman */}
                  <img title="Postman" className="md:w-20 md:h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />

                </i>
              </li>

              <li>
                <i className="">
                  {/* vscode */}
                  <img title="Visual Studios Code" className="md:w-20 md:h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                </i>
              </li>
              <li>
                <i className="">
                  {/* figma */}
                  <img title="Figma" className="md:w-20 md:h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                </i>
              </li>
              <li>
                <i className="">
                  {/* azure */}
                  <img title="Azure" className="md:w-20 md:h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />
                </i>
              </li>

              <li>
                <i className="">
                  {/* slack */}
                  <img title="Slack" className="md:w-20 md:h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" />
                </i>
              </li>

              <li>
                <i className="">
                  {/* github */}
                  <img title="Github" className="md:w-20 md:h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                </i>
              </li>

              <li>
                <i className="">
                  {/* vercel */}
                  
            <img title="Vercel" className="md:w-20 md:h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" />
          
                </i>
              </li>
          
            <li>
                <i className="">
                  {/* jira */}
                  <img title="Jira" className="md:w-20 md:h-20"  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" />
                </i>
              </li>

              <li>
                <i className="">
                  {/* Notion */}
            <img title="Notion" className="md:w-20 md:h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg" />
                </i>
              </li>

              <li>
                <i className="">
                  {/* material ui */}  
            <img title="Material UI" className="md:w-20 md:h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" />
                </i>
              </li>

              <li>
                <i className="">
                  {/* flowchart */}
                  <Image title="Flowchart" className="md:w-20 md:h-20" alt="Flowchart logo" src={flowcart}  />
                </i>
              </li>

            </ul>
          </div>
          <br />
        </div>


        <div className="flex flex-col items-center text-5xl font-bold pt-14 color ">
          <p id="pro" className="text-5xl lg:text-6xl text-center bg-green-800 text-white max-w-64 lg:max-w-80 font-bold pb-2 whitespace-break-spaces"> Projects </p>
        </div>
        <div className="grid grid-cols-6 mx-7 py-8 px-2 gap-5 ">
          <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
            <h1 className="text-4xl font-bold text-center color1"><a href="https://fullstack-frontend-red.vercel.app">Court Monitor</a></h1>
            <br />
            <div className="courtmonitor w-[100%] h-40 md:h-[45vh] lg:h-[35vh] rounded-3xl"><a className="text-transparent text-6xl md:text-8xl lg:text-9xl" href="https://fullstack-frontend-red.vercel.app">we like. <br />coding.</a></div>
            <br />
            <h3 className="text-2xl text-center color1">In a team of three I helped to create a fullstack web application that aims to simplify communication between sports programs.</h3>
            {/* <img src={work1} alt="" /> */}
            <p className="pt-2 text-xl color">Made With:</p>
            <div className="grid grid-cols-6 justify-items-center pb-7 bg-slate-700 bg-opacity-45 rounded-lg pt-7 ">

              <img title="Typescript" className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" />
              <img title="Tailwind" className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
              <img title="React" className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
              <img title="SQL" className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
              <img title="Azure" className="lg:w-10 lg:h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />
              <img title="Next.js" className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg" />
            </div>
          </div>

          <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0 ">
            <h1 className="text-4xl font-bold text-center color1"><a href="https://business-redevelop.vercel.app/pages/contactpage.html">Tea Amo</a></h1>
            <br />
            <div className="teaamo w-[100%] h-40 md:h-[45vh] lg:h-[35vh] rounded-3xl"><a className="text-transparent text-6xl md:text-8xl lg:text-9xl" href="https://business-redevelop.vercel.app/pages/contactpage.html">we like. <br />coding.</a></div>
            <br />
            <h3 className="text-2xl text-center color1">Myself and a team of two other software engineers created a <a className="text-blue-600 hover:text-blue-300" href="https://www.figma.com/design/jma9zzUYUldF8NkowwNrBT/business-RE-redesign-(Copy)?t=RV0s4haMVMido1Od-0">figma</a>  design and then coded out a website for a local resturant </h3>
            <p className="pt-2 text-xl color">Made With:</p>
            <div className="grid grid-cols-6 justify-items-center pb-7 bg-slate-700 bg-opacity-45 rounded-lg pt-7 ">

              <img title="HTML5" className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" />
              <img title="CSS" className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" />
              <img title="Java Script" className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
              <img title="Bootstrap" className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg" />
              <img title="Figma" className="lg:w-10 lg:h-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />

            </div>
          </div>

          <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
            <h1 className="text-4xl font-bold text-center color1" ><a href="https://react-pokemon-rouge.vercel.app">POKéMON React</a> </h1>
            <br />
            <div className="pokereact w-[100%] h-40 md:h-[45vh] lg:h-[35vh] rounded-3xl"><a className="text-transparent text-6xl md:text-8xl lg:text-9xl" href="https://react-pokemon-rouge.vercel.app">we like. <br />coding.</a></div>
            <br />
            <h3 className="text-2xl text-center color1">Using React and the PokéMon api the user can look up a PokéMon by name or PokéDex number and favorite them to have their info appear</h3>
            <p className="pt-2 text-xl color">Made With:</p>
            <div className="grid grid-cols-6 justify-items-center pb-7 bg-slate-700 bg-opacity-45 rounded-lg pt-7 ">

              <img title="Typescript" className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" />
              <img title="Tailwind" className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
              <img title="React" className="lg:w-10 lg:h-10 color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

            </div>
          </div>
        </div>

      </div>

      <Footer container>
        <div className="w-full">

          <div className="w-full sm:flex sm:items-center sm:justify-between">

            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Link target="blank" href="https://www.linkedin.com/in/jeriah-marson-2a9722239/"><LinkedInIcon fontSize="large" /></Footer.Link>
              <Footer.Link target="blank"href="https://github.com/JeriahEM"><GitHubIcon fontSize="large" /></Footer.Link>
              <Footer.Link target="blank" href="https://docs.google.com/document/d/17Bf5MDRPqd0Z1cVbCJ7jEZ8W3eBOSbYWyBDgrB8mvvQ/edit#heading=h.5rf9wr4r3no2"><ArticleIcon fontSize="large" /></Footer.Link>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}
