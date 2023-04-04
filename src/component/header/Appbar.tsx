import { Link } from "react-router-dom";
import { ROUTES } from "../../constant/routes";

//home
function Appbar() {
    return (
        <div>

            {/* <div>
                <ul>
                    <Link to={ROUTES.HOME}>
                        <li
                            className='list-class-women'
                        >
                            <span>Home</span>
                        </li>
                    </Link>
                    
                    <Link to={ROUTES.SERVICE}>
                        <li
                            className='list-class-women'
                        >
                            <span>Service</span>
                        </li>
                    </Link>
                    
                    <Link to={ROUTES.ABOUT_US}>
                        <li
                            className='list-class-women'
                        >
                            <span>About Us</span>
                        </li>
                    </Link>
                    
                    <Link to={ROUTES.GALLERY}>
                        <li
                            className='list-class-women'
                        >
                            <span>Gallery</span>
                        </li>
                    </Link>
                    
                    
                    <Link to={ROUTES.CONTACT_US}>
                        <li
                            className='list-class-women'
                        >
                            <span>Contact Us</span>
                        </li>
                    </Link>
                </ul>
            </div> */}

            <div>
                <ul>
                    <Link to={ROUTES.HOME}>
                        <li
                        //onClick={handleClickHome}
                        ><span>Home</span></li>
                    </Link>
                    <Link className="menu__bar__title__div" to={ROUTES.SERVICE}>
                        <li
                        //onClick={handleClickWomen}
                        ><span>Service</span></li>
                    </Link>
                    <Link className="menu__bar__title__div" to={ROUTES.ABOUT_US}>
                        <li
                        // onClick={handleClickMen}
                        ><span>About Us</span></li>
                    </Link>
                    <Link
                        to={ROUTES.GALLERY}>
                        <li
                        //    onClick={handleClickSmartGear}
                        ><span>Gallery</span></li>
                    </Link>

                    
                    <Link
                        to={ROUTES.CONTACT_US}>
                        <li
                        //    onClick={handleClickSmartGear}
                        ><span>Contact Us</span></li>
                    </Link>
                </ul>
            </div>

        </div>
    );
}

export default Appbar;

