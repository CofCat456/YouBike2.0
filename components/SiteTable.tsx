'use client';

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { type SiteData } from '~/types';

interface Props {
  currCity: string;
  datas: SiteData[];
}

type DataType = { city: string } & Pick<
  SiteData,
  'sno' | 'sarea' | 'sna' | 'sbi' | 'bemp'
>;

const columns: ColumnsType<DataType> = [
  {
    title: '縣市',
    dataIndex: 'city',
    key: 'city',
    align: 'center',
  },
  {
    title: '區域',
    dataIndex: 'sarea',
    key: 'sarea',
    align: 'center',
  },
  {
    title: '站點名稱',
    dataIndex: 'sna',
    key: 'sna',
    align: 'center',
  },
  {
    title: '可借車輛',
    key: 'sbi',
    dataIndex: 'sbi',
    align: 'center',
    render: (text) => <span className="text-primary-100">{text}</span>,
  },
  {
    title: '可還空位',
    key: 'bemp',
    dataIndex: 'bemp',
    align: 'center',
    render: (text) => <span className="text-primary-100">{text}</span>,
  },
];

const SiteTable: React.FC<Props> = ({ currCity, datas }) => (
  <Table
    columns={columns}
    dataSource={datas.map((data) => ({
      city: currCity,
      key: data.sno,
      sarea: data.sarea,
      sna: data.sno,
      sbi: data.sbi,
      bemp: data.bemp,
    }))}
    pagination={{ hideOnSinglePage: true }}
  />
);

export default SiteTable;
