import Vue from 'vue'

export default Vue.extend({
    data()
    {
        return {
            toggleMenu: false,
        }
    },
    methods: {
        toggleMenuBtn()
        {
            this.toggleMenu = !this.toggleMenu;
        }
    },
})