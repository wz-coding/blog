import { defineUserConfig } from "vuepress"
import { getDirname, path } from '@vuepress/utils'
import  docsearchPlugin  from './public/utils/docsearch'
import theme from "./theme.js"

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: "/blog/",

  // lang: "en-US",
  title: "web-docs",
  head: [['link', { rel: 'icon', href: '/lore.svg' }]],
  description: "wzCoding-web-docs",
  theme,
  plugins: [
    docsearchPlugin
  ],
  alias: {
    '@public': path.resolve(__dirname, './public'),
    '@data': path.resolve(__dirname, './public/data'),
  },
  clientConfigFile: path.resolve(__dirname, 'client.js')
  // Enable it with pwa
  // shouldPrefetch: false,
});
