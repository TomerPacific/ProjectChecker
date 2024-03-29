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

<script lang="ts">
import { defineComponent } from 'vue';
import Loader from './Loader.vue';
import { WebsiteStatus } from '../models/website_status';
import { WebsiteStatusResponse } from '../models/website_status_response';

const BASE_URL = 'https://project-checker.onrender.com/checkStatus';

export default defineComponent({
  name: 'MainView',
  components: {
    Loader,
  },
  props: {
    msg: String,
  },
  setup(props) {
    props.msg
  },
  data() {
    return {
      statuses: [] as Array<WebsiteStatus>,
      message: "" as string,
      isLoading: true as boolean,
    };
  },
  created() {
    this.getWebsitesStatus()
      .then((websites: Array<WebsiteStatus>) => {
        this.statuses = websites;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
      });
  },
  methods: {
    getWebsitesStatus() {
      return new Promise<Array<WebsiteStatus>>((resolve, reject) => {
        fetch(BASE_URL)
          .then((result) => result.json())
          .then((data: WebsiteStatusResponse) => {
            resolve(data.websites);
          })
          .catch((error) => {
            this.statuses.push({
              url: 'Error',
              status: error,
            });
            reject();
          });
      });
    },
    extractServiceNameFromUrl(endpoint: string): string {
      const splitEndpoint = endpoint.split('/');
      const endpointName = splitEndpoint[splitEndpoint.length - 2];
      return endpointName;
    },
  },
});
</script>

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
