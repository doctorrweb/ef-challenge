import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Countries from '../containers/Countries'
import Country from '../containers/Country'
import NotFound from '../containers/NotFound'


const MainRouter = () => {

    return (
        <Routes>
            <Route element={<Countries />} path="/" />
            <Route element={<Country />} path="/:id" />
            <Route element={<NotFound />} path="/test" />
            {/* <Route element={<NotFound />} path="*" /> */}
        </Routes>

    )
}

export default MainRouter