'use client'

import { SignupForm } from '@/components/Form'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import Image from 'next/image'
import Link from 'next/link'
import pic1 from '/public/images/venice.jpg'
import pic2 from '/public/images/Cappadocia.jpg'


const Contact = () => {
  return (
    <div className="container grid grid-cols-2 gap-24 w-[60%] h-[1000px] mt-20">
    <div className='max-w-full pt-8 pb-12'>        
      <SignupForm />
    </div>
    <div className="images flex gap-14 relative top-[-100px] left-14">
    <CardContainer className="inter-var w-[350px] h-[300px]">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl text-center font-bold text-neutral-600 dark:text-white"
        >
          Venice, Italy <br />A City on Water
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Glide through scenic canals, discover Renaissance art, and indulge in romantic gondola rides.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={pic1}
            height={200}
            width={200}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Click Button →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var w-[350px] h-[300px]">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl text-center font-bold text-neutral-600 dark:text-white"
        >
           Cappadocia, Turkey <br />
           Land of Fairy Chimneys
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
         Take a hot air balloon ride over surreal landscapes of rock formations and ancient cave dwellings.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={pic2}
            height={200}
            width={200}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Click Button →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>    
    
    </div>
    </div>
  )
}

export default Contact