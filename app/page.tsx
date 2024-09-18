"use client";
import { Button } from "@/components/ui/button";
// import { AuthScreen } from "@/features/auth/components/auth-screen";
import { useAuthActions } from "@convex-dev/auth/react";

export default function Home() {
  const {signOut}   = useAuthActions();
  return (
    <div className="">
      Signed in
      <Button onClick={signOut}>Sign out</Button>
    </div>
  );
}
