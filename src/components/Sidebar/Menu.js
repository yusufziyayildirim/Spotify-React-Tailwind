import { useState, useEffect } from "react";
import { Icon } from "assets/icons/Icons.js"
import { NavLink, useLocation } from 'react-router-dom';

const Menu = () => {

    const [activeLink, setActiveLink] = useState("");
    let location = useLocation();
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
        <nav className="px-2">
            <ul className="flex flex-col">
                <li>
                    <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                            isActive
                                ? "active-link h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
                                : "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
                        }
                    >
                        <span>
                            <Icon name="home" />
                        </span>
                        Ana sayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/search"}
                        className={({ isActive }) =>
                            isActive
                                ? "active-link h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
                                : "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
                        }
                    >
                        <span>
                            <Icon name="search" />
                        </span>
                        Ara
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/collection"}
                        className={({ isActive }) =>
                            isActive
                                ? "active-link h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
                                : "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
                        }
                    >
                        <span>
                            <Icon name="collection" />
                        </span>
                        Kitaplığın
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu