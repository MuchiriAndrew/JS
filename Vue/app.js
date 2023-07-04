const app = Vue.createApp({  
    data(){
        return{
            showBooks:true,
            url:"http://www.thentninja.co.uk",

            books : [
                {id:1, title: 'name of the wind', author: 'patrick rothfuss', image:"assets/1.jpg", isFav:true},
                {id:2, title: 'the way of kings', author: 'brandon sanderson', image:'assets/2.jpg', isFav:false},
                {id:3, title: 'the final empire', author: 'Andrew Muchiri', image:"assets/3.jpg", isFav:true},
            ]
        }
    },

    methods : {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },

        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },

        
        computed: {
            filteredBooks() {
                return this.books.filter((book)=> book.isFav )
            }
        }
})

app.mount('#app')