import Vue from 'vue'

export default Vue.extend({
    transition: 'default',
    data()
    {
        return {
            name: '',
            email: '',
            message: '',
            sendingMessage: false,
            showSuccessMessage: false,
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
        // submitForm()
        // {
        //     this.sendingMessage = !this.sendingMessage;

        //     let data = {
        //         name: this.name,
        //         email: this.email,
        //         msg: this.message

        //     };

        //     (this as any).$axios.$post('/api/submit-form', data).then(() =>
        //     {
        //         this.sendingMessage = !this.sendingMessage;
        //         this.showSuccessMessage = !this.showSuccessMessage;
        //         setTimeout(() =>
        //         {
        //             this.showSuccessMessage = !this.showSuccessMessage;
        //         }, 3000);
        //     })
        // }
        async submitForm()
        {
            // this.submitting = true
            // this.$ga.event('submit', 'form', this.$i18n.locale)
            // this.error = false
            try
            {
                await (this as any).$axios.$post('/api/contact', {
                    name: this.name,
                    email: this.email,
                    msg: this.message
                });
                await new Promise(resolve => setTimeout(resolve, 2500))
            } catch (e)
            {
                console.error(e)
            }
        }
    },
})