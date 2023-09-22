// import { useAuth0 } from "@auth0/auth0-react";
// import React from "react";
// import { Navigate } from "react-router-dom";

// const Login = () => {
//     const { loginWithRedirect, isAuthenticated } = useAuth0();

//     if (isAuthenticated) {
//         // Redirect the user to the home page if they are already authenticated
//         return <Navigate to="/" />;
//     }
//     return (
//         <>
//             <div className="flex flex-row justify-between h-screen">
//                 <div className="bg-blue-500 w-1/2">
//                     <div className="w-full items-center align-middle text-center font-bold text-5xl text-slate-200 relative top-1/2">
//                         Boards.
//                     </div>
//                 </div>
//                 <div className="w-1/2">
//                     <div className="flex flex-col gap-4 justify-center items-center text-start w-full h-full">
//                         <div className="gap-3 flex flex-col">
//                             <div className="font-semibold text-lg p-2 w-fit m-3 mb-28">
//                                 Signup or Login with Google Auth
//                             </div>
//                             <div className="mx-3 m-5">
//                                 <button
//                                     className="w-full py-2 rounded-full bg-slate-600 p-2 text-slate-100"
//                                     onClick={() => loginWithRedirect()}
//                                 >
//                                     Log In
//                                 </button>
//                             </div>
//                             <div className="mx-3 m-5">
//                                 <button
//                                     className="w-full py-2 rounded-full bg-slate-600 p-2 text-slate-100"
//                                     onClick={() => loginWithRedirect()}
//                                 >
//                                     Google Auth
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Login;
