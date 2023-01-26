import { useUser } from '@auth0/nextjs-auth0/client';
import React from 'react';
import RoundedSkeleton from '../loaders/skeletons/RoundedSkeleton';
import Avatar from './Avatar';
import LogoText from './LogoText';
import SignInButton from './SignInButton';

const Navbar = () => {
  const { user, isLoading } = useUser();

  return (
    <nav className="w-full bg-blue-100 flex justify-between p-4 fixed top-0 z-10">
      <LogoText />
      {isLoading ? (
        <RoundedSkeleton />
      ) : user?.email ? (
        <Avatar name={user.name as string} imgLink={user.picture as string} />
      ) : (
        <SignInButton />
      )}
    </nav>
  );
};

export default Navbar;
