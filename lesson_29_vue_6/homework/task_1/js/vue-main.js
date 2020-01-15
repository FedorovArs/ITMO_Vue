const Main = {
    template: '<h1>Банер</h1>'
};
const NotFound = {
    template: '<h2>Старницы отсутствет</h2>'
};
const Home = {
    template: '<h2>Домашняя старница</h2>'
};
const About = {
    template: '<h2>О нас</h2>'
};

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/main', component: Main},
        {path: '/about', component: About},
        {path: '/', component: Home},
    ]
});

let app = new Vue({
    el: '#app',
    router: router,
    data: {}
});