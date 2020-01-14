Vue.component('carousel', {
    props: ['messages', 'timeout'],
    template: '<div>' +
        '<h2>Карусель:</h2>' +
        '<button class="btn btn-success" @click="startTextSlider(messages, timeout)">Запустить карусель</button>' +
        '<button class="btn btn-danger" @click="stopTextSlider">Остановить карусель</button>' +
        '<p id="text-slider-message" class="border border-dark"></p>' +
        '</div>',
    data: function () {
        return {
            timerId: undefined,
            currentMsg: 0,
        }
    },
    methods: {
        startTextSlider(messages, timeout) {
            if (this.timerId) {
                clearInterval(this.timerId);
            }

            function getCurrentMsg(messages) {
                if ((messages.length === 1) && (messages[0] === '')) {
                    alert('Заполните фразы');
                } else {
                    if (((++this.currentMsg) < (messages.length))) {
                        $('#text-slider-message').text(messages[this.currentMsg]);
                    } else {
                        this.currentMsg = 0;
                        $('#text-slider-message').text(messages[this.currentMsg]);
                    }
                }
            }

            this.timerId = setInterval(getCurrentMsg, timeout * 1000, messages);
        },
        stopTextSlider() {
            if (this.timerId) {
                clearInterval(this.timerId);
            } else {
                alert("Карусель еще не запущена!");
            }
        },
    },
});

let app = new Vue({
    el: '#app',
    data: {
        text: 'Если тебе тяжело, значит ты поднимаешься в гору. Если тебе легко, значит ты летишь в пропасть.;' +
            'Отпускайте идиотов и клоунов из своей жизни.' +
            'Цирк должен гастролировать!;' +
            'Глупца можно узнать по двум приметам: он много говорит о вещах, для него бесполезных, ' +
            'и высказывается о том, про что его не спрашивают.',
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

