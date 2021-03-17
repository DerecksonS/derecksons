<template>
    <section class="container">
        <aside class="aside-container">
            <Menu></Menu>
            <Breadcrumbs 
                page-name="Portfolio">
            </Breadcrumbs>
        </aside>
        <main class="main-container portfolio">
            <section class="grid-3-columns">
                <article v-for="(project, i) in projects" :key="i">
                    <figure>
                        <img :src="`${baseURL}/img/content/projects${project.photo[0].img01 }`" :alt="project.title" :title="project.title">
                    </figure>
                </article>
                <!-- <infinite-loading @infinite="infiniteHandler"></infinite-loading> -->
            </section>
        </main>
    </section>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./portfolio.scss"></style>