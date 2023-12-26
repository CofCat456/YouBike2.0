'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navList } from '~/data/navs';

import MobileMenu from './ui/MobileMenu';

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="border-b border-[rgb(235,235,235)] px-8 lg:px-0">
      <div className="mx-auto flex max-w-desktop items-center justify-between">
        <Image
          src="/site/logo.png"
          alt="logo"
          width={95}
          height={95}
          priority
          className="aspect-square w-[65px] md:w-[95px]"
        />
        <nav className="ml-[60px] mr-auto hidden md:block">
          <ul className="flex items-center gap-x-10">
            {navList.map((nav) => (
              <li
                key={nav.link}
                className={clsx(
                  'text-lg font-medium leading-6',
                  pathname === '/' && nav.link === 'site'
                    ? 'text-primary-100'
                    : pathname.replace('/', '') === nav.link
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
          className="hidden rounded-[100px] bg-primary-100 px-6 py-[10px] text-lg leading-5 tracking-[-1px] text-white md:block"
        >
          登入
        </button>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
