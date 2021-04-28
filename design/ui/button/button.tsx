import React from 'react'
import './button.scss'

export interface ButtonProps {
  htmlType?: 'button' | 'submit' | 'reset'
  /**
   * Is this the principal call to action on the page?
   */
  type?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "link"
  /**
   * How large should the button be?
   */
  size?: "sm" | "medium" | "lg"
  /**
   * Forms contents
   */
  children?: React.ReactNode
  /**
   * Optional click handler
   */
  onClick?: React.MouseEventHandler
}

export const Button = ({htmlType = 'button', type = 'primary', size = 'medium', children, ...props }: ButtonProps) => {
  return (
    <button
      type={htmlType}
      className={["btn", `btn-${size}`, `btn-${type}`].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
};
