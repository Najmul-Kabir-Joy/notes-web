import React from 'react';
import SignInButton from './SignInButton';

const NotLoggedIn = () => {
  return (
    <div className="h-[84vh] flex justify-center items-center">
      <div>
        <h1 className="text-3xl uppercase font-bold font-[cursive] text-center">welcome</h1>
        <h1 className="text-xl font-semibold text-center mt-5">
          Please sign in to view/add your notes
        </h1>
        <div className="mt-5">
          <SignInButton />
        </div>
      </div>
    </div>
  );
};

export default NotLoggedIn;
