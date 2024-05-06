"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          {/* <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Jeriah Marson
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} href="#">
            About
          </Navbar.Link>
          <Navbar.Link href="#">Projects</Navbar.Link>
          <Navbar.Link href="#">Lorem</Navbar.Link>
          <Navbar.Link href="#">Resume</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="bg-gradient-to-b from-blue-200 from-10% via-blue-100 via-70% to-white to-100%">
        <div className="grid grid-cols-6 mx-7 py-8 ">
          <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
            <div className="flex justify-center">
              <div className="lg:my-4 lg:border-2 border-black placeholder w-[80%] h-40 md:h-[45vh] lg:h-[64vh] rounded-3xl">
                {/* where image goes */}
              </div>
            </div>
          </div>

          <div className=" col-span-6 md:col-span-3 lg:col-span-4 lg:px-16 flex flex-col justify-between">
            <div className="">
            <div className="flex flex-col items-center text-3xl pt-14">
        <p className="text-3xl  font-bold">Junior Software Developer</p>
        <p className="text-2xl"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea hic illum autem, non aspernatur quia eum enim debitis sunt, dolore eius esse ipsam ut cumque dignissimos repellat. Aliquid, tenetur eligendi.</p>
      </div>
      <br />
              <div className=" grid grid-cols-2 pt-8">
                <div className="text-2xl">
                  Languages:
                  <div>
                    <ul className="grid grid-cols-2">
                      <li>C#</li>
                      <li>HTML</li>
                      <li>JS</li>
                      <li>CSS</li>
                      <li>TS</li>
                      <li>SQL</li>
                      <li>TSX</li>
                    </ul>
                  </div>
                </div>
                <div className="text-2xl">
                  Frameworks:
                  <ul className="grid grid-cols-2">
                    <li>Dotnet 7</li>
                    <li>React</li>
                    <li>Next JS</li>
                    <li>Tailwind</li>
                    <li>Bootstrap</li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        <hr />
        <div className="flex flex-col items-center text-4xl font-titillium font-bold pt-14">
        <p>Projects</p>
      </div>
      <div className="grid grid-cols-6 mx-7 py-8 px-2 gap-5">
        <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
          <h1 className="text-3xl font-bold text-center">Court Monitor</h1>
          <br />
          <div className="courtmonitor w-[100%] h-40 md:h-[45vh] lg:h-[35vh] rounded-3xl"></div>
          <br />
          <h3 className="text-2xl text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati natus aliquam nisi delectus, quae quam, consequatur dolores aut officiis neque deleniti itaque facilis temporibus labore tenetur quis eum. Ducimus, consequuntur?</h3>
        </div>

        <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
          <h1 className="text-3xl font-bold text-center">Court Monitor</h1>
          <br />
          <div className="courtmonitor w-[100%] h-40 md:h-[45vh] lg:h-[35vh] rounded-3xl"></div>
          <br />
          <h3 className="text-2xl text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati natus aliquam nisi delectus, quae quam, consequatur dolores aut officiis neque deleniti itaque facilis temporibus labore tenetur quis eum. Ducimus, consequuntur?</h3>
        </div>

        <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
          <h1 className="text-3xl font-bold text-center">Court Monitor</h1>
          <br />
          <div className="courtmonitor w-[100%] h-40 md:h-[45vh] lg:h-[35vh] rounded-3xl"></div>
          <br />
          <h3 className="text-2xl text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati natus aliquam nisi delectus, quae quam, consequatur dolores aut officiis neque deleniti itaque facilis temporibus labore tenetur quis eum. Ducimus, consequuntur?</h3>
        </div>
      </div>

      </div>

      <Footer container>
        <div className="w-full">

          <div className="w-full sm:flex sm:items-center sm:justify-between">
           
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="https://github.com/JeriahEM" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}
