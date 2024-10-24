'use client';

import { Spinner } from '@radix-ui/themes';
import { ClientSafeProvider, getProviders } from 'next-auth/react';
import { useEffect, useState } from 'react';
import GoogleProviderButton from './GoogleProviderButton';
import GutHubProviderButton from './GutHubProviderButton';
import LinkedInProviderButton from './LinkedInProviderButton';

const ProvidersButton = () => {
  const [providers, setProviders] = useState<Record<string, ClientSafeProvider> | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    fetchProviders();
  }, []);

  if (!providers) return <Spinner size="3" className="m-auto" />;

  return (
    <>
      {providers &&
        Object.values(providers).map((provider: any) => (
          <div key={provider.name}>
            {provider.name === 'Google' && <GoogleProviderButton provider={provider} />}
            {provider.name === 'GitHub' && <GutHubProviderButton provider={provider} />}
            {provider.name === 'LinkedIn' && <LinkedInProviderButton provider={provider} />}
          </div>
        ))}
    </>
  );
};

export default ProvidersButton;
