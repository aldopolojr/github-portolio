<template>
    <base-container>
        <base-overview :data="data"></base-overview>
    </base-container>
</template>

<script>
export default {
    data() {
        return {
            data: {
                paragraph: `In this section I proudly present my completly self made applications. Everything is build from scratch. Projects arise from subjects I've learned or simply ideas I've had.`,
                works: [
                    { 
                        title: 'GitHub Portfolio', 
                        url: { git: 'https://github.com/aldopolojr/github-portolio', demo: 'https://aldopolojr-github-portfolio.netlify.app/' }, 
                        date: 'March 10, 2021', 
                        tags: [{ name: 'Vue', type: 'vue' }, { name: 'Vue Router', type: 'vue' }, { name: 'responsive design', type: 'css' }, { name: 'Sass', type: 'css' }, { name: 'BEM', type: 'html' }, { name: 'pagination', type: '' }],
                    },
                    { 
                        title: 'Pokédex', 
                        url: { git: 'https://github.com/aldopolojr/pokedex', demo: 'https://aldopolojr-pokedex.netlify.app/' }, 
                        date: 'March 8, 2021', 
                        tags: [{ name: 'Vue', type: 'vue' }, { name: 'API', type: 'js' }, { name: 'responsive design', type: 'css' }, { name: 'modal', type: '' }],
                    },
                    { 
                        title: 'Rock Paper Scissors', 
                        url: { git: 'https://github.com/aldopolojr/rock-paper-scissors', demo: 'https://aldopolojr-rock-paper-scissors.netlify.app/' }, 
                        date: 'March 7, 2021', 
                        tags: [{ name: 'Vue', type: 'vue' }, { name: 'Vuex', type: 'vue' }, { name: 'Web Speech API', type: 'js' }, { name: 'responsive design', type: 'css' }, { name: 'game', type: '' }],
                    },
                ],
            },
        };
    },
}
</script>