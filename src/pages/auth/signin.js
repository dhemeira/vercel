import { getProviders, signIn } from 'next-auth/react';

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return { props: { providers } };
};

const SignIn = ({ providers }) => {
  console.log('providers client', providers);
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="btn btn-outline btn-primary" onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
};

export default SignIn;
