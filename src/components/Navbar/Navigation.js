import { Icon } from "assets/icons/Icons";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    let navigate = useNavigate();
    return (
        <div className="flex items-center gap-x-4">
            <button
                onClick={() => navigate(-1)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
            >
                <Icon size={22} name="prev" />
            </button>
            <button
                onClick={() => navigate(+1)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
            >
                <Icon size={22} name="next" />
            </button>
        </div>
    )
}

export default Navigation