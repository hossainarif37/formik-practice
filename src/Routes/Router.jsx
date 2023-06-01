import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import YoutubeForm from "../components/YoutubeForm";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '',
                element: <Home />,

            },
            {
                path: '/create-channel',
                element: <YoutubeForm />,

            },

        ]
    },
]);
