import {createApp, h} from 'vue'
import type { App as VueApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import { aliases } from 'vuetify/iconsets/mdi'
import * as mdi from '@mdi/js'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'

import { createVuetify } from 'vuetify/lib/framework.mjs'
import { createPinia } from 'pinia'
// import router from './router'

let app: VueApp<Element> | null = null;

export const vueBoardAppMount = (el: string | Element, eventBus: any) => {
    console.log('mount 다시 하는 중이야')

    // Shadow DOM 만들기
    const container = typeof el === 'string' ? document.querySelector(el) : el;
    if (!container) return;

    // 이미 마운트되어 있으면 지움
    container.innerHTML = '';
    const shadowRoot = container.attachShadow({ mode: 'open' });

    // Vuetify 스타일 CDN 주입
    injectVuetifyCssIntoShadow(shadowRoot);

    // mount용 루트 만들기
    const shadowAppRoot = document.createElement('div');
    shadowRoot.appendChild(shadowAppRoot);

    loadFonts().then(() => {
        const vuetify = createVuetify({
            components: {
                ...components,
                ...labsComponents,
            },
            directives: {
                ...directives,
            },
            icons: {
                defaultSet: 'mdi',
                aliases,
                sets: {
                    mdi,
                },
            },
        });

        app = createApp({
            render: () => h(App, { eventBus }),
        });

        const pinia = createPinia();
        // app.use(vuetify).use(router).use(pinia);
        app.use(vuetify).use(pinia);
        app.provide('eventBus', eventBus);

        eventBus.on('vue-board-routing-event', (path: string) => {
            // if (router.currentRoute.value.fullPath !== path) {
            //     router.push(path);
            // }
        });

        app.mount(shadowAppRoot);
    });
};

// Shadow DOM용 Vuetify 스타일 주입
function injectVuetifyCssIntoShadow(shadowRoot: ShadowRoot) {
    const vuetifyLink = document.createElement('link');
    vuetifyLink.setAttribute('rel', 'stylesheet');
    vuetifyLink.setAttribute('href', 'https://cdn.jsdelivr.net/npm/vuetify@3.x/dist/vuetify.min.css');

    const mdiLink = document.createElement('link');
    mdiLink.setAttribute('rel', 'stylesheet');
    mdiLink.setAttribute('href', 'https://cdn.jsdelivr.net/npm/@mdi/font@7.x/css/materialdesignicons.min.css');

    shadowRoot.appendChild(vuetifyLink);
    shadowRoot.appendChild(mdiLink);
}

export const vueBoardAppUnmount = () => {
    if (app) {
        app.unmount();
        app = null;
    }
};

interface EventBus {
    listeners: { [eventName: string]: Function[] };
    on(eventName: string, callback: Function): void;
    off(eventName: string, callback: Function): void;
    emit(eventName: string, data: any): void;
}

const eventBus: EventBus = {
    listeners: {},

    on(eventName, callback) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback);
    },

    off(eventName, callback) {
        if (!this.listeners[eventName]) {
            return;
        }
        const index = this.listeners[eventName].indexOf(callback);
        if (index !== -1) {
            this.listeners[eventName].splice(index, 1);
        }
    },

    emit(eventName, data) {
        if (!this.listeners[eventName]) {
            return;
        }
        this.listeners[eventName].forEach((callback) => {
            callback(data);
        });
    },
}

const root = document.querySelector('#vue-board-app')

if (root) { vueBoardAppMount(root, eventBus) }