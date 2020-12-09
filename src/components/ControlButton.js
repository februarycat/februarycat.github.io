import React from 'react';
import cx from 'classnames';

const ControlButton = ({
  hasDefaultBg = false,
  renderAs: Component = 'button',
  children,
  className,
  ...rest
}) => (
  <Component
    className={cx(
      'inline-flex items-center',
      'hover:bg-gray-200 dark-hover:bg-gray-700',
      'px-2 h-8 min-w-8 rounded',
      'focus:outline-none focus:ring focus:ring-blue-200',
      className,
      {
        'bg-gray-100 dark:bg-gray-800': hasDefaultBg,
      }
    )}
    {...rest}
  >
    {children}
  </Component>
);

export default ControlButton;
