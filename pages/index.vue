<template>
    <section class="container full-home">
        <aside class="aside-container">
            <Menu></Menu>
        </aside>
        <main class="main-container home">
            <h1>Dereckson Santana</h1>
            <section class="job-description">
                <h2>I am a Frontend Developer and tech lead with a vast experience in CSS3 and JavaScript.</h2>
                <nuxt-link to="about-me/cv" title="Dereckson Santana CV- Frontend Developer">Download CV</nuxt-link>
            </section>
        </main>
    </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  loading: true,
  data() {
    return {};
  },
  mounted() {
    
  },
});
</script>

<style lang="scss" src="./home.scss"></style>
