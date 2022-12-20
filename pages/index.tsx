import { Button, Container, Heading, useTheme } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <Container maxW={'8xl'} py={4}>
      Body{' '}
      <Button
        onClick={() => {
          console.log({ theme });
        }}
      >
        Print Theme
      </Button>
      <Heading>Heading...</Heading>
    </Container>
  );
};

export default Home;
