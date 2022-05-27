import cx from 'classnames';
import React, {useCallback} from 'react';

import './Button.scss';

export const ButtonSize = {
  m: 'm',
  s: 's',
  xs: 'xs',
}

export const ButtonTheme = {
  black: 'black',
  red: 'red',
  white: 'white',
  light: 'light',
}

export const Button = (props) => {
  const className = cx(
    'button',
    `theme_${props.theme || 'black' || 'white'}`,
    props.size ? `size_${props.size}` : null,
    props.sizeSm ? `sizeSm_${props.sizeSm}` : null,
    props.sizeMd ? `sizeMd_${props.sizeMd}` : null,
    props.sizeLg ? `sizeLg_${props.sizeLg}` : null,
    props.sizeXl ? `sizeXl_${props.sizeXl}` : null,
    props.sizeXxl ? `sizeXxl_${props.sizeXxl}` : null,
    props.disabled ? 'disabled' : null,
    props.className
  );

  const onClick = useCallback(() => {
    if (props.disabled) {
      return;
    }

    if (props.onClick) {
      props.onClick();
    }
  }, [props.onClick, props.disabled]);

  return (
    <button
      disabled={Boolean(props.disabled)}
      style={props.style}
      className={className}
      type={props.type}
      form={props.form}
      onClick={onClick}
    >
      { props.children }
    </button>
  );
};
