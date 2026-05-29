import React from 'react'
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import BlogLandingPage from './Pages/Blog/BlogLandingPage'
import BlogPostView from './Pages/Blog/BlogPostView'
import PostByTags from './Pages/Blog/PostByTags'
import SearchPost from './Pages/Blog/SearchPost'
import AboutPage from './Pages/Blog/AboutPage'
import ContactPage from './Pages/Blog/ContactPage'
import AdminLogin from './Pages/Admin/AdminLogin'
import PrivateRoutes from './Routes/PrivateRoutes'
import Dashboard from './Pages/Admin/Dashboard'
import ErrorPage from './Pages/Error/ErrorPage'
import BlogPosts from './Pages/Admin/BlogPosts'
import BlogPostEditor from './Pages/Admin/BlogPostEditor'
import Comments from './Pages/Admin/Comments'
import  {Toaster} from "react-hot-toast"
import UserProvider from './context/userProvider'
// import UserProvider from './context/userProvider.jsx'
// import UserProvider,{ UserContext }  from "./context/UserContext"

const App = () => {
  return (
    <UserProvider>
    <div>
      
      <BrowserRouter>
       <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize: "13px",
            },
          }}
        />
      <Routes>
        <Route path='/'  element={<BlogLandingPage/>}/>
        <Route path='/about'  element={<AboutPage/>}/>
        <Route path='/contact'  element={<ContactPage/>}/>
        <Route path='/:slug'  element={<BlogPostView/>}/>
        <Route path='/tag/:tagName'  element={<PostByTags/>}/>
        <Route path='/search'  element={<SearchPost/>}/>
        <Route path='/*'  element={<ErrorPage/>}/>

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
     

    </div>
    </UserProvider>
  )
}

export default App
