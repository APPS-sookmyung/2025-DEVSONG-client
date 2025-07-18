import logo from '../../assets/images/logo.svg';

const Footer = () => {
  return (
    <footer className='flex px-32 h-20 items-center justify-between text-xs bg-white'>
      <img src={logo} alt='logo' />
      <span>Devsong @ 2025. All rights reserved.</span>
      <ul className='flex gap-10'>
        <li>이용약관</li>
        <li>개인정보 처리방침</li>
      </ul>
    </footer>
  );
};

export default Footer;
