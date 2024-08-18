import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h1 className='text-4xl font-bold'>Mh</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/muhamad-h-b5a22b17b/" target='blank'> <FaLinkedinIn /> </a>
            <a href="https://github.com/hilmanm011" target='blank'> <FaGithub /> </a>
        </div>
    </nav>
  )
}

export default Navbar