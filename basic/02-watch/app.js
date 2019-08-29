const app = new Vue({
    el: "#app",
    data: {
        question: "",
        answer: "Please type your question"
    },
    watch: {
        question: function () {
            const randomNumber = Math.round((Math.random()));
            if (randomNumber === 0) {
                this.answer = "no";
            } else {
                this.answer = "yes";
            }
            
        }
    }
});
