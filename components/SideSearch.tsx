'use client';

import { Checkbox } from 'antd';
import { type CheckboxChangeEvent } from 'antd/es/checkbox';
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';

import Search from '~/components/ui/Search';
import Select from '~/components/ui/Select';

interface Props {
  currCity: string;
  currSareas: string[];
  citys: string[];
  siteNames: string[];
  selectSareas: string[];
  setCurrCity: Dispatch<SetStateAction<string>>;
  setSelectSareas: Dispatch<SetStateAction<string[]>>;
}

const SiteSearch: React.FC<Props> = ({
  currCity,
  currSareas,
  citys,
  siteNames,
  selectSareas,
  setCurrCity,
  setSelectSareas,
}) => {
  const [checkAllboxStats, setCheckAllBoxStats] = useState(true);

  useEffect(() => {
    if (selectSareas.length === currSareas.length) setCheckAllBoxStats(true);
    else setCheckAllBoxStats(false);
  }, [currSareas.length, selectSareas.length]);

  useEffect(() => {
    setSelectSareas(() => [...currSareas]);
  }, [currSareas, setSelectSareas]);

  function handleAllCheck(checked: boolean) {
    if (checked) setSelectSareas(() => [...currSareas]);
    else setSelectSareas(() => []);
  }

  function handleCheck(checked: boolean, sarea: string) {
    if (checked) setSelectSareas((oldArr) => [...oldArr, sarea]);
    else {
      setSelectSareas((oldArr) =>
        oldArr.filter((oldSarea) => oldSarea !== sarea)
      );
      setCheckAllBoxStats(false);
    }
  }

  return (
    <>
      {/* Selectearch block */}
      <div className="mb-6 flex items-center gap-x-4">
        <Select
          placeholder="選擇縣市"
          optionFilterProp="label"
          options={citys.map((city) => ({
            value: city,
            label: city,
            key: city,
          }))}
          value={currCity}
          onChange={(value: string) => setCurrCity(value)}
        />

        {/* TODO: change data */}
        <Search
          placeholder="搜尋站點"
          optionFilterProp="label"
          options={siteNames.map((siteName) => ({
            value: siteName,
            label: siteName,
            key: siteName,
          }))}
        />
      </div>

      {/* All Check */}

      <Checkbox
        checked={checkAllboxStats}
        onChange={(e) => handleAllCheck(e.target.checked)}
      >
        全部勾選
      </Checkbox>

      <div className="mt-[15px] grid grid-cols-3 gap-x-6 gap-y-[15px]">
        {currSareas.map((sarea) => (
          <Checkbox
            key={sarea}
            checked={selectSareas.includes(sarea)}
            onChange={(e: CheckboxChangeEvent) =>
              handleCheck(e.target.checked, sarea)
            }
          >
            {sarea}
          </Checkbox>
        ))}
      </div>
    </>
  );
};

export default SiteSearch;
