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
                    <client-only>
                        <form method="POST"
                            id="contactMeForm"
                            name="contactForm"
                            data-netlify="true"
                            action="/contact/success/"
                            data-netlify-recaptcha="true" 
                            data-netlify-honeypot="bot-field">
                            <input value="contactForm" name="contact" type="hidden" />
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
                            <button type="submit" 
                                    :class="[!hasValidFields ? 'disabled' : '']" 
                                    :disabled="!hasValidFields">
                                Send Message
                            </button>
                        </form>
                    </client-only>
                </section>
            </section>
        </main>
    </section>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./contact.scss"></style>