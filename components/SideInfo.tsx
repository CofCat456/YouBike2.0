'use client';

import { Checkbox } from 'antd';

import Search from '~/components/ui/Search';
import Select from '~/components/ui/Select';

const SiteInfo = () => {
  return (
    <>
      {/* Select & Search block */}
      <div className="mb-6 flex items-center gap-x-4">
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

      {/* All Check */}
      <Checkbox>全部勾選</Checkbox>

      <div className="mt-[15px] grid grid-cols-3 gap-x-6 gap-y-[15px]">
        {[...Array(10).keys()].map((key) => (
          <Checkbox key={key}>松山區</Checkbox>
        ))}
      </div>
    </>
  );
};

export default SiteInfo;
