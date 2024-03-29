import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useCart from './../hooks/useCart';

const Dashboard = () => {

    const [cart] = useCart();

    // TODO: Load data from the server to have dynamic isAdmin based on data
    // const isAdmin = true;

    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                {/* Page content here */}
                <Outlet></Outlet>

            </div>
            <div className="drawer-side lg:bg-[#D1A054]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 md:min-h-full">

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminhome'>Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItem'>Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/manageitems'>Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/history'>Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'>All Users</NavLink></li>
                        </> : <>
                            <li><NavLink to='/dashboard/userhome'>User Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservations'>Reservations</NavLink></li>
                            <li><NavLink to='/dashboard/history'>Payment History</NavLink></li>
                            <li><NavLink to='/dashboard/mycart'>My Cart <span className="badge badge-secondary">+{cart.length}</span></NavLink></li>
                        </>
                    }

                    <div className='divider'></div>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/menu'>Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order</NavLink></li>


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;