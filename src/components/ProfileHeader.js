// ProfileHeader.js
import React from 'react';
import photo from '../photo.jpg';
import backgroundImage from '../bg.png';
import logo from '../ttt-academy-meta.png'
import { BiBadgeCheck } from 'react-icons/bi';
import { FaHeart, FaEye } from 'react-icons/fa';


const ProfileHeader = ({ data }) => {
  return (
    <div>
      {/* Navigation Bar */}
     
      <div className="bg-gray-950 p-4 flex justify-between items-center text-white">
      <div >
            <img
              src={logo}
              alt="Profile"
              width={120}
              height={120}
              
            />
            
          </div>
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
          Projects
        </button>
      </div>

      {/* Profile Header */}
      <header
        className="bg-cover bg-center h-64 relative sm:h-96"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute flex -mb-4 sm:flex-row items-end h-full">
          {/* Background Image Overlay */}
          <div className=" inset-0 bg-opacity-0 bg-black"></div>

          {/* Profile Photo */}
          <div className=" sm:ml-8  relative sm:-mb-8  ">
            <img
              src={photo}
              alt="Profile"
              className="w-20 h-20 sm:w-40 -mb-3 sm:h-40 rounded-full border-4 border-white shadow-md"
            />
            
          </div>
        </div>
      </header>

      <div className="text-left sm:text-left text-white ml-4 sm:ml-16 mt-2 sm:mt-10 ">
  <div className="flex">
    <h1 className="flex items-center text-2xl sm:text-3xl relative text-gray-600 font-bold">
      {data.name} <BiBadgeCheck className="text-blue-500 ml-1 fill-sky-600" />
    </h1>
    
  </div>
  <div className='mt-2'>

  <p className="text-gray-600 text-xl font-bold">{data.bio}</p>
  </div>
  <a href={data.links.instagram} target="_blank" rel="noopener noreferrer" 
  className=" text-blue-500 hover:text-blue-700 mt-10">
    Instagram
  </a>
  <div className="flex justify-start items-center mt-3">
      <div className="text-center mr-4">
        <FaEye className="text-2xl text-blue-400 " />
        <p className="text-gray-600">{data.profileViews} </p>
      </div>
      <div className="text-center">
        <FaHeart className="text-2xl text-red-500 fill-current" />
        <p className="text-gray-600">{data.totalLikes} </p>
      </div>
    </div>
</div>
      {/* Followers and Following Section */}
      <div className="flex justify-center gap-4 mt-4 sm:-mt-28">
          <div className="text-center">
            <div className="bg-white p-3 rounded shadow-md border-2 border-blue-300">
              <div className="text-2xl font-bold text-blue-300">{data.followers}</div>
              <p className="text-gray-600">Followers</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-3 rounded shadow-md border-2 border-blue-300">
              <div className="text-2xl font-bold text-blue-300">{data.following}</div>
              <p className="text-gray-600">Following</p>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ProfileHeader;
