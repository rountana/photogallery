import { handleCallback } from "next-auth/react";

export default function handler(req, res) {
  return handleCallback("google")(req, res);
}
