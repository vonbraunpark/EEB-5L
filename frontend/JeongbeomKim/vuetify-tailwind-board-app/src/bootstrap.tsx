import { createApp, App as VueApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import 'vuetify/styles' // Vuetify의 기본 스타일
import '@mdi/font/css/materialdesignicons.css' // (선택) 아이콘 폰트

let app: VueApp | null = null

export async function mount(el: Element) {
    await loadFonts();

    if (app) {
        app.unmount(); // 기존 인스턴스 제거
        app = null;
    }

    app = createApp(App);
    app.use(vuetify);
    app.mount(el);
}

export function unmount() {
    if (app) {
        app.unmount()
        app = null
    }
}

const devRoot = document.getElementById('app')

if (devRoot) {
    // 로컬 개발 환경에서만 mount
    mount(devRoot)
}