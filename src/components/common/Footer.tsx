import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black flex items-center justify-between h-[67px] py-4 max:sm:justify-center max-sm:gap-4">
      <p className="text-sm leading-[150%] font-normal text-white opacity-70 max-sm:text-xs">
        Made with ❤️ for the people of the internet.
      </p>
      <p className="text-sm leading-[150%] font-normal text-white opacity-70 max-sm:text-xs">
        © 2024 Dataskate.io, All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer