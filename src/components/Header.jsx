import Logo from '../components/Logo';

const Header = () => {
  return (
    <header className="bg-dark-background sticky top-0 z[20] mx-auto flex w-full items-center justify-between">
      <Logo />
      <h1>Header </h1>
    </header>
  );
};

export default Header;