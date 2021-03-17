import Vue from 'vue'
import InfiniteLoading from 'vue-infinite-loading';

export default {
    // async asyncData({ $http }: any)
    // {
    //     const data = await $http.$get('/api/projects');
    //     return { projects: data }
    // },
    transition: 'default',
    components: {
        InfiniteLoading,
    },
    data()
    {
        let development = process.env.NODE_ENV !== 'production'

        return {
            baseURL: development ? 'http://localhost:3000' : 'https://dereckson.dev',

            projects: [
                {
                    id: 1,
                    title: 'Fafá de Belém',
                    description: 'Site Novo CD Fafá de Belém.',
                    photo: [{ img01: '/fafa-de-belem/foto-01.jpg', img02: '/fafa-de-belem/foto-02.jpg' }]
                },
                {
                    id: 2,
                    title: 'Tintas Iquine',
                    description: '',
                    photo: [{ img01: '/iquine/foto-01.jpg', img02: '/iquine/foto-02.jpg' }]
                },
                {
                    id: 3,
                    title: 'Globo Imprensa',
                    description: '',
                    photo: [{ img01: '/globo-imprensa/foto-01.jpg', img02: '/globo-imprensa/foto-02.jpg' }]
                },
                {
                    id: 4,
                    title: 'EAD Uninassau - Grupo Ser Educacional',
                    description: '',
                    photo: [{ img01: '/ead-gruponassau/foto-01.jpg', img02: '/ead-gruponassau/foto-02.jpg' }]
                },
                {
                    id: 5,
                    title: 'Campeonato de CS - Uninassau',
                    description: '',
                    photo: [{ img01: '/campeonato-nassau-gruposer/foto-01.jpg', img02: '/campeonato-nassau-gruposer/foto-02.jpg' }]
                },
                {
                    id: 6,
                    title: 'CEPE Editora',
                    description: '',
                    photo: [{ img01: '/cepe-editora/foto-01.jpg', img02: '/cepe-editora/foto-02.jpg' }]
                },
                {
                    id: 7,
                    title: 'Feec BR',
                    description: 'HTML5 / CSS 3, jQuery',
                    photo: [{ img01: '/feec-br/foto-01.jpg', img02: '/feec-br/foto-02.jpg' }]
                },
                {
                    id: 8,
                    title: 'Globo Criança Esperança',
                    description: '',
                    photo: [{ img01: '/globo-crianca-esperanca/foto-01.jpg' }]
                },
                {
                    id: 9,
                    title: 'Green Soluções',
                    description: '',
                    photo: [{ img01: '/green-solucoes/foto-01.jpg', img02: '/green-solucoes/foto-02.jpg' }]
                },
                {
                    id: 10,
                    title: 'Prêmio de Mídia Globo Nordeste - 2014',
                    description: '',
                    photo: [{ img01: '/premio-de-midia-2014/foto-01.jpg', img02: '/premio-de-midia-2014/foto-02.jpg' }]
                },
                {
                    id: 11,
                    title: 'Prêmio de Mídia Globo Nordeste - 2015',
                    description: '',
                    photo: [{ img01: '/premio-de-midia-2015/foto-01.jpg', img02: '/premio-de-midia-2015/foto-02.jpg' }]
                },
            ]
        }
    },
    methods: {
        // infiniteHandler($state: any)
        // {
        // [WiP] Não utilizado, apenas quando for fazer pedido a API.
        //     setTimeout(() =>
        //     {
        //         let temp = [];
        //         for (let i = this.portfolioList.length + 1; i <= this.portfolioList.length + 6; i++)
        //         {
        //             temp.push(i);
        //         }
        //         let tempArray = [...this.portfolioList, ...temp];
        //         this.portfolioList = tempArray;
        //         $state.loaded();
        //     }, 1000);
        // },
    },
    mounted()
    {
        // console.log(process.env.API_URL)
    },
}