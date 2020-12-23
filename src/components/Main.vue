<template>
  <div class="hello">
    <h1>{{ msg }} <img id="logo" src="../assets/logo.png" /> </h1>
    <ul class="projectsList">
      <li v-for="website in statuses" :key="website">
          {{website.name + " | " + website.status}}
      </li>
    </ul>
  </div>
</template>

<script>

const BASE_URL = "https://project-checker-tomerpacific.herokuapp.com/"
export default {
  name: 'Main',
  props: {
    msg: String
  },
  data() {
    return {
      statuses: [],
      message: ""
    }
  },
  created() {
    let that = this;
    fetch(BASE_URL + "websiteStatus?url=https://tomerpacific.github.io/firebaseScraper/")
    .then(function(response) {
      if (Object.prototype.hasOwnProperty.call(response, 'website') &&
        Object.prototype.hasOwnProperty.call(response, 'websiteStatus')) {
          that.statuses.push({
            name: response.website,
            status: response.websiteStatus
          });
      }
    })
    .catch(function(error) {
      that.statuses.push({
            name: 'Error',
            status: error
          });
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#logo {
  width: 25px;
  height: 25px;
}

</style>
