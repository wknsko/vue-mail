import { createRouter, createWebHistory } from "vue-router";
import Login from './pages/MyLogin';
import Forget from './pages/ForgetPassword';
import Dashboard from './pages/MailDashboard';
import Mail from './pages/MailPage'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: Login, alias: '/' },
        { path: '/forget', component: Forget },
        { path: '/dashboard', component: Dashboard },
        { path: '/mail', component: Mail }
    ]
});

export default router