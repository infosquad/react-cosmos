import React from 'react';
import { scrollTo } from './scrollTo';

type Props = {
  children?: React.ReactNode;
  style?: {};
  to: string;
  className?: string;
};

export const InternalLink = ({ children, to, className, style }: Props) => {
  function handleClick(e: React.MouseEvent) {
    const element = getElementByPath(to);
    if (element) {
      e.preventDefault();
      scrollTo(getCenteredElementTop(element));
    } else {
      // Follow link natively
    }
  }

  return (
    <a href={to} className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  );
};

function getElementByPath(path: string) {
  if (path === '/') return document.getElementById('splash-screen');
  if (path.indexOf('/') === 0) return document.getElementById(path.substr(1));
  return null;
}

const headerHeight = 81;

function getCenteredElementTop(element: HTMLElement) {
  const availWindowHeight = window.innerHeight - headerHeight;
  const elRect = element.getBoundingClientRect();
  const elScrollTop = element.offsetTop - headerHeight;

  if (elRect.height >= availWindowHeight) {
    return Math.ceil(elScrollTop);
  }

  const yPadding = (availWindowHeight - elRect.height) / 2;
  return Math.ceil(elScrollTop - yPadding);
}
