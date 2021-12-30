import React, { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const inlineStyle = {
  boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
};

function Card({ children, className }: Props) {
  return (
    <div className={clsx(className, 'relative rounded-lg')} style={inlineStyle}>
      {children}
    </div>
  );
}

function CardBody({ children, className }: Props) {
  return (
    <div className={clsx(className, 'block flex-grow flex-shrink p-5')}>
      {children}
    </div>
  );
}

function CardTitle({ children, className }: Props) {
  return (
    <div className={clsx(className, 'font-medium text-gray-700 mb-3')}>
      {children}
    </div>
  );
}

function CardText({ children, className }: Props) {
  return <div className={clsx(className, 'text-gray-500')}>{children}</div>;
}

export { Card, CardBody, CardTitle, CardText };
