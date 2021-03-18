<template>
    <section class="container">
        <aside class="aside-container">
            <Menu></Menu>
        </aside>
        <main class="main-container contact">
            <section class="grid-1-column">
                <section class="success-form">
                    <h1>Your message has been successfully sent!</h1>
                    <nuxt-link to="/">
                        Go home
                    </nuxt-link>
                </section>
            </section>
        </main>
    </section>
</template>
<style lang="scss">
    .success-form {
        text-align: center;
        h1 {
            @include title-page;
        }
        a {
            height: 45px;
            line-height: 45px;
            margin-top: 20px;
            padding: 0 35px;
            font-weight: 400;
            text-transform: uppercase;
            @include theme('background-color', $colorReverse);
            @include theme('color', $backgroundColor);
            display: inline-block;
            text-decoration: none;
            border-radius: 5px;
            border: 0;
            transition: background 0.3s ease;
            cursor: pointer;
            
            &:hover{
                background: #f2f2f2;
            }
        }
    }
</style>