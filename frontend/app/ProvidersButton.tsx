'use client';

import { Text } from '@radix-ui/themes';
import { ClientSafeProvider, signIn } from 'next-auth/react';
import Image from 'next/image';

const ProvidersButton = ({
  providers,
}: {
  providers: Record<string, ClientSafeProvider> | null;
}) => {
  return (
    <>
      {providers &&
        Object.values(providers).map((provider: any) => (
          <div key={provider.name}>
            <button
              className="btn btn-primary btn-lg btn-wide text-white"
              onClick={() => signIn(provider.id)}
            >
              <Text> Sign in with {provider.name}</Text>
              {provider.name === 'Google' && (
                <Image
                  src="/google-logo.png"
                  alt="Google logo"
                  width={30}
                  height={30}
                  className="ml-1 rounded-full"
                />
              )}
            </button>
          </div>
        ))}
    </>
  );
};

export default ProvidersButton;
