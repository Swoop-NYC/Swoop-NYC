import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CreatePost from './sidenav/CreatePost.jsx';

const SideNav = () => {
  return (
    <div id='sideNav'>
      {/* These are all the links for the side nav to names might have to be changed*/}

      <Link to='/createpost'> createPost</Link>
      <Link to='/listings'>Listings</Link>
      <Link to='/signup'>Signup</Link>
      <Link to='/login'>Login</Link>

      <Routes>
        {/* These are the routes for the sidenav all of the names are subject to chage as well as the names for the elements that they refer to */}

        <Route path='/createpost' element={<CreatePost/>}></Route>
        <Route path='listings' element></Route>
        <Route path='signup' element></Route>
        <Route path='login' element></Route>

      </Routes>
    </div>
  )
}

export default SideNav;