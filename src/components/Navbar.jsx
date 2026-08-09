import './Navbar.css';

function Navbar(props) {
    return(
        <nav className='navbar'>
            <h1>{props.title}</h1>
        </nav>
    );
}

export default Navbar;