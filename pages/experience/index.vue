<template>
    <section class="container">
        <aside class="aside-container">
            <Menu></Menu>
            <Breadcrumbs 
                page-name="Experience">
            </Breadcrumbs>
        </aside>
        <main class="main-container experience">
            <section class="grid-2-columns">
                <section class="column column-experience">
                    <h1>Working experience</h1>
                    <article class="column-experience-article">
                        <h2>Tech lead Frontend (2019 - actual)</h2>
                        <h3>Frotcom International</h3>
                        <p>As Frontend Technical Lead, I lead the development team, selecting the right tools and technologies to achieve SW Development goals. I am the liaison between SW Developers, SW Quality Assurance, Scrum Master and Product Management.</p>
                    </article>
                    <article class="column-experience-article">
                        <h2>Senior Frontend Developer (2018 - 2019)</h2>
                        <h3>Frotcom International</h3>
                        <p>I am part of a multifunctional team and my role is to design, code and modify Frotcom Software Applications, from layout to code according to the product specifications.</p>
                    </article>
                    <article class="column-experience-article">
                        <h2>Frontend Developer</h2>
                        <h3>Aubay Portugal (2017 - 2018)</h3>
                        <p>Implementation and maintenance of modern Single Page Applications, </p>
                    </article>
                    <article class="column-experience-article">
                        <h2>Frontend Developer</h2>
                        <h3>Fishy - Freelancer (2016 - 2017)</h3>
                        <p>Working remotely, developing projects in HTMl5, CSS3 and JavaScript, Angular, ES5, working with performance of web sites and google tests with semantics for SEO.</p>
                    </article>
                    <article class="column-experience-article">
                        <h2>Team Leader Frontend Developer</h2>
                        <h3>Fishy - (2015 - 2016)</h3>
                        <p>From January/15 I started to Front-end team leader, at the same time, I continued to develop projects in HTML5, CSS3 and JavaScript, Angular, ES5, working with performance of web sites and google tests with semantics for SEO.</p>
                    </article>
                    <article class="column-experience-article">
                        <h2>Frontend Developer</h2>
                        <h3>Fishy - (2011 - 2014)</h3>
                        <p>Learned and developed projects in HTML5, CSS3, JavaScript, Angular 1.5, Gulp, TweenMax, and other frameworks.</p>
                    </article>
                </section>
                <section class="skill-and-client">
                    <section class="column skill-area">
                        <h1>Skills</h1>
                        <article class="column-skills-article">
                            <p>I love writing code in a challenging environment with an emphasis on using best practices to develop high quality software requirements.</p>
                            <p>I enjoy learning new technologies and sharing findings with the team.</p>
                            <ul>
                                <li><img :src="`${baseURL}/img/layout/icon-html5.png`" alt=""></li>
                                <li><img :src="`${baseURL}/img/layout/icon-css3.png`" alt=""></li>
                                <li><img :src="`${baseURL}/img/layout/icon-javascript.png`" alt=""></li>
                                <li><img :src="`${baseURL}/img/layout/icon-nodejs.png`" alt=""></li>
                                <li><img :src="`${baseURL}/img/layout/icon-typescript.png`" alt=""></li>
                                <li><img :src="`${baseURL}/img/layout/icon-github.png`" alt=""></li>
                                <li><img :src="`${baseURL}/img/layout/icon-azure.png`" alt=""></li>
                                <li><img :src="`${baseURL}/img/layout/icon-aws.png`" alt=""></li>
                            </ul>       
                        </article>
                    </section>

                    <section class="column client-area">
                        <article>
                            <h1>My Client</h1>
                            <h2>My recents projects.</h2>
                            <ul>
                                <li><img :src="`${baseURL}/img/content/img-logo-frotcom-dereckson-santana.png`" alt=""></li>
                                <li><img :src="`${baseURL}/img/content/img-logo-aubay-derekcson-santana.png`" alt=""></li>
                                <li><img :src="`${baseURL}/img/content/img-logo-fishy-dereckson-santana.png`" alt=""></li>
                            </ul>
                        </article>
                </section>
                </section>
                
                
            </section>
        </main>
    </section>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./experience.scss"></style>