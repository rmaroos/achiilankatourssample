import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'accent' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

interface LinkProps extends BaseProps {
  to: string;
  href?: never;
  onClick?: () => void;
}

interface AnchorProps extends BaseProps {
  href: string;
  to?: never;
  onClick?: () => void;
}

interface ButtonProps extends BaseProps {
  to?: never;
  href?: never;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
}

const variants: Record<Variant, string> = {
  primary: 'bg-jungle-800 text-sand-50 hover:bg-jungle-700 border border-transparent',
  accent: 'bg-clay-500 text-white hover:bg-clay-600 border border-transparent',
  outline: 'bg-transparent text-jungle-800 border border-jungle-800/30 hover:border-jungle-800 hover:bg-jungle-50',
  ghost: 'bg-transparent text-jungle-800 border border-transparent hover:bg-jungle-50'
};

const sizes: Record<Size, string> = {
  sm: 'text-sm px-3.5 py-2 gap-1.5',
  md: 'text-[0.95rem] px-5 py-2.5 gap-2',
  lg: 'text-base px-6 py-3.5 gap-2'
};

function classes(variant: Variant, size: Size, className?: string) {
  return [
  'inline-flex items-center justify-center rounded-full font-medium tracking-tight',
  'transition-colors duration-150 ease-smooth disabled:opacity-50 disabled:cursor-not-allowed',
  variants[variant],
  sizes[size],
  className ?? ''].
  join(' ');
}

export function Button(props: LinkProps | AnchorProps | ButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props;

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} onClick={props.onClick} className={classes(variant, size, className)}>
        {children}
      </Link>);

  }

  if ('href' in props && props.href) {
    return (
      <a
        href={props.href}
        target={props.href.startsWith('http') ? '_blank' : undefined}
        rel={props.href.startsWith('http') ? 'noreferrer noopener' : undefined}
        onClick={props.onClick}
        className={classes(variant, size, className)}>
        
        {children}
      </a>);

  }

  const { type = 'button', onClick, disabled } = props as ButtonProps;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes(variant, size, className)}>
      {children}
    </button>);

}