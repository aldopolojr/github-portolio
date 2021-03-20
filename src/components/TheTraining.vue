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
                paragraph: 'In this section I display all sorts of projects made from online courses I engaged. The ambition is to learn and improve new theories of a particular subject.',
                works: [
                    { 
                        title: 'Mapty App', 
                        url: { git: 'https://github.com/aldopolojr/mapty-app', demo: 'https://aldopolojr.github.io/mapty-app/' }, 
                        date: 'March 20, 2021', 
                        tags: [{ name: 'JavaScript', type: 'js' }, { name: 'OOP', type: 'js' }, { name: 'geolocation', type: 'js' }, { name: 'localstorage', type: 'js' }, { name: 'Leaflet library', type: '' },],
                    },
                    { 
                        title: 'Bankist (app)', 
                        url: { git: 'https://github.com/aldopolojr/bankist-app', demo: 'https://aldopolojr.github.io/bankist-app/' }, 
                        date: 'March 17, 2021', 
                        tags: [{ name: 'JavaScript', type: 'js' }, { name: 'array methods', type: 'js' }, { name: 'dates', type: 'js' }, { name: 'internationalizing', type: 'js' }, { name: 'timer', type: 'js' }],
                    },
                    { 
                        title: 'Bankist (web)', 
                        url: { git: 'https://github.com/aldopolojr/bankist-web', demo: 'https://aldopolojr.github.io/bankist-web/' }, 
                        date: 'March 3, 2021', 
                        tags: [{ name: 'JavaScript', type: 'js' }, { name: 'DOM', type: 'js' }, { name: 'events', type: 'js' }, { name: 'Intersection Observer API', type: 'js' }, { name: 'modal', type: '' }, { name: 'tabs', type: '' }, { name: 'slider', type: '' }, { name: 'scroll', type: '' }, { name: 'lazy loading', type: '' }],
                    },
                    { 
                        title: 'Basic Modal', 
                        url: { git: 'https://github.com/aldopolojr/basic-modal', demo: 'https://aldopolojr.github.io/basic-modal/' }, 
                        date: 'December 15, 2020', 
                        tags: [{ name: 'JavaScript', type: 'js' }, { name: 'DOM', type: 'js' }, { name: 'events', type: 'js' }, { name: 'modal', type: '' }],
                    },
                    { 
                        title: 'Pig Game', 
                        url: { git: 'https://github.com/aldopolojr/pig-game', demo: 'https://aldopolojr.github.io/pig-game/' }, 
                        date: 'December 14, 2020', 
                        tags: [{ name: 'JavaScript', type: 'js' }, { name: 'DOM', type: 'js' }, { name: 'events', type: 'js' }, { name: 'game', type: '' }],
                    },
                    { 
                        title: 'Guess My Number', 
                        url: { git: 'https://github.com/aldopolojr/guess-my-number', demo: 'https://aldopolojr.github.io/guess-my-number/' }, 
                        date: 'December 7, 2020', 
                        tags: [{ name: 'JavaScript', type: 'js' }, { name: 'DOM', type: 'js' }, { name: 'events', type: 'js' }, { name: 'game', type: '' }],
                    },
                    { 
                        title: 'Canvas Introduction',
                        url: { git: 'https://github.com/aldopolojr/canvas-introduction', demo: 'https://aldopolojr.github.io/canvas-introduction/' }, 
                        date: 'November 28, 2020', 
                        tags: [{ name: 'JavaScript', type: 'js' }, { name: 'canvas', type: 'js' }, { name: 'animation', type: 'js' }, { name: 'interactive', type: '' }],
                    },
                    { 
                        title: 'Sortable Drag & Drop',
                        url: { git: 'https://github.com/aldopolojr/drag-and-drop', demo: 'https://aldopolojr.github.io/drag-and-drop/' }, 
                        date: 'November 27, 2020', 
                        tags: [{ name: 'JavaScript', type: 'js' }, { name: 'drag & drop', type: 'js' }],
                    },
                ],
            },
        };
    },
}
</script>