const app = new Vue({
    el: "#app",
    data: {
        message: "hello world!",
    },
    methods: {
        nowMethod: function() {
            return Date.now();
        }
    },  
    computed: {
        nowComputed: function() {
            return Date.now();
        }
    },
});
