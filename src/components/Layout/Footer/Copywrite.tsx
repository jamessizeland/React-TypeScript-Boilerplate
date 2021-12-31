import clsx from 'clsx';
import React from 'react';

interface CopywriteProps {
  className?: string;
  version?: string;
  author?: string;
  title?: string;
  owner?: string;
  repo?: string;
}

export default function Copywrite({
  className,
  version,
  author,
  title,
  owner,
  repo = '/',
}: CopywriteProps) {
  return (
    <div className={clsx('text-center p-6 bg-gray-200', className)}>
      <span>© 2021 Copyright: {owner}</span>
      <a className="text-gray-600 font-semibold" href={repo}>
        Sourcecode
      </a>
    </div>
  );
}
