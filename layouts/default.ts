import Vue from 'vue'

export default Vue.extend({
    mounted()
    {
        this.$nextTick(() =>
        {
            this.$nuxt.$loading.start();

            setTimeout(() => 
            {
                this.$nuxt.$loading.finish();
            }, 100);
        });
    },
});