import React, { useEffect, useRef } from "react";

const VuetifyTailwindBoardAppWrapper = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    let vueAppInstance: any = null;

    useEffect(() => {
        let isMounted = true;
        import("vuetifyTailwindBoardApp/App")
            .then(({ mount, unmount }) => {
                if (containerRef.current && isMounted) {
                    vueAppInstance = mount(containerRef.current);
                }
            })
            .catch((err) => {
                console.error("Failed to load VuetifyTailwindBoardApp:", err);
            });

        return () => {
            isMounted = false;
            if (vueAppInstance && vueAppInstance.unmount) {
                vueAppInstance.unmount();
            }
        };
    }, []);

    return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default VuetifyTailwindBoardAppWrapper;
