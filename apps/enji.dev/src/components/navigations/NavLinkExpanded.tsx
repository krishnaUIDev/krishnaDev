import clsx from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';

import { ChevronRightIcon } from '@/components/Icons';
import NavLink from '@/components/navigations/NavLink';

import type { NavLinkProps } from '@/components/navigations/NavLink';

interface NavLinkExpandedProps {
  title: string;
  items: Array<NavLinkProps>;
}

function NavLinkExpanded({ title, items }: NavLinkExpandedProps) {
  const router = useRouter();
  const pathname = router?.pathname;
  return (
    <div className={clsx('flex')}>
      <div
        className={clsx(
          'nav-link nav-link--label pointer-events-none ml-2 mr-2'
        )}
      >
        {title}
        <ChevronRightIcon className={clsx('h-3 w-3')} />
      </div>
      <ul className={clsx('flex items-center')}>
        {items.map((item, idx) => (
          <React.Fragment key={item.href}>
            <li>
              <NavLink
                title={item.title}
                href={item.href}
                active={pathname === item.href}
              />
            </li>
            {idx !== items.length - 1 && (
              <li>
                <div className="nav-link__separator">&middot;</div>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default NavLinkExpanded;
