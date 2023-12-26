'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { citys, mockSareas, mockSiteDatas } from '~/data';
import { type SiteData } from '~/types';

import SiteSearch from './SiteSearch';
import SiteTable from './SiteTable';

interface Props {
  siteDatas: SiteData[];
  sareas: string[];
}

const SiteInfo: React.FC<Props> = ({ siteDatas, sareas }) => {
  const [currCity, setCurrCity] = useState('台北市');
  const [currSareas, setCurrSareas] = useState(sareas);
  const [selectSareas, setSelectSareas] = useState<string[]>([]);
  const [selectSiteName, setSelectSiteName] = useState<string | undefined>();

  const getCurrSiteDatas =
    currCity === undefined
      ? []
      : currCity === '台北市'
        ? siteDatas
        : mockSiteDatas.map((siteData) => ({
            ...siteData,
            sna: siteData.sna.replace('YouBike2.0_', ''),
          }));

  const showSiteData = getCurrSiteDatas.filter((siteData) =>
    selectSareas.includes(siteData.sarea)
  );

  const showSiteNames = showSiteData.map((siteData) => siteData.sna);

  const showSiteTable =
    selectSiteName === '' || selectSiteName === undefined
      ? showSiteData
      : showSiteData.filter((siteData) => siteData.sna === selectSiteName);

  useEffect(() => {
    if (currCity === '台北市') setCurrSareas(() => sareas);
    else setCurrSareas(() => mockSareas);

    setSelectSiteName(undefined);
  }, [currCity, sareas]);

  return (
    <>
      <h3 className="text-2xl leading-6 text-primary-100">站點資訊</h3>
      <div className="relative mb-[24.5px] mt-8 flex">
        <div className="w-full">
          <SiteSearch
            currCity={currCity}
            currSareas={currCity === undefined ? [] : currSareas}
            selectSareas={selectSareas}
            selectSiteName={selectSiteName}
            setCurrCity={setCurrCity}
            setSelectSareas={setSelectSareas}
            setSelectSiteName={setSelectSiteName}
            citys={citys}
            siteNames={showSiteNames}
          />
        </div>
        <div className="relative ml-[150px] mr-[74px] hidden max-w-full self-end md:block">
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
