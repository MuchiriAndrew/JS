<template>
  <div class="home">
    <h1>HomePage</h1>

    <PostList :posts="posts" />
    
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from "vue"

export default {
  name: 'HomeView',
  components: {
    PostList
  },
  setup() {

    const posts = ref([
      {title:'Welcome to the blog', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nemo deserunt eligendi doloremque dolore quibusdam maxime. Sit vero, tempora tenetur beatae iure quas praesentium. Consequatur voluptatum labore ullam nobis placeat fugiat provident tempora! Officia, cumque. Nobis, esse. Obcaecati natus, praesentium tempora nihil eaque accusantium, quos architecto ipsa doloremque fugiat, id dolore molestias recusandae est? Commodi nobis, tempore animi omnis sunt eos reiciendis odit placeat beatae assumenda quae accusamus eum quo voluptatem officiis ut amet dicta tenetur aut iste error, possimus nam? Debitis esse praesentium a, illo molestiae, eaque dolor architecto eligendi at ratione quasi numquam voluptate odio, in vero totam.', id: 1},
      {title:'Top 5 CSS Tips', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nemo deserunt eligendi doloremque dolore quibusdam maxime. Sit vero, tempora tenetur beatae iure quas praesentium. Consequatur voluptatum labore ullam nobis placeat fugiat provident tempora! Officia, cumque. Nobis, esse. Obcaecati natus, praesentium tempora nihil eaque accusantium, quos architecto ipsa doloremque fugiat, id dolore molestias recusandae est? Commodi nobis, tempore animi omnis sunt eos reiciendis odit placeat beatae assumenda quae accusamus eum quo voluptatem officiis ut amet dicta tenetur aut iste error, possimus nam? Debitis esse praesentium a, illo molestiae, eaque dolor architecto eligendi at ratione quasi numquam voluptate odio, in vero totam.', id: 2}
    ])
    

    return { posts }
  }
}
</script>
