import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
    const username = useLogin();
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <p className="text-3xl font-bold text-center">Welcome profile, {username}</p>
        </div>
    )
};

export default ProfilePage;