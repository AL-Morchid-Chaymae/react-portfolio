import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import  {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from "next/image";
import deved from "../public/Meine_foto.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react"; /* to add dark mode*/

export default function Home() {
  const [darkMode, setDarkMode] = useState(false); /* to add dark mode*/
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title> AL Morchid Chaymae Portfolio</title>
        <meta name="description" content="Generated by me" />
        <link rel="icon" href="/favion.ico" />
      </Head>

      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 "> 
        <section className=" min-h-screen"> 
          <nav className="py-10 mb-12 flex justify-between"> 
          <h1 className="text-xl font-burtons"> Hello</h1>
          <ul className="flex items-center">
             <li>
              <BsFillMoonStarsFill className=" cursor-pointer"
              onClick={() => setDarkMode(! darkMode)} /* to add dark mode*/
              />
             </li>
             <li><a className=" bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8  dark:bg-white" href="#">Resume</a></li>
          </ul>
          </nav>  
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">AL Morchid Chaymae</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Full Stack Software Engineering | Spring Boot | Angular - React</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
            I am Full Stack Developer, I have expertise in developing full stack web applications, covering both frontend and backend. I am proficient in technologies such as Spring Boot for backend development and Angular for frontend development. My experiences allow me to design and implement robust and scalable software solutions to meet the complex needs of customers and end users.
            </p>
          </div> 
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillYoutube/>
          </div>    
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-200 overflow-hidden md:h-96 md:w-96"> {/* ceci pour que l'image s'interne */}
            <Image src={deved}  layout="fil" objectFit="cover"/> 
          </div>  
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              A passionate <span className="text-teal-500">Full Stack Software Engineer </span> dedicated to creating innovative software solutions. With a strong expertise in   <span className="text-teal-500">Spring Boot, Angular, C++, Merise, UML, Linux, and Python </span> , I am capable of designing and developing a wide range of applications, including web applications. My methodical approach, combined with my ability to adapt quickly, allows me to provide effective and scalable solutions to my clients. I am committed to continually developing my skills to succeed in my career as a Full Stack Software Engineer.
            </p>
          </div>
          <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <Image src={design} width={100} height={100}/>
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful designs</h3>
            <p className="py-2">
              Creating elegant designs suited for your needs design theory
            </p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p>Photoshop</p>
            <p>Photoshop</p>
            <p>Figma</p>
          </div>

          
          <div className="text-center shadow-lg p-10 rounded-xl  dark:bg-white">
            <Image src={code} width={100} height={100}/>
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful designs</h3>
            <p className="py-2">
              Creating elegant designs suited for your needs design theory
            </p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p>Photoshop</p>
            <p>Photoshop</p>
            <p>Figma</p>
          </div>
          <br></br>
          <br></br>
        
          <div className="text-center shadow-lg p-10 rounded-xl  dark:bg-white">
            <Image src={consulting} width={100} height={100}/>
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful designs</h3>
            <p className="py-2">
              Creating elegant designs suited for your needs design theory
            </p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p>Photoshop</p>
            <p>Photoshop</p>
            <p>Figma</p>
          </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              A passionate <span className="text-teal-500">Full Stack Software Engineer </span> dedicated to creating innovative software solutions. With a strong expertise in   <span className="text-teal-500">Spring Boot, Angular, C++, Merise, UML, Linux, and Python </span> , I am capable of designing and developing a wide range of applications, including web applications. My methodical approach, combined with my ability to adapt quickly, allows me to provide effective and scalable solutions to my clients. I am committed to continually developing my skills to succeed in my career as a Full Stack Software Engineer.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsitive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsitive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsitive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsitive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsitive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsitive"/>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}




