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
                          id="contactMeForm"
                          name="contactForm"
                          action="/contact/success/"
                          data-netlify="true"
                          data-netlify-recaptcha="true" 
                          netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="Contact-me" />
                        <label>
                            <span>Full name</span>
                            <input type="text" name="Full name" v-model="name">
                        </label>
                        <label>
                            <span>Email</span>
                            <input type="email" name="Email" v-model="email">
                        </label>
                        <label>
                            <span>Your message...</span>
                            <textarea name="Your Message" v-model="message"></textarea>
                        </label>
                        <label>
                            <div data-netifly-recaptcha="true"></div>
                        </label>
                        <button type="submit" 
                                :class="[!hasValidFields ? 'disabled' : '']" 
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