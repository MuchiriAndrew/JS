const app = Vue.createApp({
    data(){
        return{
            showBooks:true,
            url:"http://www.thentninja.co.uk",

            books : [
                {title: 'name of the wind', author: 'patrick rothfuss', image:"assets/1.jpg", isFav:true},
                {title: 'the way of kings', author: 'brandon sanderson', image:'assets/2.jpg', isFav:false},
                {title: 'the final empire', author: 'Andrew Muchiri', image:"assets/3.jpg", isFav:true},
            ]
        }
    },

    methods : {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type);

            if(data) {
                console.log(data);
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(item) {
            item.isFav = !item.isFav
        }



    }
})

app.mount('#app')