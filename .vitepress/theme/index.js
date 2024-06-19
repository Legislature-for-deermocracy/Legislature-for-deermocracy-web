// .vitepress/theme/index.js
import './tailwind.postcss';
import './custom.css';
import DefaultTheme from 'vitepress/theme';
import CustomContainer from '../../src/components/CustomContainer.vue';

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomContainer', CustomContainer);
  },
};
