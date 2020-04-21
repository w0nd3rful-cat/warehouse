import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='nav-wrapper'>
          <Link to='/' className='left brand-logo'>
            Warehouse
          </Link>
          <ul className='right '>
            <li>
              <Link to='/products'>List</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
