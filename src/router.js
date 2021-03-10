import { createWebHistory, createRouter } from 'vue-router';
import TheApplications from './components/TheApplications.vue';
import ThePractice from './components/ThePractice.vue';
import TheTraining from './components/TheTraining.vue';
import TheTutorials from './components/TheTutorials.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/applications' },
        { path: '/applications', component: TheApplications },
        { path: '/practice', component: ThePractice },
        { path: '/training', component: TheTraining },
        { path: '/tutorials', component: TheTutorials },
        { path: '/:notFound(.*)', redirect: '/applications' },
    ],
});

export default router;