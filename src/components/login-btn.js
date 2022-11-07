import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button className="btn btn-primary" onClick={() => signOut()}>
          Login
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button className="btn btn-primary" onClick={() => signIn()}>
        Login
      </button>
    </>
  );
}
