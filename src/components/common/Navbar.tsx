import React from 'react';
import Avatar from './Avatar';
import LogoText from './LogoText';
import SignInButton from './SignInButton';

const Navbar = ({ isLoggedIn = true }: { isLoggedIn?: boolean }) => {
  return (
    <nav className="w-full bg-gray-200 flex justify-between p-4 fixed top-0">
      <LogoText />
      {isLoggedIn ? <Avatar name="Md. Najmul Kabir" /> : <SignInButton />}
    </nav>
  );
};

export default Navbar;
