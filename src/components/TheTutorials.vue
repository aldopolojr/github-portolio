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
                paragraph: 'In this section I have small projects were I have copied exisiting code made by a tutor. The goal of tutorials is to gain new knowledge, improve existing skills and discover other development perspectives.',
                works: [
                    { 
                        title: '3D Navigation Bar Animation', 
                        url: { git: 'https://github.com/aldopolojr/3D-navigation-bar', demo: 'https://aldopolojr.github.io/3D-navigation-bar/' }, 
                        date: 'December 21, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'animation', type: 'css' }, { name: '3D', type: 'css' }],
                    },
                    { 
                        title: 'Responsive Image Gallery',
                        url: { git: 'https://github.com/aldopolojr/image-gallery', demo: 'https://aldopolojr.github.io/image-gallery/' }, 
                        date: 'December 20, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'flexbox', type: 'css' }],
                    },
                    { 
                        title: 'Sticky Section Scrolling Effect',
                        url: { git: 'https://github.com/aldopolojr/sticky-section', demo: 'https://aldopolojr.github.io/sticky-section/' }, 
                        date: 'December 20, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }],
                    },
                    { 
                        title: '3D Flip Card',
                        url: { git: 'https://github.com/aldopolojr/3D-flip-card', demo: 'https://aldopolojr.github.io/3D-flip-card/' }, 
                        date: 'December 19, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'animation', type: 'css' }, { name: '3D', type: 'css' }],
                    },
                    { 
                        title: 'Button Hover Effect',
                        url: { git: 'https://github.com/aldopolojr/button-hover', demo: 'https://aldopolojr.github.io/button-hover/' }, 
                        date: 'December 19, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'animation', type: 'css' }],
                    },
                    { 
                        title: 'Circular Progress Bar',
                        url: { git: 'https://github.com/aldopolojr/circular-progress-bar', demo: 'https://aldopolojr.github.io/circular-progress-bar/' }, 
                        date: 'December 18, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'SVG', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'animation', type: 'css' }],
                    },
                    { 
                        title: 'Grid Layout',
                        url: { git: 'https://github.com/aldopolojr/grid-layout', demo: 'https://aldopolojr.github.io/grid-layout/' }, 
                        date: 'December 18, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'CSS grid', type: 'css' }],
                    },
                    { 
                        title: 'Full Screen Video Background',
                        url: { git: 'https://github.com/aldopolojr/video-background', demo: 'https://aldopolojr.github.io/video-background/' }, 
                        date: 'December 17, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'video', type: '' }],
                    },
                    { 
                        title: 'Slideshow With Navigation Buttons',
                        url: { git: 'https://github.com/aldopolojr/slideshow', demo: 'https://aldopolojr.github.io/slideshow/' }, 
                        date: 'December 17, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'animation', type: 'css' }, { name: 'slider', type: '' }],
                    },
                    { 
                        title: 'Dropdown Menu Animation',
                        url: { git: 'https://github.com/aldopolojr/drop-down', demo: 'https://aldopolojr.github.io/drop-down/' }, 
                        date: 'December 16, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'animation', type: 'css' }, { name: 'JavaScript', type: 'js' }, { name: 'dropdown', type: '' }],
                    },
                    { 
                        title: 'Animated Eyes',
                        url: { git: 'https://github.com/aldopolojr/animated-eyes', demo: 'https://aldopolojr.github.io/animated-eyes/' }, 
                        date: 'December 16, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'JavaScript', type: 'js' }],
                    },
                    { 
                        title: '3D Buttons',
                        url: { git: 'https://github.com/aldopolojr/3D-buttons', demo: 'https://aldopolojr.github.io/3D-buttons/' }, 
                        date: 'December 15, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'animation', type: 'css' }, { name: '3D', type: 'css' }],
                    },
                    { 
                        title: 'Shining Text Animation',
                        url: { git: 'https://github.com/aldopolojr/shining-text', demo: 'https://aldopolojr.github.io/shining-text/' }, 
                        date: 'December 10, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'animation', type: 'css' }],
                    },
                    { 
                        title: 'Glowing Loader Ring',
                        url: { git: 'https://github.com/aldopolojr/glowing-ring', demo: 'https://aldopolojr.github.io/glowing-ring/' }, 
                        date: 'December 10, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'animation', type: 'css' }],
                    },
                    { 
                        title: 'Pure CSS Tabs',
                        url: { git: 'https://github.com/aldopolojr/css-tabs', demo: 'https://aldopolojr.github.io/css-tabs/' }, 
                        date: 'December 9, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'animation', type: 'css' },{ name: 'tabs', type: '' } ],
                    },
                    { 
                        title: 'Stacked Cards Hover',
                        url: { git: 'https://github.com/aldopolojr/stacked-cards-hover', demo: 'https://aldopolojr.github.io/stacked-cards-hover/' }, 
                        date: 'December 9, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'animation', type: 'css' }],
                    },
                    { 
                        title: 'Login and Registration Form',
                        url: { git: 'https://github.com/aldopolojr/login-and-registration-form', demo: 'https://aldopolojr.github.io/login-and-registration-form/' }, 
                        date: 'December 7, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'form', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'responsive design', type: 'css' }, { name: 'animation', type: 'css' }, { name: 'JavaScript', type: 'js' }],
                    },
                    { 
                        title: 'Card Hover',
                        url: { git: 'https://github.com/aldopolojr/card-hover', demo: 'https://aldopolojr.github.io/card-hover/' }, 
                        date: 'November 30, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'responsive design', type: 'css' }, { name: 'animation', type: 'css' }],
                    },
                    { 
                        title: 'Animated Responsive Navbar',
                        url: { git: 'https://github.com/aldopolojr/animated-navbar', demo: 'https://aldopolojr.github.io/animated-navbar/' }, 
                        date: 'November 30, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'responsive design', type: 'css' }, { name: 'animation', type: 'css' }, { name: 'JavaScript', type: 'js' }],
                    },
                    { 
                        title: 'Animated gradient background',
                        url: { git: 'https://github.com/aldopolojr/animated-gradient-bg', demo: 'https://aldopolojr.github.io/animated-gradient-bg/' }, 
                        date: 'November 29, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'animation', type: 'css' }],
                    },
                    { 
                        title: 'Curvy Background',
                        url: { git: 'https://github.com/aldopolojr/curvy-background', demo: 'https://aldopolojr.github.io/curvy-background/' }, 
                        date: 'November 29, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }],
                    },
                    { 
                        title: 'Sticky Navigation Bar',
                        url: { git: 'https://github.com/aldopolojr/sticky-navigation-bar', demo: 'https://aldopolojr.github.io/sticky-navigation-bar/' }, 
                        date: 'November 29, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'responsive design', type: 'css' }, { name: 'JavaScript', type: 'js' }, { name: 'sticky', type: '' }] 
                    },
                    { 
                        title: 'Account dropdown',
                        url: { git: 'https://github.com/aldopolojr/account-dropdown', demo: 'https://aldopolojr.github.io/account-dropdown/' }, 
                        date: 'November 28, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'JavaScript', type: 'js' }, { name: 'dropdown', type: '' }],
                    },
                    { 
                        title: 'Flat long shadow',
                        url: { git: 'https://github.com/aldopolojr/flat-long-shadow', demo: 'https://aldopolojr.github.io/flat-long-shadow/' }, 
                        date: 'November 28, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'JavaScript', type: 'js' }, { name: 'interactive', type: '' }],
                    },
                    { 
                        title: 'Sidebar Menu',
                        url: { git: 'https://github.com/aldopolojr/sidebar-menu', demo: 'https://aldopolojr.github.io/sidebar-menu/' }, 
                        date: 'November 26, 2020', 
                        tags: [{ name: 'HTML', type: 'html' }, { name: 'icons', type: 'html' }, { name: 'CSS', type: 'css' }, { name: 'transition', type: 'css' }, { name: 'sidebar', type: '' }],
                    },
                ],
            },
        };
    },
}
</script>