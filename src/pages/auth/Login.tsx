import { toast } from "react-toastify";
import { Button } from "../../components/Button.tsx";
import { useLazyGetLoginUrlQuery } from "../../redux/users/userApiSlice.ts";

export const Login = () => {
  const [getLoginUrl] = useLazyGetLoginUrlQuery();

  const handleGetLoginUrl = () => {
    getLoginUrl()
      .unwrap()
      .then((response) => (globalThis.location.href = response.url))
      .catch((error) => {
        toast.error("Failed to get login URL!");
        console.error("Failed to fetch login URL:", error);
      });
  };

  return (
    <>
      <Button onClick={handleGetLoginUrl}>
        <p>Login with google</p>
      </Button>
    </>
  );
};
