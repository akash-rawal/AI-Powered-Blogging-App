import React from 'react'
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import BlogLandingPage from './Pages/Blog/BlogLandingPage'
import BlogPostView from './Pages/Blog/BlogPostView'
import PostByTags from './Pages/Blog/PostByTags'
import SearchPost from './Pages/Blog/SearchPost'
import AdminLogin from './Pages/Admin/AdminLogin'
import PrivateRoutes from './Routes/PrivateRoutes'
import Dashboard from './Pages/Admin/Dashboard'
import BlogPosts from './Pages/Admin/BlogPosts'
import BlogPostEditor from './Pages/Admin/BlogPostEditor'
import Comments from './Pages/Admin/Comments'
import  Toaster from "react-hot-toast"
import UserProvider from './context/userContext'

const App = () => {
  return (
    <UserProvider>
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<BlogLandingPage/>}/>
        <Route path='/:slug'  element={<BlogPostView/>}/>
        <Route path='/tag/:tagName'  element={<PostByTags/>}/>
        <Route path='/search'  element={<SearchPost/>}/>

        <Route element={<PrivateRoutes  allowedRoles={["admin"]}/>}>
        <Route path='/admin/dashboard' element={<Dashboard/>} />
        <Route path='/admin/posts' element={<BlogPosts/>} />
        <Route path='/admin/create' element={<BlogPostEditor/>} />
        <Route path='/admin/edit/:postSlug' element={<BlogPostEditor isEdit={true}/>} />
        <Route path='/admin/comments' element={<Comments/>} />
        </Route>

        <Route path='/admin-login'  element={<AdminLogin/>}/>
      </Routes>
      </BrowserRouter>
      <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize: "13px",
            },
          }}
        />

    </div>
    </UserProvider>
  )
}

export default App
