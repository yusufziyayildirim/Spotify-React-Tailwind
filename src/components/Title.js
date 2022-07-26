import { NavLink } from "react-router-dom";

const Title = () => {
    return (
        <header className="flex items-center justify-between mb-4">

            <NavLink to={more ?? '#'}>
                <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline">{title}</h3>
            </NavLink>

            {more && (
                <NavLink className={"text-xs hover:underline font-semibold uppercase text-link tracking-wider"} to={more}>
                    SEE ALL
                </NavLink>
            )}
        </header>
    )
}
