import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../pages',
      routes: [
        {
          path: '/',
          component: '../pages/with-auth/index',
          routes: [
            {
              path: '/',
              redirect: '/Home'
            },
            {
              path: '/Home',
              component: '../pages/with-auth/Home'
            },
            {
              path: '/table',
              component: '../pages/with-auth/table'
            },
          ]
        }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'mango',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  theme: {
    'primary-color': '#202d40',
  },
}

export default config;
