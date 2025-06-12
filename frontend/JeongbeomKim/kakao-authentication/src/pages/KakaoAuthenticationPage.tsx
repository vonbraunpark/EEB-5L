import React from "react";
import { Box, Typography } from "@mui/material";
import SocialLoginButton from "../ui/components/SocialLoginButton";

import {useNavigate} from "react-router-dom";
import env from "../env.ts";

const KakaoAuthenticationPage: React.FC = () => {
    // 우리가 Routes로 감싸놓은 Router 설정을 활용할 수 있게 지원함
    const navigate = useNavigate();

    const handleKakaoLogin = () => {
        const kakaoAuthenticationUrl = env.api.KAKAO_AUTHENTICATION_URL;
        // 팝업 형식의 로그인 창을 띄웁니다.
        const popup = window.open(kakaoAuthenticationUrl, '_blank', 'width=500,height=600');

        if (!popup) {
            alert('팝업 차단되어 있습니다. 팝업 허용 후 다시 시도하세요.');
            return;
        }

        const receiveMessage = (event: MessageEvent) => {
            console.log('📨 받은 메시지:', event.origin, event.data);

            // origin 검사 완화
            if (!event.origin.startsWith('http://localhost')) {
                console.warn('❌ 허용되지 않은 origin:', event.origin);
                return;
            }

            const { accessToken, user } = event.data;
            if (!accessToken) {
                console.warn('❌ accessToken 없음');
                return;
            }

            localStorage.setItem('userToken', accessToken);
            window.dispatchEvent(new Event("user-token-changed"));

            window.removeEventListener('message', receiveMessage);

            // 팝업 닫기
            try {
                popup.close();
            } catch (e) {
                console.warn('팝업 닫기 실패:', e);
            }

            // navigate 딜레이
            setTimeout(() => {
                navigate('/');
            }, 100);
        };

        window.addEventListener('message', receiveMessage);
    };

    return (
        <Box sx={{ p: 4, maxWidth: 400, margin: "0 auto" }}>
            <Typography variant="h5" gutterBottom>
                로그인
            </Typography>
            <SocialLoginButton provider="kakao" onClick={handleKakaoLogin} />
        </Box>
    );
};

export default KakaoAuthenticationPage;