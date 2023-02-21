import Header from "@/components/Header";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

function SignIn({ providers }) {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-20 px-14 text-center">
        <Image
          className="w-80"
          src="https://links.papareact.com/ocw"
          alt="logo"
          width={100}
          height={100}
          unoptimized
        />
        <p className="font-xs italic">This is not a Real App.</p>

        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default SignIn;
