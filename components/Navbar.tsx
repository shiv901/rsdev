import LoginPage from '@/app/(auth)/Login';
import Link from 'next/link';
import { BiDownload } from 'react-icons/bi';
import { FaDownload } from 'react-icons/fa6';

const resumePath = '/public/docs/Shivansh - Full stack 4 years.pdf';

const Navbar = () => {
  return (
    <div className='bg-gray-950 flex justify-between items-center px-6 py-3 rounded-md fixed top-4 w-3/5 max-w-[55rem] left-1/2 -translate-x-1/2 backdrop-filter bg-opacity-60 backdrop-blur-md border-gray-600 drop-shadow-lg'>
      <div className='text-2xl font-bold '>
        <Link href='/'>
          Port<span className='text-green-500'>folio</span>
        </Link>
      </div>
      <a
        href={resumePath}
        download='Shivansh - Full stack 4 years.pdf'
        className='bg-yellow-300 rounded px-4 py-1 text-gray-950'
      >
        <span className='flex justify-center items-center gap-2'>
          Resume <BiDownload />
        </span>
      </a>
    </div>
  );
};

export default Navbar;
