import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useLazyLoginQuery } from "../../redux/users/userApiSlice.ts";

export const Callback = () => {
  const [searchParmas] = useSearchParams();
  const code = searchParmas.get("code");
  const state = searchParmas.get("state");
  const scope = searchParmas.get("scope");
  const authuser = Number(searchParmas.get("authuser"));
  const prompt = searchParmas.get("prompt");

  const navigate = useNavigate();
  const [login, { isError, isSuccess, isUninitialized, isFetching }] =
    useLazyLoginQuery();

  useEffect(() => {
    if (!code || !state || !scope || isNaN(authuser) || !prompt) {
      return;
    }

    login({ code, state, scope, authuser, prompt })
      .unwrap()
      .then(() => {
        toast.success("Login successful");
        navigate("/", { replace: true });
      })
      .catch(() => {
        toast.error("Login failed");
      });
  }, [state, code]);

  return (
    <>
      {isFetching && <div>Logging in...</div>}
      {isError && <div>Error occurred</div>}
      {isSuccess && <div>Login successful</div>}
      {isUninitialized && <div>Uninitialized</div>}
    </>
  );
};
