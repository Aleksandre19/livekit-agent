import { ClientSafeProvider, signIn } from 'next-auth/react';
import { Text } from '@radix-ui/themes';
import Image from 'next/image';
import React from 'react';

const LinkedInProviderButton = ({ provider }: { provider: ClientSafeProvider }) => {
  return (
    <button
      className="btn bg-sky-600 hover:bg-sky-700 hover:border-sky-700 border-sky-700 btn-lg btn-wide text-white p-0"
      onClick={() => signIn(provider.id)}
    >
      <>
        <Text> Continue with {provider.name}</Text>
        <Image
          src="/linkedin-logo.png"
          alt="Google logo"
          width={30}
          height={30}
          className="ml-1 rounded-full"
        />
      </>
    </button>
  );
};

export default LinkedInProviderButton;
