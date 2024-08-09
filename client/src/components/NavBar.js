//It easier to use this component to navigate between the pages of the application
// It's kinda like a button that takes you to a different page and it's easier to use than the <a> tag
// The page dosen't need to refresh with the Link
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </nav>

    );

}

export default Navbar;