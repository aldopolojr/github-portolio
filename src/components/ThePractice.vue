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
                paragraph: 'In this section I demonstrate projects that are based on already exisiting websites. The objective here is to simply focus on the development stage and not the design part. A perfect oppertunity to exercise and improve certain skills.',
                works: [
                    { 
                        title: 'Aside Theme', 
                        url: { git: 'https://github.com/aldopolojr/aside-theme', demo: 'https://aldopolojr.github.io/aside-theme/' }, 
                        date: 'March 2, 2021', 
                        tags: [{ name: 'HTML5', type: 'html' }, { name: 'CSS3', type: 'css' }, { name: 'Sass', type: 'css' }, { name: 'CSS grid', type: 'css' }, { name: 'responsive design', type: 'css' }, { name: 'JavaScript', type: 'js' }],
                    },
                    { 
                        title: 'Venture', 
                        url: { git: 'https://github.com/aldopolojr/venture', demo: 'https://aldopolojr.github.io/venture/' }, 
                        date: 'March 1, 2021', 
                        tags: [{ name: 'HTML5', type: 'html' }, { name: 'CSS3', type: 'css' }, { name: 'Sass', type: 'css' }, { name: 'parallax scroll', type: 'css' }, { name: 'animations', type: 'css' }, { name: 'flexbox', type: 'css' }, { name: 'responsive design', type: 'css' }, { name: 'JavaScript', type: 'js' }],
                    },
                    { 
                        title: 'Magazine-Pro', 
                        url: { git: 'https://github.com/aldopolojr/magazine-pro', demo: 'https://aldopolojr.github.io/magazine-pro/' }, 
                        date: 'December 4, 2020', 
                        tags: [{ name: 'HTML5', type: 'html' }, { name: 'semantic layout', type: 'html'}, { name: 'BEM', type: 'html' }, { name: 'CSS3', type: 'css' }, { name: 'Sass', type: 'css' }, { name: 'flexbox', type: 'css' }, { name: 'responsive design', type: 'css' }, { name: 'JavaScript', type: 'js' }],
                    },
                    { 
                        title: 'Admin-Panel', 
                        url: { git: 'https://github.com/aldopolojr/admin-panel', demo: 'https://aldopolojr.github.io/admin-panel' }, 
                        date: 'Oktober 15, 2020', 
                        tags: [{ name: 'HTML5', type: 'html' }, { name: 'semantic layout', type: 'html'}, { name: 'CSS3', type: 'css' }, { name: 'Sass', type: 'css' }, { name: 'css grid', type: 'css' }, { name: 'responsive design', type: 'css' }, { name: 'JQuery', type: 'js' }],
                    },
                ],
            },
        };
    },
}
</script>