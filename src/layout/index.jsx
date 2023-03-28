import { Affix, Button, Container, rem, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { BsArrowUp } from 'react-icons/bs';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const AppLayout = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <section>
      <Navbar />
      <Container size='xl'>
        <Outlet />
      </Container>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition='slide-up' mounted={scroll.y > 200}>
          {(transitionStyles) => (
            <Button
              leftIcon={<BsArrowUp size='1rem' />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </section>
  );
};

export default AppLayout;
