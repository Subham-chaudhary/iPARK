// this is an option-api scripting style easy to understand and for small projects

new Vue({
    el: '#app1',
    data: {
        msg1: '',
        msd:cityData,
        message: 'You loaded this page on ' + new Date().toLocaleString(),
       
    },
    template:  ' <div>{{msd}}</br><p>{{msg1}}</p><input v-model="msg1"> </br><span v-bind:title="message">Hover your mouse over me for a few seconds to see my dynamically bound title!</span></div>'
    


});

new Vue({
    el: '#app2',
    data: {
        msg2: 'bro',
        bool: true
    },
    methods: {
        hide: function () {

            this.bool = !this.bool
        }

    }
}
);

new Vue({
    el: '#app3',
    data() {
        return {
            input: '',
            city: cityData,
            
            
        };
    },
    computed: {
        filteredList() {
            if (this.city && this.city.length > 0) {
                return this.city.filter((cityData) =>
                    cityData.toLowerCase().includes(this.input.toLowerCase())
                );
            } else {
                return [];
            }
        },
    },
    template: '<div><p>{{input ? "input": "no input"}}</p><input type="text" v-model="input" placeholder="Search cities" /><div class="item city" v-for="city in filteredList" v-if="input" :key="city"> <p>{{ city }}</p></div><div class="item error" v-if="input && filteredList.length == 0"><p>No results found!</p></div></div>'
    
});