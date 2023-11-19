import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosOpen from "../../Hooks/useAxiosOpen";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogIn } = useAuth();
  const axiosOpen = useAxiosOpen();
  const navigate = useNavigate();
  const handleGoogleLogIn = () => {
    googleLogIn().then((result) => {
      console.log(result);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosOpen.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div className="mx-auto p-4">
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleLogIn} className="btn btn-wide">
          <FaGoogle className="mr-1" />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
