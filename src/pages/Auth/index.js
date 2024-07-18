import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import ForgotPassword from './ForgotPassword'
import ChangePassword from './ChangePassword'
import '../../scss/_Auth.scss'

export default function Auth() {
    return (
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='ForgotPassword' element={<ForgotPassword />} />
            <Route path='ChangePassword' element={<ChangePassword />} />
            <Route path='*' element={<h1>No Page, Auth Page Not Found, 404 Error</h1>} />
        </Routes>
    )
}
