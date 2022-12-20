import { Button, useColorMode } from '@chakra-ui/react';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header style={{ border: '1px solid #ccc', padding: '1rem' }}>
      Navbar <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
    </header>
  );
}
