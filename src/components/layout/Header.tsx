
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const Header = () => {

  return (
    <div>
      <div className="header flex justify-between items-center fixed top-0 left-0 w-full p-4 bg-sky-200 z-20">
        <h1 className='text-2xl italic font-semibold text-[#fc036b] hover:text-accent'>
          AmjadCreations
        </h1>

        <div className="flex jutify-center items-center">
          <ul className='flex text-xl text-[#fc036b]'>
            <li className='my-2 mx-4 text-xl ease-in hover:text-blue-600'>
              <Link href="/">Home</Link>
            </li>
            <li className='my-2 mx-4 text-xl ease-in hover:text-blue-600'>
              <Link href="/tours">Tours</Link>
            </li>
            <li className='my-2 mx-4 text-xl ease-in hover:text-blue-600'>
              <Link href="/explore">Explore</Link>
            </li>
            <li className='my-2 mx-4 text-xl ease-in hover:text-blue-600'>
              <Link href="/register">Register</Link>
            </li>
          </ul>
          <Button variant="custom">
            Button
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header;
