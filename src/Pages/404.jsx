import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="flex justify-center items-center min-h-screen flex-col">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p className="my-5 text-xl">Sorry, an unexpected error has occurred.</p>
            <p className="text-lg">{error.status} : {error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage;