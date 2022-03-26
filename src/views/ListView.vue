<template>
  <div>
    <ListItem :items="newsItems"></ListItem>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { fetchList, NewsItem } from '@/api';
import ListItem from '../components/ListItem.vue';

export default Vue.extend({
  components: {
    ListItem
  },
  data () {
    return {
      newsItems: [] as NewsItem[],
    };
  },
  methods: {
    async fetchListItems() {
      const response = await fetchList(this.$route.name);
      this.newsItems = response.data;
    },
  },
  created () {
    this.fetchListItems();
  }
})
</script>

<style>

</style>
