import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to="/">
                <div>CHEESE APP</div>
            </Link>
        </nav>
    );
};
export default Header;