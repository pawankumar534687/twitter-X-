import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notifications from './Notifications';
import Messages from './Messages';
import Grok from './Grok';
import Communitics from './Communitics';
import Profile from './Profile';
import More from './More';
import Post from './Post';
import Account from './Account';
import Foryou from './Foryou';
import Following from './Following';
import Explore from './Explore';
import Navbar from './Navbar';
import Home from './Home'; 
import Logo from './Logo';

const First = () => {
  return (
    <div className=' text-white bg-black font-medium w-full overflow-y-auto flex justify-start items-start'>
      <div className='flex '>
        <Logo />
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} /> 
             
            <Route path="/home/*" element={<Home />} />  
            <Route path="/explore" element={<Explore />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/grok" element={<Grok />} />
            <Route path="/communitics" element={<Communitics />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/more" element={<More />} />
            <Route path="/post" element={<Post />} />
            <Route path="/foryou" element={<Foryou />} />
            <Route path="/following" element={<Following />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
};

export default First;
