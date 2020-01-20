Vue.component('todolist', {
    props: ['addfn'],
    data: function () {
        return {
            taskCategory: '',
            taskText: '',
            taskEndDate: '',
            completed: false
        }


    },
    template: `
<div class="block">
    <label>Категория</label>
    <select v-model="taskCategory">
        <option>Дом</option>
        <option>Работа</option>
        <option>Прочее</option>
    </select>

<div class="input">
    <label>Добавить задачу</label>
<input type="text" v-model="taskText"> 
</div>


<div class="date">
    <label>Планируемая дата</label>
    <input type="date" v-model="taskEndDate">
</div>
<button @click="addfn({taskCategory:taskCategory, taskText:taskText, taskEndDate: taskEndDate, completed: completed })">Add</button>
</div>`
});

Vue.component('taskform', {
    props: ['index', 'task', 'delfn'],
    template: `
<table>
<tr>
<td style="width: 7%;">
{{task.text}}
</td>
<td style="width: 72%;">
{{task.category}}
</td>
<td style="width: 15%;">
{{task.endDate}}
</td>
<!--<td style="width: 5%;">-->
<!--<button @click="complete"><img id="icon" src="https://clip.cookdiary.net/sites/default/files/wallpaper/green-tick-clipart/281623/green-tick-clipart-transparent-background-281623-6211266.png"></button> -->

<td style="width: 5%;">
<button @click="delfn(index)"><img id="icon" src="https://image.flaticon.com/icons/png/128/947/947725.png"></button>
</td>
</td>
</tr>
</table>`
});

let app = new Vue({
    el: "#app",
    data: {
        tasks: []
    },
    methods: {
        del(index) {
            this.tasks.splice(index, 1);
            localStorage.setItem('tasks', this.tasks);
        },
        add(task) {
            let taskObj = new Task(task.taskText, task.taskCategory, task.taskEndDate, task.completed);
            this.tasks.push(taskObj);
            var arr = [];
            for (var i = 0; i < this.tasks.length; i++) {
                arr.push(this.tasks[i]);
            }

            localStorage.setItem('tasks', JSON.stringify(arr));
        },
    },
    created() {
        let storageTasks = localStorage.getItem('tasks');
        if (!storageTasks) {
            this.tasks = [];
        } else {
            console.log("!!!" + storageTasks);
            console.log("?????" + JSON.parse(storageTasks));
            this.tasks = JSON.parse(storageTasks);
        }
    }
});
