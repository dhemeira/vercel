import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <img src={session.user.image} />
        Signed in as {session.user.name} <br />
        <button className="btn btn-primary" onClick={() => signOut()}>
          Logout
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
