const app = new Vue({
    el: "#app",
    data: {
        message1: "hello world!",
        message2: 'You loaded this page on ' + new Date().toLocaleString(),
        seen: true,
        todos: [
            { text: "learn MongoDB" },
            { text: "learn Vue.js" },
            { text: "learn Vuetify"}
        ],
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    },
    methods: {
        reverseMessage: function() {
            this.message1 = reverse(this.message1);
        }
    },  
});
