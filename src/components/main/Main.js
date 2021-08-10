import React from 'react';
import Name from './Name';
import TableResults from './TableResults';

export default function Main() {
  return (
    <div className="h-screen md:col-span-4">
      <div>
        <Name />
        <TableResults />
      </div>
    </div>
  );
}
