import React from "react"
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    return(<div className="products">
        <nav>
            <ul>
                <li><Link to="/products/foliage">Foliage Plants</Link></li>
                <li><Link>Flowering Plants</Link></li>
                <li><Link>Succulents</Link></li>
                <li><Link>Ferns</Link></li>
            </ul>
        </nav>
        <div>
            <Outlet />
        </div>
    </div>)
}

export default Products