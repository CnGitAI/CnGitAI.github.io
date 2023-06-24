const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''

  // 代理目标地址
  // 这里使用 blogImage 主要用于区分 vercel serverless 的 api 路径
  if (req.url.startsWith('/blogImage')) {
    target = 'http://rwlot91gu.hd-bkt.clouddn.com/blogImage'
  }

  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // 通过路径重写，去除请求路径中的 `/blogImage`
      // 例如 /blogImage/202306211922891.jpg 将被转发到 http://rwlot91gu.hd-bkt.clouddn.com//blogImage/202306211922891.jpg
      '^/blogImage/': '/'
    }
  })(req, res)
}

