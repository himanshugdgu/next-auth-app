"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const page = () => {
  const session = useSession();
  console.log(session);
  if (session.status === "loading") return <p>Loading...</p>;
  if (session.status === "authenticated")
    return (
      <div>
        <p>Authenticated</p>
        <button onClick={() => signOut("google")}>Logout</button>
      </div>
    );
  if (session.status === "unauthenticated")
    return <button onClick={() => signIn("google")}>Login With Google</button>;

  
  return <div>Login Page</div>;
};

export default page;
