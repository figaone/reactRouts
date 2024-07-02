import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./components/home"
import Posts from "./components/posts"
import Profile from "./components/profile"

const App = () => {
  return(
    <BrowserRouter>
    <header>
      <Link to="/">Home</Link><br/>
      <Link to="posts">Posts</Link><br/>
      <Link to="profile">Profile</Link><br/>
    </header>
      <Routes>
        <Route path="posts" element={<Posts/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App