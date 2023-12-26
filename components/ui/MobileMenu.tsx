'use client';

import { Button } from 'antd';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useState } from 'react';

import { CloseIcon, HamburgerIcon } from '~/assets';
import { navList } from '~/data/navs';
const MobileMenu: React.FC = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const pathname = usePathname();

  const toggleShowMenu = useCallback(() => {
    setIsShowMenu((preStatus) => !preStatus)
  }, [])

  return (
    <div className="block md:hidden">
      <Button
        type='default'
        ghost={true}
        shape="circle"
        className='humburgerBtn'
        icon={isShowMenu ? <CloseIcon /> : <HamburgerIcon />}
        onClick={toggleShowMenu}
      />
      <div
        className={clsx(
          'fixed left-0 top-[66px] z-10 h-[95dvh] w-screen bg-primary-100 p-8 transition-transform duration-500 ease-in-out',
          isShowMenu ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        <nav className="inline-flex h-full flex-col justify-between">
          <ul className="flex flex-col gap-y-8">
            {navList.map((nav) => (
              <li
                key={nav.link}
                className={clsx(
                  'text-lg font-medium leading-6',
                  pathname === '/' && nav.link === 'site'
                    ? 'text-primary-800'
                    : pathname.replace('/', '') === nav.link
                      ? 'text-primary-800'
                      : 'text-white'
                )}
              >
                <Link
                  href={nav.link}
                  onClick={() => setIsShowMenu}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="rounded-[100px] bg-white px-6 py-[10px] text-base leading-5 tracking-[-1px] text-primary-100"
          >
            登入
          </button>
        </nav>
      </div>
    </div >
  );
};

export default MobileMenu;
