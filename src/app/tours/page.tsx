import Image from "next/image";
import pic1 from "/public/images/pic1.jpg";
import pic2 from "/public/images/pic2.jpg";
import pic3 from "/public/images/pic3.jpg";
import pic4 from "/public/images/pic4.jpg";

const Tours = () => {
  return (
    <div className="container w-full h-[800px] px-4">
      <section className="relative top-12 flex justify-between items-center gap-14">
       
        <div className="content pt-20 flex flex-col w-full ml-20 ">
          <h1 className="text-slate-400 text-4xl md:text-5xl lg:text-6xl font-bold">
            TOURS & DESTINATIONS
          </h1>
          <div className="line w-[150px] h-1 bg-[#fc036b] my-2 ml-[-1px] rounded-md"></div>
          <p className="text-justify my-6 text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas est
            nostrum laboriosam excepturi, natus at corrupti mollitia optio
            numquam obcaecati, accusantium minus! Voluptatem laudantium sequi
            ea, quas dolorem a ut.
          </p>
          <a
            href="#"
            className="py-2 px-4 w-[150px] text-center bg-[#fc036b] rounded-3xl text-slate-200 hover:bg-sky-500 transition-all"
          >
            Learn More
          </a>
        </div>

       
        <div className="col w-full h-[400px] flex flex-wrap justify-center mt-20">
          <div className="images grid grid-cols-2 gap-4">
            <Image
              src={pic1}
              alt="img-1"
              width={270}
              height={270}
              className="m-2 shadow-md shadow-slate-500 transition-all duration-300 hover:scale-95 hover:shadow-sky-300 hover:shadow-lg"
            />
            <Image
              src={pic2}
              alt="img-2"
              width={270}
              height={270}
              className="m-2 shadow-md shadow-slate-500 transition-all duration-300 hover:scale-95 hover:shadow-sky-300 hover:shadow-lg"
            />
            <Image
              src={pic3}
              alt="img-3"
              width={270}
              height={270}
              className="m-2 shadow-md shadow-slate-500 transition-all duration-300 hover:scale-95 hover:shadow-sky-300 hover:shadow-lg"
            />
            <Image
              src={pic4}
              alt="img-4"
              width={270}
              height={270}
              className="m-2 shadow-md shadow-slate-500 transition-all duration-300 hover:scale-95 hover:shadow-sky-300 hover:shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;
