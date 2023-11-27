import Logo from '../components/Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="bg-dark-background sticky top-0 flex-wrap z[20] mx-auto flex w-full items-center justify-between">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
