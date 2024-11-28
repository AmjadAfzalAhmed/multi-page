import SparklesText from "@/components/ui/sparkles-text";
import FlipText from "@/components/ui/flip-text";
import PulsatingButton from "./ui/pulsating-button";


function Hero() {
  return (
    <div className='w-full h-screen flex justify-center items-end'>
    
      <div className='content mb-[150px] text-yellow-400 text-center'>
        <FlipText
          className="text-4xl font-bold -tracking-widest text-[#fc036b] dark:text-white md:text-7xl md:leading-[5rem]"
          word="Explore The Colorful World"
        />
        <div className="line w-[150px] h-1 bg-[#fc036b] my-2 mx-auto rounded-md"></div>
        <SparklesText text="A WONDERFUL GIFT" className='font-semibold mb-10' />
        <PulsatingButton className="relative left-[400px]">Learn More</PulsatingButton>
      </div>


    </div>
  )
}

export default Hero

