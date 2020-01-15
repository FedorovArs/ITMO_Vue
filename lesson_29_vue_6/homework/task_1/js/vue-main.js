const Home = {
    template: '<h2>Домашняя старница</h2>'
};
const Main = {
    template: '<h2>Главная</h2>'
};
const Projects = {
    template: '<h2>Проекты</h2>'
};
const Services = {
    template: '<h2>Сервисы</h2>'
};
const Contacts = {
    template: '<h2>Контакты</h2>'
};
const NotFound = {
    template: '<h2>Старницы отсутствет</h2>'
};

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/main', component: Main},
        {path: '/projects', component: Projects},
        {path: '/services', component: Services},
        {path: '/contacts', component: Contacts},
        {path: '*', component: NotFound},
    ]
});

let app = new Vue({
    el: '#app',
    router: router,
    data: {}
});