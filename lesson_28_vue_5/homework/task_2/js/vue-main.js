Vue.component('carousel', {
    props: ['messages', 'timeout'],
    // template: '<div><h2>Карусель:</h2><p>Name:{{ this.messages2 }}</p><p>Age: {{ timeout }}</p></div>',
    // template: '<div><h2>Карусель:</h2><p>{{ messages }} {{ timeout }}</p></div>',
    template: '<div><h2>Карусель:</h2><p>{{messages}} - {{ timeout }}</p></div>',
    methods: {
        startCarousel() {
            let a = '<p>setInterval({{messages}},{{ timeout }})</p>'
        }

    },
});

let app = new Vue({
    el: '#app',
    data: {
        // carousel: {messages: '', timeout: 5},
        text: '',
        separator: ';',
        messages: [],
        timeout: 5,
    },
    methods: {},
    computed: {
        splitMessages: function () {
            this.messages = this.text.split(this.separator).map((item) => item.trim());
            return this.messages;
        },
    },
    components: {},
});

