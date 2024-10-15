import Image from "next/image";
import display from "@/image/cells.png";
import disp from "@/image/two.png";
import disk from "@/image/three.png";
const services=[
  {
    pic: display,
    head:"What we do",
    service:["we bring your imagination to life Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero adipisci doloribus illo aperiam aspernatur optio perferendis, voluptatibus dolore. Nam exercitationem dolore ipsam nemo dolor fugiat itaque consequatur earum voluptatibus"],
  },
  {
    pic:disp,
    head:"What we do",
    service:["we bring your imagination to life Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero adipisci doloribus illo aperiam aspernatur optio perferendis, voluptatibus dolore. Nam exercitationem dolore ipsam nemo dolor fugiat itaque consequatur earum voluptatibus"],
  },
  {
    pic: display,
    head:"What we do",
    service:["we bring your imagination to life Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero adipisci doloribus illo aperiam aspernatur optio perferendis, voluptatibus dolore. Nam exercitationem dolore ipsam nemo dolor fugiat itaque consequatur earum voluptatibus"],
  },
]
export default function Home() {
  return (
    // html starts
   <body>
    {/* navigation */}
    <header className="bg-slate-100 px-4 md:px-8 lg:px-12 xl:px-14 py-4">
      <div className="flex items-center justify-between ">
    <h1 className="font-bold">Techstart</h1>
    
    {/* nav */}
    <nav className="hidden md:flex">
    <ul className="flex items-center space-x-3 text-lg font-semibold">
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Contact</li>
    </ul>
    </nav>
    </div>
    </header>
    {/* hero section */}
    <section className="px-4 md:px-8 lg:px-12 xl:px-14 py-4 h-[88vh] flex flex-col justify-center items-center bg-green-500">
      <div className="flex flex-col items-center justify-center space-y-3">
      <div className="font-bold text-lg md:text-xl lg:text-3xl">
        <h1>Welcome to Techstart</h1>
      </div>
      {/* explained company */}
      <div>
        <h2 className="">
          We help you build Your Tech dreams
          
        </h2>
      </div>
       {/* action button */}
       <button className="bg-slate-300 px-8 py-2 rounded-md text-black font-bold">
        Get Started
       </button>
       </div>
    </section>
    
    <section className=" bg-slate-100 px-4 md:px-8 lg:px-12 xl:px-14  py-28">
      <div className="flex flex-col  justify-center gap-3 text-justify md:text-center md:space-y-6  md:flex-row">
      {services.map((render)=>(
        <div key={render} className="flex flex-col items-center justify-center space-y-3">
          <Image src={render.pic}></Image>
          <h2>{render.head}</h2>

          {render.service.map((service)=>(
          <p key={service}>{service}</p>
          )
        )}
        </div>
      )
    )}
      </div>
    </section>
    {/* footer */}
    <section className="bg-black text-white px-4 md:px-8 lg:px-12 xl:px-14  py-28">
      <footer>
        <div  className="md:flex items-center justify-between">
          {/* contact address */}
          <div className="">
            <ul>
              <li>manager :08065865245</li>
              <li>Cso: 09058452687</li>
              <li>Help: 070585214582</li>
            </ul>
          </div>
          {/* social-icon */}
          <div>
            <ul>
              <li>facebook@ Techstartinnovation</li>
              <li>instagram@ Techstartinnovation</li>
              <li>twitter@ Techstartinnovation</li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
   </body>
  );
}
