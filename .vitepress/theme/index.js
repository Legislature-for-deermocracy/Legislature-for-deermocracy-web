// .vitepress/theme/index.js
import './tailwind.postcss';
import DefaultTheme from 'vitepress/theme';
import './custom.css';
import './firebase';

export default {
  ...DefaultTheme,
};
