import { ConfigProvider } from 'antd';

import SiteInfo from '~/components/SideInfo';
import theme from '~/lib/theme';
import { type SiteData } from '~/types';

const getData = async () => {
  const res = await fetch(
    'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'
  );
  const datas = (await res.json()) as SiteData[];
  return datas;
};

export default async function Home() {
  const siteDatas: SiteData[] = await getData();

  const sareas = [
    ...new Set(siteDatas.map(({ sarea }: { sarea: string }) => sarea)),
  ];

  const siteNames = siteDatas.map(({ sna }: { sna: string }) =>
    sna.replace('YouBike2.0_', '')
  );

  return (
    <ConfigProvider theme={theme}>
      <main className="mx-auto mb-11 mt-8 w-full max-w-[1192px]">
        <SiteInfo siteDatas={siteDatas} sareas={sareas} siteNames={siteNames} />
      </main>
    </ConfigProvider>
  );
}
