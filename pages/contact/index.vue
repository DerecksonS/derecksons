<template>
    <section class="container">
        <aside class="aside-container">
            <Menu></Menu>
            <Breadcrumbs 
                page-name="Contact me">
            </Breadcrumbs>
        </aside>
        <main class="main-container contact">
            <section class="grid-1-column">
                <section class="contact-form">
                    <h1>Contact me</h1>
                    <p>For any question, or just to say hello, get in touch and contact us.</p>
                    <form method="POST"
                        id="contact_me"
                        name="contact"
                        data-netlify="true"
                        action="/contact/success/"
                        data-netlify-honeypot="bot-field"
                        enctype="multipart/form-data">
                        <input name="form-name" value="contact" type="hidden" />
                        <label for="name">
                            <span>Full name</span>
                            <input type="text" name="name" v-model="name">
                        </label>
                        <label for="email">
                            <span>Email</span>
                            <input type="email" name="email" v-model="email">
                        </label>
                        <label for="message">
                            <span>Your message...</span>
                            <textarea name="message" v-model="message"></textarea>
                        </label>
                        <div>
                            <div data-netifly-recaptcha="true"></div>
                        </div>
                        <button :class="[!hasValidFields ? 'disabled' : '']" 
                                :disabled="!hasValidFields">
                            Send Message
                        </button>
                    </form>
                </section>
            </section>
        </main>
    </section>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./contact.scss"></style>