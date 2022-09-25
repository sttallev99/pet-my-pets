import { NavLink } from 'react-router-dom';

export default function Header({
    isAuthenticated,
    user
}) {

    const guestRoutes = (
        <div id="guest">
            <NavLink className="button" to="/login">Login</NavLink>
            <NavLink className="button" to="/register">Register</NavLink>
        </div>
    );
    const userRoutes = (
        <div id="user">
            <span>Welcome, {user} </span>
            <NavLink className="button" to="/myPet">My Pets</NavLink>
            <NavLink className="button" to="/create">Add Pet</NavLink>
            <a className="button" href="#">Logout</a>
        </div>
    );

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <NavLink to="/">Dashboard</NavLink>

                    {isAuthenticated
                        ? userRoutes
                        : guestRoutes
                    }
                </section>
            </nav>
        </header>
    )
}