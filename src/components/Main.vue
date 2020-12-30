<template>
  <div class="hello">
    <h1>{{ msg }} <img id="logo" src="../assets/logo.png" /> </h1>
    <ul class="projectsList">
      <li v-for="website in statuses" :key="website.name">
        <a v-bind:href="website.name" target="_blank">{{extractServiceNameFromUrl(website.name)}}</a>
        <span class="websiteStatus" v-if="website.status === 200">&#9989;</span>
        <span class="websiteStatus" v-else>&#10060;</span>
      </li>
    </ul>
  </div>
</template>

<script>

const BASE_URL = 'https://project-checker-tomerpacific.herokuapp.com/';
const projectEndpoints = [
  'https://tomerpacific.github.io/firebaseScraper/',
  'https://tomerpacific.github.io/julOnSale/',
  'https://tomerpacific.github.io/Android-XML-Menu-Generator/',
  'https://tomerpacific.github.io/MediumArticleFetcher/',
  'https://tomerpacific.github.io/pull-request-presenter/',
  'https://tomerpacific.github.io/Portfolio/',
  'https://tomerpacific.github.io/resume-reviewer/',
  'https://tomerpacific.github.io/github-utils/',
];
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
    Promise.all(projectEndpoints.map((endpoint) => this.createFetchPromise(endpoint, that)))
      .then((results) => {
        console.log(results);
      })
      .catch((error) => {
        that.statuses.push({
          name: 'Error',
          status: error,
        });
      });
  },
  methods: {
    createFetchPromise(endpoint, vm) {
      return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}websiteStatus?url=${endpoint}`)
          .then((response) => response.json())
          .then((data) => {
            if (Object.prototype.hasOwnProperty.call(data, 'website')
      && Object.prototype.hasOwnProperty.call(data, 'websiteStatus')) {
              vm.statuses.push({
                name: data.website,
                status: data.websiteStatus,
              });
              resolve();
            } else {
              vm.statuses.push({
                name: 'Error',
                status: 'No information was received from the server',
              });
              resolve();
            }
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
