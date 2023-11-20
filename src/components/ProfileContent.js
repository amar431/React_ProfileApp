// ProfileContent.js
import React, { useState } from 'react';
import { FaRegNewspaper, FaEye, FaHeart } from 'react-icons/fa';

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="bg-white p-4 mb-4 rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <div className="w-2/3 pr-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
          <p className="text-gray-600 line-clamp-3">{post.content}</p>
          <div className="flex items-center mt-4">
            <FaEye className="text-gray-500 mr-1" />
            <p className="text-gray-600">{post.totalViews}</p>
          </div>
        </div>
        <div className="w-1/3 flex items-center justify-end">
          <button
            className={`text-gray-600 focus:outline-none ${liked ? 'text-red-500' : ''}`}
            onClick={handleLike}
          >
            <FaHeart className="mr-1" />
            {liked ? 'Liked' : 'Like'}
          </button>
        </div>
      </div>
    </div>
  );
};

const ProfileContent = ({ post }) => {
  return (
    <div className="-mt-16 mx-auto  bg-gray-100 rounded-lg p-4 shadow-md">
      {/* Single Line Tab Above */}
      

      {/* Posts Section */}
      <div className="-mt-4">
        <div className="flex items-center justify-start mb-4">
          <FaRegNewspaper className="text-4xl text-gray-800 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">{post.totalPosts} Posts</h2>
        </div>

        {/* Display Post Cards */}
        {post.posts.map((individualPost) => (
          <PostCard key={individualPost.id} post={individualPost} />
        ))}
      </div>

      {/* Single Line Tab Below */}
      
    </div>
  );
};

export default ProfileContent;
