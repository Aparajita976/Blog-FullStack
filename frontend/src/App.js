import React, { useContext } from 'react';
import './App.css';
import 'react-icons/ai';
import Topbar from './components/topbar/topbar';
import Homepage from './pages/homepage/homepage';
import Signup from './pages/signup/signup';
import Login from './pages/login/login';
import Singleblog from './pages/singleblog/singleblog';
import Write from './pages/write/write';
import Settings from './pages/settings/settings';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Context } from './context/Context';
import UserBlogs from './components/userBlogs/userBlogs';
function App() {
  const { user } = useContext(Context);
  return (
    <div >
      <Router>
        <Topbar />
        <Routes >
          <Route path="/" element={<Homepage />} />
          <Route path="/posts" element={<Homepage />} />

          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/login" /> : <Signup />} />
          <Route path="/myblog" element={<UserBlogs />} />
          <Route path="/myblog" element={user ? <Navigate to="/myblog" /> : <Signup />} />
          <Route path="/write" element={<Write />} />
          <Route path="/write" element={user ? <Navigate to="/write" /> : <Signup />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings" element={user ? <Navigate to="/settings" /> : <Signup />} />
          <Route path="/post/:postId" element={<Singleblog />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
/*<Route path="/signup" element={currentUser ? < Homepage /> : <Signup />} />


        <Route exact path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route exact path="/post/:id">
          <Singleblog />
        </Route>
        <Route exact path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route exact path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>*/