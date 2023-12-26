import './globals.css';
import './antd.css';

import type { Metadata } from 'next';

import Header from '~/components/Header';
import { sansFont } from '~/lib/font';

import StyledComponentsRegistry from './AntdRegistry';

export const metadata: Metadata = {
  title: 'YouBike 微笑單車 - 站點地圖',
  description: 'Welcome to YouBike 微笑單車, 推廣民眾騎乘自行車作為短程接駁交通工具，用慢速的方式體驗城市不同時空的迷人風情，不僅提供市民便利的接駁工具，同時還兼具了休閒運動與娛樂的特點，讓市民及遊客體驗騎乘自行車是一種生活與旅遊的最佳方式。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className={`${sansFont.variable} font-sans text-config-text`}>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
