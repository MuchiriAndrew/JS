<template>
  <h1>My first Vue App</h1>

  <p>Welcome...</p>

  <teleport to=".modals" v-if="showModal">
    <Modal  theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign Up</a>
        <a href="#">More info</a>
      </template>

      <h1>Ninja Giveaway</h1>
      <p>Grab your ninja swag for half price</p>
    </Modal>
  </teleport>


  <teleport to=".modals" v-if="showModal2" >
    <Modal  theme="sale" @close="toggleModal2">
      <template v-slot:links>
        <a href="#">Log Out</a>
        <a href="#">Learn More</a>
      </template>

      <h1>Subscribe To My Youtube Channel</h1>
      <p>Get my Course at 50% off</p>
    </Modal>
  </teleport>

  <button @click="toggleModal">Open Modal 1</button>
  <button @click="toggleModal2">Open Modal 2</button>
 
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components : {Modal},
  data() {
    return {
      title: "My first vue App",
      showModal: false,
      showModal2: false
    }
  }, 
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }, 
    toggleModal2(){
      this.showModal2 = !this.showModal2
    }


  }
}
</script>

<style>
#app, .modals{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
