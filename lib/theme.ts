// theme/themeConfig.ts
import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#B8CC22',
    colorTextBase: '#323232',
  },
  components: {
    Select: {
      colorPrimary: '#f6f6f6',
      selectorBg: '#f6f6f6',
      colorBorder: '#f6f6f6',
      colorPrimaryHover: '#f6f6f6',
      colorPrimaryActive: '#f6f6f6',
      optionSelectedBg: '#f6f6f6',
      colorBgElevated: '#f6f6f6',
      optionSelectedColor: '#B8CC22',
      algorithm: true,
    },
    Table: {
      headerBg: 'rgb(184, 204, 34)',
      headerSplitColor: 'rgb(184, 204, 34)',
      headerColor: 'rgb(255, 255, 255)',
      headerBorderRadius: 20,
      padding: 20,
    },
  },
};

export default theme;
