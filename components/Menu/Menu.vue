<template>
    <section class="menu">
        <span :class="['menu-open', toggleMenu ? 'opened' : '' ]" 
                @click.prevent="toggleMenuBtn">
        </span>
        <Logo></Logo>
        <nav :class="[toggleMenu ? 'opened' : '' ]">
            <nuxt-link to="/about-me" title="About me">About me</nuxt-link>
            <nuxt-link to="/experience" title="Experience">Experience</nuxt-link>
            <nuxt-link to="/portfolio">Portfolio</nuxt-link>
            <nuxt-link to="/contact">Contact me</nuxt-link>
        </nav>
    </section>
</template>

<script lang="ts" src="./menu.ts"></script>
<style lang="scss" src="./menu.scss"></style>