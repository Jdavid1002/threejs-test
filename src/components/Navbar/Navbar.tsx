import { Link, BrowserRouter } from 'react-router-dom';

import './Navbar.scss'


const Navbar = () => {

  return (
    <nav className="Navbar" >
      <div>
        <h2> ICON </h2>
      </div>

      <div className='Navbar-container_links' >
        <BrowserRouter>
          <Link className='links' to='/skills'> Skills </Link>
          <Link className='links' to='/proyects'> Proyects </Link>
          <Link className='links' to='/skills'> About Me </Link>
        </BrowserRouter>
      </div>
    </nav>
  );
}
 
export default Navbar;