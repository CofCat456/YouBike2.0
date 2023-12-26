'use client';

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: number;
  city: string;
  dist: string;
  name: string;
  remaining_amout: number;
  seats_amout: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: '縣市',
    dataIndex: 'city',
    key: 'city',
    align: 'center',
  },
  {
    title: '區域',
    dataIndex: 'dist',
    key: 'dist',
    align: 'center',
  },
  {
    title: '站點名稱',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '可借車輛',
    key: 'remaining_amout',
    dataIndex: 'remaining_amout',
    align: 'center',
    render: (text) => <span className="text-primary-100">{text}</span>,
  },
  {
    title: '可還空位',
    key: 'seats_amout',
    dataIndex: 'seats_amout',
    align: 'center',
    render: (text) => <span className="text-primary-100">{text}</span>,
  },
];

const data: DataType[] = [
  {
    key: 1,
    city: '台北市',
    dist: '松山區',
    name: '台北市台北市台北市台北市台北市台北市台北市',
    remaining_amout: 12,
    seats_amout: 12,
  },
  {
    key: 2,
    city: '台北市',
    dist: '松山區',
    name: '台北市台北市台北市台北市台北市台北市台北市',
    remaining_amout: 12,
    seats_amout: 12,
  },
  {
    key: 3,
    city: '台北市',
    dist: '松山區',
    name: '台北市台北市台北市台北市台北市台北市台北市',
    remaining_amout: 12,
    seats_amout: 12,
  },
  {
    key: 4,
    city: '台北市',
    dist: '松山區',
    name: '台北市台北市台北市台北市台北市台北市台北市',
    remaining_amout: 12,
    seats_amout: 12,
  },
  {
    key: 5,
    city: '台北市',
    dist: '松山區',
    name: '台北市台北市台北市台北市台北市台北市台北市',
    remaining_amout: 12,
    seats_amout: 12,
  },
  {
    key: 6,
    city: '台北市',
    dist: '松山區',
    name: '台北市台北市台北市台北市台北市台北市台北市',
    remaining_amout: 12,
    seats_amout: 12,
  },
];

const SiteTable: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={{ hideOnSinglePage: true }}
  >
    <Table.Column />
  </Table>
);

export default SiteTable;
