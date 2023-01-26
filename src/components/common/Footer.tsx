import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-100 fixed bottom-0 w-full text-center p-4">
      <p className="uppercase font-bold font-[cursive] italic">My Notes</p>
      <p className="italic">
        &copy;{' '}
        <a
          href="https://github.com/Najmul-Kabir-Joy"
          target="_blank"
          rel="noreferrer"
          className="font-normal"
        >
          Najmul-2023
        </a>
      </p>
    </footer>
  );
};

export default Footer;
