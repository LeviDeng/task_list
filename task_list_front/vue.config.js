module.exports = {
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  //baseUrl: '/',
  //publicPath: '/',
  /*
  devServer: {
      port: 8081,
      proxy: {
          '/api': {
              target: 'http://localhost:3000',
              changeOrigin: true,
              pathRewrite: {
                  '^/api': ''
              }
              //secure: false
              //ws: true
          }
      }
  },
  */
  lintOnSave: false
  
}
// .env.development
//VUE_APP_BASE_API = /api/