import { signIn } from "next-auth/react";

export default function handler(req, res) {
  return signIn("google")(req, res);
}
