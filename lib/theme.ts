// theme/themeConfig.ts
import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#B5CC22',
    colorTextBase: '#323232'
  },
  components: {
    Select: {
      colorPrimary: '#f6f6f6',
      selectorBg: "#f6f6f6",
      colorBorder: '#f6f6f6',
      colorPrimaryHover: "#f6f6f6",
      colorPrimaryActive: '#f6f6f6',
      optionSelectedBg: "#f6f6f6",
      colorBgElevated: "#f6f6f6",
      optionSelectedColor: "#B5CC22",
      algorithm: true,
    }
  }
};

export default theme;
