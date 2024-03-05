// SideNav.tsx
import React from 'react';
import Link from 'next/link';

interface Heading {
  id: string;
  title: string;
}

interface SideNavProps {
  headings: Heading[];
}

const SideNav: React.FC<SideNavProps> = ({ headings }) => {
  return (
    <nav className="side-nav w-5/6">
      <ul className='text-black-500'>
        {headings.map((heading, index) => (
          <li key={index}>
            <Link href={`#${heading.id}`}>
            <h2>{heading.id}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
