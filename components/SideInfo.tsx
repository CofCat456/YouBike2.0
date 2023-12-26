'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { citys, mockSareas } from '~/data';
import { type SiteData } from '~/types';

import SiteSearch from './SideSearch';
import SiteTable from './SiteTable';

interface Props {
  siteDatas: SiteData[];
  sareas: string[];
  siteNames: string[];
}

const SiteInfo: React.FC<Props> = ({ siteDatas, sareas, siteNames }) => {
  const [currCity, setCurrCity] = useState('台北市');
  const [currSareas, setCurrSareas] = useState(sareas);
  const [selectSareas, setSelectSareas] = useState<string[]>([]);

  const showSiteTable = siteDatas.filter((siteData) =>
    selectSareas.includes(siteData.sarea)
  );

  useEffect(() => {
    if (currCity === '台北市') setCurrSareas(() => sareas);
    else setCurrSareas(() => mockSareas);
  }, [currCity, sareas]);

  return (
    <>
      <h3 className="text-2xl leading-6 text-primary-100">站點資訊</h3>
      <div className="relative mb-[24.5px] mt-8 flex h-[300px]">
        <div className="mr-auto">
          <SiteSearch
            currCity={currCity}
            currSareas={currSareas}
            selectSareas={selectSareas}
            setCurrCity={setCurrCity}
            setSelectSareas={setSelectSareas}
            citys={citys}
            siteNames={siteNames}
          />
        </div>
        <div className="relative max-w-full self-end">
          <Image
            src="/site/Frame.png"
            alt="background image"
            width={502}
            height={172}
            priority
          />
        </div>
      </div>
      <SiteTable currCity={currCity} datas={showSiteTable} />
    </>
  );
};

export default SiteInfo;
