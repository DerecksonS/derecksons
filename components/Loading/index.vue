<template lang="html">
    <section v-if="loading" class="loading">
        <div class="logo-loading">
            <span>Loading</span>
        </div>
    </section>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  // transition: 'slide-bottom',
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
});
</script>

<style lang="scss" src="./loading.scss"></style>