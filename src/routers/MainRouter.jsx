import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CountryList from '../containers/CountryList'
import CountryDetails from '../containers/CountryDetails'
import NotFound from '../containers/NotFound'


const MainRouter = () => {

    return (
        <Routes>
            <Route element={<CountryList />} path="/" />
            <Route element={<CountryDetails />} path="/:id" />
            <Route element={<NotFound />} path="/test" />
            {/* <Route element={<NotFound />} path="*" /> */}
        </Routes>

    )
}

export default MainRouter