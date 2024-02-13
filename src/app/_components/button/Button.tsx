import Link from "next/link";
import React from "react";
type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};
const Button = ({ href, children, ...rest }: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return <button {...rest}>{children}</button>;
};

export default Button;
