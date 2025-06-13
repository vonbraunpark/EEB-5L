import React, { useEffect, useRef } from "react";

const VuetifyTailwindBoardAppWrapper = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    let vueAppInstance: any = null;

    useEffect(() => {
        let cleanup: (() => void) | null = null;
        let isMounted = true;

        import("vuetifyTailwindBoardApp/App")
            .then(({ mount, unmount }) => {
                if (containerRef.current && isMounted) {
                    mount(containerRef.current).then((unmountFn) => {
                        cleanup = unmountFn;
                    });
                }
            })
            .catch((err) => {
                console.error("Failed to load VuetifyTailwindBoardApp:", err);
            });

        return () => {
            isMounted = false;
            if (cleanup) cleanup();
        };
    }, []);

    return <div ref={containerRef} style={{ width: "100%", height: "100%", all: "initial" }} />;
};

export default VuetifyTailwindBoardAppWrapper;
