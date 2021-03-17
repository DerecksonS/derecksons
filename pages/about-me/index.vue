<template>
    <section class="container">
        <aside class="aside-container">
            <Menu></Menu>
            <Breadcrumbs 
                page-name="about me">
            </Breadcrumbs>
        </aside>
        <main class="main-container about-me">
            <section class="grid-3-columns">
                <section class="column">
                    <figure><img :src="`${baseURL}/img/content/img-foto-dereckson-santana.jpg`"></figure>
                    <h1>
                        I am a Frontend Developer and tech lead with a vast experience in CSS3 and JavaScript, dedicated and enthusiastic with a strong technical knowledge and education. 
                        With more than 10 years of experience working as a Frontend Developer, I have a significant experience with multiple computer languages, including JavaScript, Typescript, CSS3, HTML5. 
                    </h1>
                </section>
                
                <section class="column">
                    <figure><img :src="`${baseURL}/img/content/img-foto-02-dereckson-santana.png`"></figure>
                    <h1>
                        Nowadays I work with VueJS, Typescript, Webpack and SCSS. <br>
                        More recently, I have been also expanding my knowledge into GraphQL world with a strong desire to work in future projects where I can apply my integrate experience.
                    </h1>
                </section>

                <section class="column education">
                    <h2>Education</h2>
                    <div class="education-item">
                        <h3>Software Developer</h3>
                        <h4>Rumos Academy -  Portugal</h4>
                        <p>The Academy of Software Development intends to prepare complete professionals, capable of responding to the growing need of the market to find resources in the development area.</p>
                    </div>
                    <div class="education-item">
                        <h3>Web Design</h3>
                        <h4>LSD - Lisbon School of Design - Portugal</h4>
                        <p>Creation of websites and other graphic projects for digital devices. </p>
                    </div>
                    <div class="education-item">
                        <h3>Javascript Course ES5/ES6</h3>
                        <h4>FLAG - Portugal</h4>
                        <p>Extension Course of new features available on ES5/ES6.</p>
                    </div>
                    <div class="education-item">
                        <h3>Postgraduate Design Web apps</h3>
                        <h4>Unibratec Universities - Recife, Brazil</h4>
                        <p>I learned how to build Web Apps and studied the technologies that existed at the time, to develop the most modern applications.</p>
                    </div>
                    <div class="education-item">
                        <h3>Graduate Graphic Design</h3>
                        <h4>Unibratec Universities - Recife, Brazil</h4>
                        <p>The design student looking for to learn something he will have professional prominence and job opportunities.</p>
                    </div>
                    
                    
                </section>
            </section>
        </main>
    </section>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./about-me.scss"></style>