Vue.component('item', {
    props: ['item'],
    template: '<li>{{ item.text }}</li>'
  })

const app = new Vue({
    el: "#app",
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    },
    created: function() {
        console.log("Vue component has been created")
    }
});
