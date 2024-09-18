import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { SignInFlow } from "../types";
import { useState } from "react";

interface SignInCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignInCard = ({setState}: SignInCardProps) => {
    const {signIn} = useAuthActions();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleProviderSignIn =  (value: "github" | "google") => {
        signIn(value);
    }

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login to Slack</CardTitle>
        <CardDescription>
          Use your email and password to sign in.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            disabled={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <Input
            disabled={false}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
            required // TODO: add validation with inbuilt html
          />
          <Button type="submit" className="w-full" size="lg" disabled={false}>
            Continue
          </Button>
        </form>
        <Separator />

        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={false}
            size="lg"
            className="w-full relative"
            variant="outline"
            onClick={() => {}}
          >
            <FcGoogle className="absolute top-3 left-2.5 size-5" />
            Continue with Google
          </Button>
          <Button
            disabled={false}
            size="lg"
            className="w-full relative"
            variant="outline"
            onClick={ () => handleProviderSignIn("github")}
          >
            <FaGithub className="absolute top-3 left-2.5 size-5" />
            Continue with Github
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Don&apos;t have an account?
          <span onClick={() => setState("signUp")} className="text-sky-700 hover:underline cursor-pointer">
            Sign up
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
