import Vue from 'vue'

export default Vue.extend({
    transition: 'default',
    data()
    {
        return {
            name: '',
            email: '',
            message: '',
        }
    },
    computed: {
        hasValidFields(): boolean
        {
            let hasValidName = this.name && this.name.length >= 4 ? true : false;
            let hasValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email);
            let hasValidMsg = this.message && this.message.length >= 4 ? true : false;
            return hasValidName && hasValidEmail && hasValidMsg;
        }
    },
    methods: {
    },
})