import React from 'react';
import classNames from 'classnames';

import './styles.scss';
interface ButtonProps {
  label: string;
  color: 'primary' | 'secondary';
  variant?: Variants;
  disabled?: boolean;
  onClick?: () => void;
}

type Variants = 'default' | 'outlined' | 'contained';

const Button = ({
  label,
  color,
  variant = 'default',
  onClick,
  disabled = false,
}: ButtonProps) => {
  const buttonStyles = classNames({
    btn: true,
    'btn--primary': color === 'primary',
    'btn--secondary': color === 'secondary',
    'btn--outlined': variant === 'outlined',
  });
  return (
    <button disabled className={buttonStyles}>
      {label}
    </button>
  );
};

export default Button;
