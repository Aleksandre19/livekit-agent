import '@/styles/globals.css';
import { Box, Button, Container, Flex, Heading, Text, Theme } from '@radix-ui/themes';
import VideoBg from './VideoBg';

export default function Page() {
  return (
    <Theme>
      <Box className="home-container">
        <VideoBg />
        <Container size="3" className="content">
          <Flex align="center" height="100vh">
            <Flex>
              <Box>
                <Heading as="h1" className="my-4">
                  Talk to Inovation
                </Heading>
                <Text as="p">
                  Try AI assistant and explore its possibility. Experience seamless voice
                  interactions that feel like natural conversations with a knowledgeable friend. Get
                  instant responses and creative solutions while speaking in your own comfortable
                  way.
                </Text>
              </Box>
              <Box>
                <Button>Get Started</Button>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Theme>
  );
}
