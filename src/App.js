import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Homepage"
import Products from "./components/Products"
import Foliage from "./components/foliage/Foliage"

const App = () => {
    return (
        <Router>
            <Routes path="/">
                <Route index element={ <Home />} />
                <Route path="products" element={<Products />}>
                    <Route path="foliage" element={<Foliage />}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App