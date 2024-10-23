import '@/styles/globals.css';
import { Box, Container, Flex, Heading, Text, Theme } from '@radix-ui/themes';
import ProvidersButton from './ProvidersButton';
import VideoBg from './VideoBg';
import { getProviders } from 'next-auth/react';

export default async function Page() {
  const providers = await getProviders();
  return (
    <Theme>
      <Box className="home-container">
        <VideoBg />
        <Container size="3" className="content">
          <Flex align="center" height="100vh">
            <Flex
              align="center"
              justify="center"
              height="100vh"
              direction={{ initial: 'column', md: 'row' }}
              gap={{ initial: '6', md: '0' }}
            >
              <Box className="text-gray-300 tracking-wide leading-3 px-7 md:px-20 lg:px-0">
                <Heading
                  as="h1"
                  className="mb-6 text-5xl tracking-wider"
                  align={{ initial: 'center', md: 'left' }}
                >
                  Talk to Inovation
                </Heading>
                <Text as="p" className="text-lg">
                  Try AI assistant and explore its possibility. Experience seamless voice
                  interactions that feel like natural conversations. Ge instant responses and
                  creative solutions while speaking in your own comfortable way.
                </Text>
              </Box>
              <Box className="card bg-slate-900/70 shadow-xl">
                <Heading
                  as="h2"
                  className="card-title mt-5 tracking-wide justify-center font-normal text-gray-200"
                >
                  Please Sign In/Up to Continue
                </Heading>
                <Box className="card-body">
                  <ProvidersButton providers={providers} />
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Theme>
  );
}
