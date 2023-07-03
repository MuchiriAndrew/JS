const app = Vue.createApp({
    data(){
        return{
            title:"The Final Empire",
            author: "Brandon",
            age:"45"
        }
    },

    methods : {
        changeTitle(title){
            // this.title = 'Words of radiance'
            this.title = title
        }
    }
})

app.mount('#app')