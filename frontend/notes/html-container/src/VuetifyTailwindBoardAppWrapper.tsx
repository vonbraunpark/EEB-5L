import React, { useEffect, useRef } from "react";
import {mount} from "vuetify-tailwind-board-app/src/bootstrap.tsx";

const VuetifyTailwindBoardAppWrapper = () => {
    const vueModuleRef = useRef<HTMLDivElement>(null);
    const isMountedRef = useRef(false);
    const unmountRef = useRef<(() => void) | null>(null);

    useEffect(() => {
        const loadRemoteComponent = async () => {
            try {
                const { vuetifyBoardAppMount } = await import("vuetifyTailwindBoardApp/vuetifyBoardBootstrap");

                if (vueModuleRef.current && !isMountedRef.current) {
                    console.log("✅ Mounting Vue remote app");
                    // const unmount = await vuetifyBoardAppMount(vueModuleRef.current);
                    // unmountRef.current = unmount;
                    const unmount = await mount(vueModuleRef.current);
                    unmountRef.current = unmount;
                    isMountedRef.current = true;
                } else {
                    console.warn("❌ vueModuleRef가 없거나 이미 마운트됨");
                }

                loadRemoteComponent();
                console.log("Vuetify Board Remotes App ready: " + vueModuleRef)
            } catch (err) {
                console.error("❌ Remote Vue 앱 로딩 실패:", err);
            }
        };

        return () => {
            if (unmountRef.current) {
                console.log("🧹 Cleaning up: unmounting Vue remote app");
                unmountRef.current();
                unmountRef.current = null;
                isMountedRef.current = false;
            }
        };
    }, []);

    return <div ref={vueModuleRef} style={{ width: "100%", height: "100%" }} />;
};

export default VuetifyTailwindBoardAppWrapper;
