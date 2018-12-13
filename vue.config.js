module.exports = {
    devServer: {
        proxy: {
            '/api': {
                
                // target host
                target: 'http://127.0.0.1:3000',
                
                //target: 'http://192.168.199.20:8080',
                // needed for virtual hosted sites
                changeOrigin: true,
                pathRewrite: {
                  '^/api': '/api'
                }
              },
              '/site': {
                // target host
        
                target: 'http://127.0.0.1:3000',
                
                //target: 'http://192.168.199.20:8080',
                // needed for virtual hosted sites
                changeOrigin: true,
                pathRewrite: {
                  '^/site': '/site'
                }
              }
        }
    }
}