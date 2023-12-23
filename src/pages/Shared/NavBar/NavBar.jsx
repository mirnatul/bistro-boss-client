import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import useCart from '../../../hooks/useCart';
import { AuthContext } from '../../../provider/AuthProvider';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
        <li>
            <Link to='/dashboard/mycart'>
                <button className="btn">
                    Cart
                    <div className="badge badge-secondary">+{cart.length || 0}</div>
                </button>
            </Link>
        </li>
        {
            user ? <>
                <button onClick={handleLogOut} className='btn btn-ghost'>Logout</button>
            </>
                : <>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }
    </>
    return (
        <div>
            <div className="navbar bg-black text-white fixed z-10 bg-opacity-50 max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='mr-4'>
                        <p>{user?.displayName}</p>
                    </div>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;