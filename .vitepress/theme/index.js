// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import CustomFeatures from '../../src/components/CustomFeatures.vue';
import './tailwind.postcss';
import './custom.css';
import './firebase';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomFeatures', CustomFeatures);
  },
};
