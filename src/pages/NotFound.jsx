import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="text-center space-y-4 mt-40">
            <h1 className="font-bold text-4xl">Not found this page</h1>
            <button onClick={() => navigate('/')} className="btn">Back to Home</button>
        </div>
    );
};

export default NotFound;