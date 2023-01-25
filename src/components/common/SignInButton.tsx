import React from 'react';

const SignInButton = () => {
  return (
    <div className="bg-gray-400 text-white rounded-full hover:bg-gray-500 text-center">
      <button
        className="px-6 py-2 uppercase text-center"
        onClick={() => (window.location.href = '/api/auth/login')}
      >
        Sign In
      </button>
    </div>
  );
};

export default SignInButton;
