
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function ProductsNav() {
    return (
        <>
            <div className="products-Nav">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="all">All</NavLink>
                        </li>
                        <li>
                            <NavLink to="fashions">Fashion</NavLink>
                        </li>
                        <li>
                            <NavLink to="electronics">Electronics</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    );
}

export default ProductsNav;