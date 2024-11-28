import Image from 'next/image'
import pic1 from '/public/images/travel.jpg'
import pic2 from '/public/images/pexels1.jpg'
import pic3 from '/public/images/air.jpg'
import pic4 from '/public/images/train.jpg'

const Events = () => {
    return (
        <section className="events w-[90%] mb-20 mx-auto">
            <div className="title text-center text-4xl text-[#49497e]">
                <h1>Choose Your Means</h1>
                <div className="line w-[150px] h-1 bg-[#fc036b] my-2 mx-auto rounded-md"></div>
            </div>

            <div className="row w-[100%] flex items-center justify-between mt-12">
                <div className="col w-[50%] flex flex-col items-center">
                    <Image
                    src={pic1}
                    alt="picture1"
                    width={500}
                    className='transition-all hover:translate-x-[-10%] hover:shadow-[#fc036b] hover:shadow-lg'
                    />
                    <h4 className='text-4xl text-[#484872] my-5 mx-auto'>Travel by Road</h4>
                    <p className='text-slate-400 py-0 px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, cumque.</p>
                    <a href="" className="py-2 px-4 mt-8 bg-[#fc036b] rounded-3xl text-slate-200 hover:bg-sky-500">Learn More</a>
                </div>
                 <div className="col w-[50%] flex flex-col items-center">
                    <Image
                    src={pic2}
                    alt="picture2"
                    width={500}
                    className='transition-all hover:translate-x-[+10%] hover:shadow-[#fc036b] hover:shadow-lg'
                    />
                    <h4 className='text-4xl text-[#484872] my-5 mx-auto'>A Journey by Sea</h4>
                    <p className='text-slate-400 py-0 px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, cumque.</p>
                    <a href="" className="py-2 px-4 mt-8 bg-[#fc036b] rounded-3xl text-slate-200 hover:bg-sky-500">Learn More</a>
                </div>
            </div>
            <div className="row w-[100%] flex items-center justify-between mt-12">
                <div className="col w-[50%] flex flex-col items-center">
                    <Image
                    src={pic3}
                    alt="picture1"
                    width={500}
                    className='transition-all hover:translate-x-[-10%] hover:shadow-[#fc036b] hover:shadow-lg'
                    />
                    <h4 className='text-4xl text-[#484872] my-5 mx-auto'>Fly in the Air</h4>
                    <p className='text-slate-400 py-0 px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, cumque.</p>
                    <a href="" className="py-2 px-4 mt-8 bg-[#fc036b] rounded-3xl text-slate-200 hover:bg-sky-500">Learn More</a>
                </div>
                 <div className="col w-[50%] flex flex-col items-center">
                    <Image
                    src={pic4}
                    alt="picture2"
                    width={500}
                    className='transition-all hover:translate-x-[+10%] hover:shadow-[#fc036b] hover:shadow-lg'
                    />
                    <h4 className='text-4xl text-[#484872] my-5 mx-auto'>Explore using Railways</h4>
                    <p className='text-slate-400 py-0 px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, cumque.</p>
                    <a href="" className="py-2 px-4 mt-8 bg-[#fc036b] rounded-3xl text-slate-200 hover:bg-sky-500">Learn More</a>
                </div>
            </div>
        </section>
    )
}

export default Events