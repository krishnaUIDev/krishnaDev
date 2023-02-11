import clsx from 'clsx';
import Link from 'next/link';

import type { ReactNode } from 'react';

export type NavLinkProps = {
  title: string;
  href: string;
  icon?: ReactNode;
  active?: boolean;
};

function NavLink({ title, href, icon = null, active }: NavLinkProps) {
  console.log(active);
  return (
    <Link href={href} className={clsx(`nav-link ${active && 'nav-active'}`)}>
      {title}
      {icon}
    </Link>
  );
}

export default NavLink;
