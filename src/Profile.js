import React from 'react'
import ProfileHeader from './components/ProfileHeader';


const Profile = ({data}) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <ProfileHeader data={data} />
      {/* Add other components here */}
    </div>
  );
}

export default Profile