import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function portfolio() {
  const { data: session, status } = useSession();
  console.log(session);
  const handleSignOut = async () => {
    await signOut({ redirect: false }); // Clear session without redirect
    window.location.reload(); // Refresh the page to reflect the sign-out state
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <div>
        <div>Welcome, {session.user.name}!</div>;
        <button onClick={() => signOut(handleSignOut)}>Sign Out</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Next.js Google OAuth Example</h1>
      <button onClick={() => signIn("google")}>Sign In with Google</button>
    </div>
  );
}

// import { useSession, signIn, signOut } from "next-auth/react";
// const portfolio = () => {
//   const { data: session, status } = useSession();
//   if (session) {
//     console.log("session variable" + JSON.stringify(session));
//     return (
//       <div>
//         <h1> {`Welcome, ${session.user.name}`} </h1>
//         <button onClick={() => signOut()} className="border p-2 m-4 rounded-md">
//           Sign in
//         </button>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h3> Sign-up to access this page </h3>
//         <button onClick={() => signIn()} className="border p-2 m-4 rounded-md">
//           Sign in
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>portfolio</h1>
//     </div>
//   );
// };

// export default portfolio;
