import logo from '../../assets/images/logo.svg';

const Footer = () => {
  return (
    <footer className='hidden md:flex'>
      <div className='flex w-full bg-white justify-between md:px-6 items-center py-7 lg:px-32 '>
        <img src={logo} alt='logo' />
        <span>Devsong @ 2025. All rights reserved.</span>
        <ul className='flex md:gap-4 lg:gap-12'>
          <li>이용약관</li>
          <li>개인정보 처리방침</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
