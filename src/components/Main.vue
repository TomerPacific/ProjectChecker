<template>
  <div class="hello">
    <h1>{{ msg }} <img id="logo" src="../assets/logo.png" /> </h1>
    <Loader v-if="isLoading"/>
    <ul v-if="!isLoading" class="projectsList">
      <li v-for="website in statuses" :key="website.name">
        <a v-bind:href="website.name" target="_blank">{{extractServiceNameFromUrl(website.name)}}</a>
        <span class="websiteStatus" v-if="website.status === 200">&#9989;</span>
        <span class="websiteStatus" v-else>&#10060;</span>
      </li>
    </ul>
  </div>
</template>

<script>

import Loader from './Loader.vue';

const BASE_URL = 'https://project-checker-tomerpacific.herokuapp.com/checkStatus';

export default {
  components: { Loader },
  name: 'Main',
  props: {
    msg: String,
  },
  data() {
    return {
      statuses: [],
      message: '',
      isLoading: true,
    };
  },
  created() {
    this.getWebsitesStatus()
      .then(() => {

      })
      .catch(() => {

      });
  },
  methods: {
    getWebsitesStatus() {
      return new Promise((resolve, reject) => {
        this.isLoading = false;
        fetch(BASE_URL)
          .then((result) => result.json())
          .then((data) => {
            this.statuses = data.websites;
            resolve();
          })
          .catch((error) => {
            this.statuses.push({
              name: 'Error',
              status: error,
            });
            reject();
          });
      });
    },
    extractServiceNameFromUrl(endpoint) {
      const splitEndpoint = endpoint.split('/');
      const endpointName = splitEndpoint[splitEndpoint.length - 2];
      return endpointName;
    },
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
  display: block;
  margin: 10px 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  color: black;
}

#logo {
  width: 25px;
  height: 25px;
}

.websiteStatus {
  margin-left: 1%;
}

</style>
