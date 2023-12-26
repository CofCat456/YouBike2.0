import { ConfigProvider } from 'antd';

import SiteInfo from '~/components/SiteInfo';
import theme from '~/lib/theme';
import { type SiteData } from '~/types';

const getData = async () => {
  const res = await fetch(
    'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'
  );
  const datas = (await res.json()) as SiteData[];
  return datas.map((data) => ({
    ...data,
    sna: data.sna.replace('YouBike2.0_', ''),
  }));
};

export default async function Home() {
  const siteDatas: SiteData[] = await getData();

  const sareas = [
    ...new Set(siteDatas.map(({ sarea }: { sarea: string }) => sarea)),
  ];

  return (
    <ConfigProvider theme={theme}>
      <main className="mb-[34px] mt-6 w-full max-w-[1224px] px-8 sm:mb-11 sm:mt-8 lg:mx-auto">
        <SiteInfo siteDatas={siteDatas} sareas={sareas} />
      </main>
    </ConfigProvider>
  );
}
