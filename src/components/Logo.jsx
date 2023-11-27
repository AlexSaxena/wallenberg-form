import wallenbergLogo from '../assets/wallenberg-logo.png';

const Logo = () => {
  return (
    <div className="logo h-16 w-16">
      <img src={wallenbergLogo} alt="Logo Wallenbergskolan" />
    </div>
  );
};

export default Logo;
