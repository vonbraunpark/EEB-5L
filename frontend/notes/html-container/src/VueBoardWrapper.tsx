import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const VueBoardAppWrapper = () => {
    const vueModuleRef = useRef<HTMLDivElement>(null);
    const isMountedRef = useRef(false);
    const unmountRef = useRef<(() => void) | null>(null);

    const location = useLocation()

    useEffect(() => {
        console.log('preparing mount vuetify board remotes app')

        if (!isMountedRef.current) {
            const loadRemoteComponent = async () => {
                const { vueBoardAppMount  } = await import("vueBoardApp/bootstrap");
                vueBoardAppMount(vueModuleRef.current);
                isMountedRef.current = true;
            }

            loadRemoteComponent()
            console.log("Vuetify Board Remotes App ready: " + vueModuleRef)
        }

        return () => { };
    }, [])

    useEffect(() => {
        console.log('Vuetify Board 라우터 위치 바꿨어: ' + location.pathname)
        const handleNavigation = () => {
            console.log('handleNavigation()')
            if (location.pathname === "/vue-board") {
                console.log('라우터 변경')
            }
        };

        // 컴포넌트가 마운트될 때 호출되는 이벤트 핸들러 등록
        handleNavigation();
    }, [location]);

    return (
        <div>
            <div>
                <div style={{ position: 'relative' }} ref={vueModuleRef}/>
            </div>
        </div>
    )
};

export default VueBoardAppWrapper;
