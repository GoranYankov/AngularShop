export const httpConfig = {
    http:'http://164.138.216.56:3001',
    http2: 'http://freegeoip.net/json/',
    login:'/login',
    register: '/register',
    newOrder: '/orders/new',
    searchOrder: '/orders/searchOrder',
    allOrders: '/orders/allOrders',
    editOrderStatus: '/orders/editOrderStatus',
    allOrdersToday: '/orders/allOrderToDay',
    allOrdersThisMonth: '/orders/allOrderToMonth',
    newCart: '/cart/newCart',
    getCart: '/cart/getCart',
    updateCart: '/cart/updateCart',
    removeProductFromCart: '/cart/delete',

    //Продукт
    getProductByTag: '/product/getProductByTag',
    addProduct: '/product/add',
    getHomeProducts: '/product/getHomeProducts',
    getSingelProduct: '/product/getSingleProduct',
    getAllProduct: '/product/all',
    deleteProduct: '/product/delete',
    updateProduct: '/product/update',
    randomProduct: '/product/randomProduct',

    //Статии
    addArticle: '/article/add',
    getNumOfArticle: '/article/getArticle',
    getCountOfArticle: '/article/getCount',
    getSinglArticle: '/article/singlArticle',
    deleteArticle: '/article/delete',
    updateArticle: '/article/update',

    //Slider
    getSlider: '/slider',
    setSlider: '/slider/saveSlider',
    remove: '/slider/delete',
    update: '/slider/update',

    //MSG
    sendMsg: '/msg/sendMsg',
    getMsgCount: '/msg/getMsgCount',
    getAllMsg: '/msg/getAllMsg',
    deleteMsg: '/msg/deleteMsg',
    readMsg: '/msg/readMsg',
    unReadMsg: '/msg/unReadMsg'


}