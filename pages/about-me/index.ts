import Vue from 'vue'

export default Vue.extend({
    transition: 'default',
    data()
    {
        let development = process.env.NODE_ENV !== 'production'
        return {
            baseURL: development ? 'http://localhost:3000' : 'https://dereckson.dev',
        }
    },
    mounted()
    {
    },
})