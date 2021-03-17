import Vue from 'vue'

export default Vue.extend({
    transition: {
        name: 'slide-bottom',
        beforeEnter()
        {
            console.log('hereee')
        }
    },
    props: {
        pageName: {
            required: true,
            type: String,
            default: 'pageName'
        },
    },

})