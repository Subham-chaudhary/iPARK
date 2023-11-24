
new Vue({
    el: '#sidebars',
    data() {
        return{
            input:'',
            
            city_names: city_data,
    };},
    computed: {    },
    template: '<div class="sidebar-container"><div class="sidebar1"><input type="text" required="" autofocus="" placeholder="Search here" class="textinput input" v-model="input"/><ul class="search-list" v-for="city in city_names" v-if="input" :key="city"><li class="search-item"><span class="search-result">{{city.city}}</span><br>{{city.city_code}}</li></ul></div></div>',
  });

console.log("java on");
var map = L.map('map').setView([20.25040643798901, 85.80002362455312], 14);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(map);
var marker1 = L.marker([20.25040643798901, 85.80002362455312]).addTo(map);
marker1.bindTooltip("ITER, A:5 ").openTooltip();




