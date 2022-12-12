import React from 'react';

interface ButtonProps {
  content: string;
}

function Button({ content }: ButtonProps) {
  return (
    <button className="font-primary cursor-pointer text-red-primary text-[17px] transition-padding duration-[0.4s] hover:px-[5px] hover:bg-black-primary uppercase">
      {content}
    </button>
  );
}

export default Button;
