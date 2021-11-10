import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to="/cheeses">
                <div>CHEESE APP</div>
            </Link>
        </nav>
    );
};
export default Header;