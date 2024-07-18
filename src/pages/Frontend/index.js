
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import AddTodo from './AddTodo'
import EditTodo from './EditTodo'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Todos from './Todos'
import DeleteTodo from './DeleteTodo'
import '../../scss/_Frontend.scss'
import Users from './Users'
import DeleteUser from './DeleteUser'

export default function Frontend() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='AddTodo' element={<AddTodo />} />
                    <Route path='EditTodo/:id' element={<EditTodo />} />
                    <Route path='DeleteTodo/:id' element={<DeleteTodo />} />
                    <Route path='Todos' element={<Todos />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/deleteUser/:id" element={<DeleteUser />} />
                    <Route path='*' element={<h1>No Page, Page Not Found, 404 Error</h1>} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
