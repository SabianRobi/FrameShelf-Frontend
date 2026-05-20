import { Navigate } from "react-router-dom";

export const Login = () => {
  // Since only one login method is currently implemented, just redirect the user to Google login.
  return <Navigate to="/auth/login/google" />

  // return (
  //   <div className="flex justify-center my-auto">
  //     <ul>
  //       <li>
  //         <Link to="/auth/login/google">
  //           <GoogleLoginButton />
  //         </Link>
  //       </li>
  //     </ul>
  //   </div>
  // );
};
