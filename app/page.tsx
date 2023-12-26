import { ConfigProvider } from 'antd';
import Image from 'next/image';

import DataTable from '~/components/DataTable';
import SiteInfo from '~/components/SideInfo';
import theme from '~/lib/theme';

export default function Home() {
  return (
    <ConfigProvider theme={theme}>
      <main className="mx-auto mt-8 mb-11 w-full max-w-[1192px]">
        <h3 className="text-2xl leading-6 text-primary-100">站點資訊</h3>
        <div className="relative mb-[24.5px] mt-8 flex h-[300px]">
          <div className="mr-auto">
            <SiteInfo />
          </div>
          <div className="relative max-w-full self-end">
            <Image
              src="/Frame.png"
              alt="background image"
              width={502}
              height={172}
            />
          </div>
        </div>
        <DataTable />
      </main>
    </ConfigProvider>
  );
}
