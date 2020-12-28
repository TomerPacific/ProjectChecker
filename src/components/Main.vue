<template>
  <div class="hello">
    <h1>{{ msg }} <img id="logo" src="../assets/logo.png" /> </h1>
    <ul class="projectsList">
      <li v-for="website in statuses" :key="website.name">
        {{website.name + ' || ' + website.status}}
      </li>
    </ul>
  </div>
</template>

<script>

const BASE_URL = 'https://project-checker-tomerpacific.herokuapp.com/';
export default {
  name: 'Main',
  props: {
    msg: String,
  },
  data() {
    return {
      statuses: [],
      message: '',
    };
  },
  created() {
    const that = this;
    fetch(`${BASE_URL}websiteStatus?url=https://tomerpacific.github.io/firebaseScraper/`)
      .then((response) => response.json())
      .then((data) => {
        if (Object.prototype.hasOwnProperty.call(data, 'website')
      && Object.prototype.hasOwnProperty.call(data, 'websiteStatus')) {
          that.statuses.push({
            name: data.website,
            status: data.websiteStatus,
          });
        } else {
          that.statuses.push({
            name: 'Error',
            status: 'No information was received from the server',
          });
        }
      })
      .catch((error) => {
        that.statuses.push({
          name: 'Error',
          status: error,
        });
      });
  },
};
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
