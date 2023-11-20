import './App.css';
import Profile from './Profile';
import ProfileData from './ProfileData.json';
import Post from './Post.json'
import ProfileContent from './components/ProfileContent';

function App() {
  return (
    <div>
      
     <Profile data={ProfileData}  />
     <ProfileContent post={Post}  />
    </div>
  );
}

export default App;
