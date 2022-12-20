import React from 'react';
import { Button, createStyles, clsx } from '@mantine/core';

interface ButtonProps {
  content: string;
  fill?: 'full' | 'fit';
  type?: 'primary' | 'secondary';
  onClick?: Function;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const useStyles = createStyles({
  button: {
    borderRadius: '8px',
    padding: '8px 10px',
  },
});

function CusBtn({ content, fill = 'fit', type = 'primary', onClick, size = 'sm' }: ButtonProps) {
  const { classes } = useStyles();

  return (
    <Button
      color={type === 'primary' ? 'palate.5' : 'palate.2'}
      className={clsx(classes.button, `w-${fill}`)}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      size={size}
    >
      {content}
    </Button>
  );
}

export default CusBtn;
