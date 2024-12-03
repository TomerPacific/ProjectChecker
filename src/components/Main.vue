<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { type WebsiteStatus } from '../models/website_status'
import { type WebsiteStatusResponse } from '../models/website_status_response'
const BASE_URL = 'https://project-checker.onrender.com/checkStatus'
defineProps(['msg'])
const isLoaded = ref(false)
const statuses = ref([])

function extractServiceNameFromUrl(endpoint: string): string {
  const splitEndpoint = endpoint.split('/')
  const endpointName = splitEndpoint[splitEndpoint.length - 2]
  return endpointName
}

function getWebsitesStatus() {
  return new Promise<Array<WebsiteStatus>>((resolve, reject) => {
    fetch(BASE_URL)
      .then((result) => result.json())
      .then((data: WebsiteStatusResponse) => {
        resolve(data.websites)
      })
      .catch((error) => {
        statuses.value.push({
          url: 'Error',
          status: error,
        })
        reject()
      })
  })
}

onMounted(() => {
  getWebsitesStatus()
    .then((websites: Array<WebsiteStatus>) => {
      statuses.value = websites
      isLoaded.value = true
    })
    .catch(() => {
      isLoaded.value = false
    })
})
</script>

<template>
  <div class="hello">
    <h1>{{ msg }} <img id="logo" src="../assets/logo.png" /></h1>
    <div v-if="!isLoaded" class="loader"></div>
    <ul v-if="isLoaded" class="projectsList">
      <li v-for="website in statuses" :key="website.name">
        <a v-bind:href="website.name" target="_blank">{{
          extractServiceNameFromUrl(website.name)
        }}</a>
        <span class="websiteStatus" v-if="website.status === 200">&#9989;</span>
        <span class="websiteStatus" v-else>&#10060;</span>
      </li>
    </ul>
  </div>
</template>

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

.loader {
  margin: auto;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
