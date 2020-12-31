module.exports = {

    base: '/',
    title: '笔记记录',
    description: '笔记记录',
    head: [],
    host: '0.0.0.0',
    port: 8080,
    temp: '',
    dest: '.vuepress/dist',
    locales: {'/': {lang: 'zh-CN',},},
    cache: true,
    extraWatchFiles: [],
    patterns: ['**/*.md', '**/*.vue'],

    themeConfig: {

        // logo
        logo: '/assets/img/logo.png',
        // 导航栏
        nav: require('./nav.js'),
        // 侧边栏
        sidebar: require('./sidebar.js'),

        // 搜索框
        search: true,
        searchMaxSuggestions: 10,

        // 最后更新时间
        lastUpdated: '上次更新:',

        // 上 / 下一篇链接
        nextLinks: true,
        prevLinks: true,

        // GitHub 配置
        repo: 'https://github.com/liuqiankun521/liuqiankun.github.io',
        repoLabel: 'GitHub',
        docsBranch: 'master',
        docsDir: 'docs',
        displayAllHeaders: true,
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',

        // 开启serviceWorker
        serviceWorker: {updatePopup: true},

        devServer: {
            open: true
        },
        configureWebpack: (config, isServer) => {
            if (!isServer) {
            }
        },
        plugins: [
            ['@vuepress/back-to-top'],
            ['@vuepress/last-updated'],
            ['@vuepress/medium-zoom'],
            ['@vuepress/pwa', {
                serviceWorker: true,
                updatePopup: {
                    message: '有新内容更新啦~',
                    buttonText: '立即获取新内容'
                }
            }]
        ]
    }
}
