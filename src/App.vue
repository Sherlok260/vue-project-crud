<template>
  <nav>
    <router-link class="get" :to="{name: 'get'}">GET</router-link>
    <router-link class="put" :to="{name: 'put'}">PUT</router-link>
    <router-link class="post" :to="{name: 'post'}">POST</router-link>
    <router-link class="delete" :to="{name: 'delete'}">DELETE</router-link>
  </nav>
  <router-view/>
</template>

<style scoped>
.home {
  background-color: red;
}
a {
  position: relative;
  color: black;
  border-radius: 5px;
  margin-left: 15px;
  margin-right: 15px;
  padding: 10px;
  text-decoration: none;
}
.get {
  background-color: dodgerblue;
}
.delete {
  background-color: red;
}
.put {
  background-color: orange;
}
.post {
  background-color: chartreuse;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  margin: auto;
  width: 500px;
  background-color: darkgray;
  border-radius: 5px;
  /* border: 2px solid black; */
  padding: 30px;
  margin-bottom: 20px;
  justify-content: center;

}

nav a {
  font-weight: bold;
  color: black;
}

nav a.router-link-exact-active {
  color: white;
}
</style>
