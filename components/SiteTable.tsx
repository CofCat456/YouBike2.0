'use client';

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { type SiteData } from '~/types';

interface Props {
  currCity: string;
  datas: SiteData[];
}

type DataType = { key: string; city: string } & Pick<
  SiteData,
  'sarea' | 'sna' | 'sbi' | 'bemp'
>;

const columns: ColumnsType<DataType> = [
  {
    title: '縣市',
    dataIndex: 'city',
    key: 'city',
    align: 'center',
    sorter: (a, b) => a.city.length - b.city.length,
  },
  {
    title: '區域',
    dataIndex: 'sarea',
    key: 'sarea',
    align: 'center',
    sorter: (a, b) => a.sarea.length - b.sarea.length,
  },
  {
    title: '站點名稱',
    dataIndex: 'sna',
    key: 'sna',
    align: 'center',
    sorter: (a, b) => a.sna.length - b.sna.length,
  },
  {
    title: '可借車輛',
    key: 'sbi',
    dataIndex: 'sbi',
    align: 'center',
    render: (text) => <span className="text-primary-100">{text}</span>,
    sorter: (a, b) => a.sbi - b.sbi,
  },
  {
    title: '可還空位',
    key: 'bemp',
    dataIndex: 'bemp',
    align: 'center',
    render: (text) => <span className="text-primary-100">{text}</span>,
    sorter: (a, b) => a.bemp - b.bemp,
  },
];

const SiteTable: React.FC<Props> = ({ currCity, datas }) => (
  <Table
    columns={columns}
    dataSource={datas.map((data) => ({
      city: currCity,
      key: data.sno,
      sarea: data.sarea,
      sna: data.sna,
      sbi: data.sbi,
      bemp: data.bemp,
    }))}
    pagination={{ hideOnSinglePage: true }}
    scroll={{ x: 1000 }}
  />
);

export default SiteTable;
