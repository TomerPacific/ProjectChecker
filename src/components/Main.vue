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
    Promise.all(projectEndpoints.map((endpoint) => new Promise((resolve, reject) => {
      fetch(`${BASE_URL}websiteStatus?url=${endpoint}`)
        .then((response) => response.json())
        .then((data) => {
          if (Object.prototype.hasOwnProperty.call(data, 'website')
      && Object.prototype.hasOwnProperty.call(data, 'websiteStatus')) {
            that.statuses.push({
              name: data.website,
              status: data.websiteStatus,
            });
            resolve();
          } else {
            that.statuses.push({
              name: 'Error',
              status: 'No information was received from the server',
            });
            resolve();
          }
          reject();
        });
    })))
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
