import { BackgroundLines } from "@/components/ui/background-lines";

const Explore = () => {
  return (
    <section className="w-full h-[800px] flex items-center pt-10 relative top-11 z-[-10]">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 z-0">
        
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white 
        text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Explore The World <br /> Exploring Passionately.
        </h2>

       
        <div className="line w-[120px] sm:w-[150px] h-1 bg-[#fc036b] mb-6 sm:mb-8 md:mb-12 mx-auto rounded-md"></div>

        
        <p className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-neutral-700 dark:text-neutral-400 text-center">
          Get the best advices from our experts, including expert artists,
          painters, marathon enthusiasts, and RDX, totally free.
        </p>

      
        <a
          href="#"
          className="py-2 px-6 mt-8 sm:mt-10 bg-[#fc036b] rounded-3xl text-slate-200 hover:bg-sky-500 z-20 transition-all duration-300 ease-in-out">
          Learn More
        </a>
      </BackgroundLines>
    </section>
  );
};

export default Explore;
