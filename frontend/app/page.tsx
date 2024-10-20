import '@/styles/globals.css';
import { Box, Container, Theme } from '@radix-ui/themes';
import VideoBg from './VideoBg';

export default function Page() {
  return (
    <Theme>
      <Box className="home-container">
        <VideoBg />
        <Container size="3" className="content">
          Content
        </Container>
      </Box>
    </Theme>
  );
}
