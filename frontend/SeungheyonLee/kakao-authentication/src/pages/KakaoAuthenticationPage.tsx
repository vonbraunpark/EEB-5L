import React from "react";
import { Box, Typography } from "@mui/material";
import SocialLoginButton from "../ui/components/SocialLoginButton";

import {useNavigate} from "react-router-dom";
import env from "../env.ts";

const KakaoAuthenticationPage: React.FC = () => {
    //우리가 Routes로 감싸놓은 Router 설정을 활용 할 수 있게 지원함
    const navigate = useNavigate();
    const handleKakaoLogin = () => {
        const kakaoAuthenticationUrl = env.api.KAKAO_AUTHENTICATION_URL;
        // 팝업 형식의 로그인 창을 띄운다.
        const popup = window.open(kakaoAuthenticationUrl, '_blank', 'width=500,height=600');

        if (!popup) {
            alert('팝업 차단되어 있습니다. 팝업 허용 후 다시 시도하세요.');
            return;
        }

        const receiveMessage = (event: MessageEvent) => {
            //팝업으로 메시지가 전달되면 receiveMessage() 니가 받아라
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
            //f12 눌렀을때 Application 파트에 localStorage가 보인다
            // 해당 파트에 보면 userToken이 생성되어 있는 것을 볼 수 있는데
            // 아래 파트에서 작업하는 것이라 보면 되겠다.
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
    //항상 컴포넌트의 returndp표현되는것이 UI에 해당한다.
    return (
        //Boxsms React Mui(Vue Vuetify)에 해당하는 UI 템플릿이다
        //<div> 태그에 해당하며 스타일을 조금 더 편리하게 지정할 수있도록 도와준다
        //p: 4<- 내부 여백(padding)을 1당 8px로 4이므로 32px
        //maxWidth:400 <- 최대 너비는 400px로 고정
        //margin: "0 auto"<-가운데 정렬
        <Box sx={{ p: 4, maxWidth: 400, margin: "0 auto" }}>
            {/*
                TypoGraphy는 텍스트 표현 표현
                variant="h5" HTML으 <h5> 처럼 스타일링한다.
                gutterBottom :=<아래쪽에 적절한 여백을 만들어준다.
            */}
            <Typography variant="h5" gutterBottom>
                로그인
            </Typography>
            {/*
                SocialloginButton은 사실상 또다른 컴포넌트
                컴포넌트 내부에서 또다른 컴포넌트를 사용 할 수 있다.
                provider는 실제 SocialLoginButton이 사용하는 파라미터
                provider를 사용하는 이유는 "kakao" 로그인임을 명시하기 위함이다
                onClick도 SocialLogicButton이 사용하는 파라미터
                onClick의 경우 클릭 했을때 무엇을 할것인지 외부에서 주입하기 위함이다.
            */}
            <SocialLoginButton provider="kakao" onClick={handleKakaoLogin} />
        </Box>
    );
};

export default KakaoAuthenticationPage;