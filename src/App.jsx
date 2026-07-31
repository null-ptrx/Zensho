import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Users from './pages/Users'
import AddUser from './pages/AddUser'
import { Routes, Route } from 'react-router-dom'
const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/Users" element={<Users />} />

                <Route path="/AddUser" element={<AddUser />} />

                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </div >
    )
}
export default App