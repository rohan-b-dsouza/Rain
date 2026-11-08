"use client";

import { authClient } from "@/lib/auth-client";

export default function Dashboard() {
  const {
    data: session,
    isPending,
    error,
  } = authClient.useSession();

  console.log({
    session,
    isPending,
    error,
  });

  if (isPending) {
    return <div>Loading session...</div>;
  }

  if (error) {
    return <div>Session error: {error.message}</div>;
  }

  if (!session) {
    return <div>Not signed in</div>;
  }

  return (
    <div>
      Welcome, {session.user.name}
    </div>
  );
}