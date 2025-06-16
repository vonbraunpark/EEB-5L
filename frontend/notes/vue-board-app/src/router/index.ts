import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import VueBoardList from "../pages/list/VueBoardList.vue";
// import VueBoardRegister from "../page/VuetifyBoardRegister.vue"
// import VueBoardRead from "../page/VuetifyBoardRead.vue"
// import VueBoardModify from "../page/VuetifyBoardModify.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/list'
    },
    {
        path: '/list',
        name: 'VueBoardList',
        component: VueBoardList,
    },
    // {
    //     path: '/vuetify-typescript-board-app/register',
    //     name: 'VueBoardRegister',
    //     component: VueBoardRegister,
    // },
    // {
    //     path: '/vuetify-typescript-board-app/read/:boardId',
    //     name: 'VueBoardRead',
    //     components: { default: VueBoardRead },
    //     props: { default: true },
    // },
    // {
    //     path: '/vuetify-typescript-board-app/modify/:boardId',
    //     name: 'VueBoardModify',
    //     components: { default: VueBoardModify },
    //     props: { default: true },
    // },
]

const router = createRouter({
    history: createWebHistory('/vue-board/'),
    routes,
})

export default router