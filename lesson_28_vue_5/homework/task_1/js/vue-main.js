let app = new Vue({
    el: '#app',
    data: {
        currentTab: 'tab-main',
        tabs: [{'name': 'Главная', 'tabName': 'tab-main'},
            {'name': 'Проекты', 'tabName': 'tab-project'},
            {'name': 'Услуги', 'tabName': 'tab-services'},
            {'name': 'Контакты', 'tabName': 'tab-contacts'}]
    },
    methods: {
        setActive(event) {
            $(".nav-item > a").removeClass("active");
            $(event.target).addClass("active");
        }
    },
    computed: {
        currentTabComponent: function () {
            return this.currentTab.toLowerCase()
        }
    },

    components: {
        'tab-main': {template: '<div>Главная</div>'},
        'tab-project': {template: '<div> Проекты </div>'},
        'tab-services': {template: '<div>Услуги</div>'},
        'tab-contacts': {template: '<div>Контакты</div>'},
    },

});