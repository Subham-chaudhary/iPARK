// this is an option-api scripting style easy to understand and for small projects

new Vue({
    el: '#app1',
    data: {
        msg1: 'hello',
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]

    }


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
            input: "",
            city: [],
        };
    },
    computed: {
        filteredList() {
            return this.city.filter((city) =>
                city.toLowerCase().includes(this.input.toLowerCase())
            );
        },
    },

    created() {
        // Fetch the online json
        this.fetchCities();

    },
    methods: {

        async fetchCities() {
            try {

                const apiUrl = 'https://json.extendsclass.com/bin/ca7c6cea8359'; //json file api hosting
                const response = await fetch(apiUrl);
                // const data = await response.json();
                this.city = await response.json();
                // console.log(this.city);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        },
    },
});