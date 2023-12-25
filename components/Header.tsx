import Image from 'next/image';

const navList = ['使用說明', '收費方式', '站點資訊', '最新消息', '活動專區'];

const Header: React.FC = () => {
  return (
    <header className="flex items-center border-b border-[rgb(235,235,235)] px-desktop">
      <Image src="/logo.png" alt="logo" width={95} height={95} />
      <nav className="ml-[60px] mr-auto">
        <ul className='flex items-center gap-x-10'>
          {navList.map((nav) => (
            <li
              key={nav}
              className="text-lg font-medium leading-6 text-primary-800"
            >
              {nav}
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
    </header>
  );
};

export default Header;
