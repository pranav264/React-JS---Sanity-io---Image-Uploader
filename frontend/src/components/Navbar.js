import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="flex p-4 font-semibold shadow-lg">
          <li>
            <Link className="m-9 border-b-2 border-gray-400" to="/">Upload an Image</Link>
          </li>
          <li>
            <Link className="m-5 border-b-2 border-gray-400" to="/ImageReceiver">View Images</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Navbar
