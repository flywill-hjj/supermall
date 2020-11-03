module.exports = {
  configureWebpack: {
    resolve: {//解决路径相关 的问题
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}