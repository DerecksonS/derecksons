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
                    <form @submit.prevent="submitForm">
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
                        
                        <button type="submit" 
                                :class="[sendingMessage || !hasValidFields ? 'disabled' : '']" 
                                :disabled="sendingMessage || !hasValidFields">
                            Send Message
                        </button>
                        <span class="msg-success" v-if="showSuccessMessage">Your message has been successfully sent!</span>
                    </form>
                </section>
            </section>
        </main>
    </section>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./contact.scss"></style>