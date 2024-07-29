import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className='ml-8'>
          <Link to="/" className="text-white hover:text-gray-100 text-2xl font-bold">
            Text Summarizer
          </Link>
        </div>
        <div className="space-x-8 mr-16">
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/reference" className="text-white hover:text-gray-300">
            References
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
