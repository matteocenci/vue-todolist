const app = Vue.createApp ({
    data () {
        return {
            newToDo: '',


        }
    },

    methods: {
        addToDo() {
            if (this.newToDo.trim() !== '') {
                this.todos.push({ text: this.newToDo, done: false});
                this.saveTodo();
                this.newToDo = '';
            }
        },
        toggleToDo(index) {
            this.todos[index].done = !this.todos[index].done;
            this.saveTodo();
        },
        removeToDo(index) {
            this.todos(index, 1);
            this.saveToDo();
        },
        
    }
});
app.mount('#app');