import { ConfigProvider } from 'antd';
import Image from 'next/image';

import Search from '~/components/ui/Search';
import Select from '~/components/ui/Select';
import theme from '~/lib/theme';

export default function Home() {
  return (
    <ConfigProvider theme={theme}>
      <main className="mx-desktop mt-8">
        <h3 className="text-2xl leading-6 text-primary-100">站點資訊</h3>
        <div className="relative flex h-[300px] items-end">
          <div className="flex-1">
            <Select
              placeholder="搜尋區域"
              optionFilterProp="children"
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'tom',
                  label: 'Tom',
                },
              ]}
            />

            <Search
              placeholder="搜尋區域"
              optionFilterProp="children"
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'tom',
                  label: 'Tom',
                },
              ]}
            />
          </div>
          <div className="relative max-w-full">
            <Image
              src="/Frame.png"
              alt="background image"
              width={502}
              height={172}
            />
          </div>
        </div>
      </main>
    </ConfigProvider>
  );
}
