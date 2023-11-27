import Logo from '../components/Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="bg-blue-800 sticky top-0 z-20 mx-auto flex w-full items-center justify-between p-4">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
