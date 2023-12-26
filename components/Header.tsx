'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navList } from '~/data/navs';

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="border-b border-[rgb(235,235,235)]">
      <div className="mx-auto flex max-w-desktop items-center">
        <Image
          src="/site/logo.png"
          alt="logo"
          width={95}
          height={95}
          priority
        />
        <nav className="ml-[60px] mr-auto">
          <ul className="flex items-center gap-x-10">
            {navList.map((nav) => (
              <li
                key={nav.link}
                className={clsx(
                  'text-lg font-medium leading-6',
                  pathname === nav.title
                    ? 'text-primary-100'
                    : 'text-primary-800'
                )}
              >
                <Link href={nav.link}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="rounded-[100px] bg-primary-100 px-6 py-[10px] text-lg leading-5 tracking-[-1px] text-white"
        >
          登入
        </button>
      </div>
    </header>
  );
};

export default Header;
