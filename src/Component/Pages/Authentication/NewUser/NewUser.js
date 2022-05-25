import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';

const NewUser = () => {
    const {user}=useAuth()
    return (
        <div className="lg:p-36 p-8 bg-menu1 space-y-4">
            <h1 className="text-3xl font-medium text-green-500">Congratulations <span className='text-white'>{user.displayName}</span></h1>
            <p className="text-xl text-blue-500">This <span className="text-white">{user.email}</span> email is successfully registered. <br /> You are a new member this family. <br /> Now you can access all the user accessibbility.</p>
          <div>  <p className="">Admin</p>
            <small className="text-white font-medium block pb-9 ">Rashed Sabbir</small></div>

 <Link className="bg-indigo-900 my-10  text-white rounded-2xl py-2 px-4" to="/dashboard"><button>Go to Your Profile</button></Link>
        </div>
    );
};

export default NewUser;