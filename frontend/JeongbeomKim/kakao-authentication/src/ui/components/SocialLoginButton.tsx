import React from "react";
import KakaoLoginImage from "../../assets/kakao_login.png";

type Provider = "google" | "kakao" | "github";

interface Props {
    provider: Provider;
    onClick: () => void;
}

const providerInfo: Record<Provider, {
    label: string;
    color: string;
    icon: React.ReactNode;
}> = {
    kakao: { label: "Kakao 로그인", color: "", icon: null },   // 사용하지 않음
};

// 파라미터 2개(provider와 onClick 함수) 를 받아옴
const SocialLoginButton: React.FC<Props> = ({ provider, onClick }) => {
    // 위쪽의 label, color, icon 정보를 획득함 -> 현재 provider는 kakao입니다.
    const info = providerInfo[provider];

    if (!info.label) return null; // 유효하지 않은 provider 방어 처리

    // 하단의 onClick이 핵심

    return (
        <img
            src={KakaoLoginImage}
            alt="Kakao Login"
            onClick={onClick}
            style={{
                cursor: "pointer",
                maxWidth: "100%",     // 부모 컨테이너 크기까지만 줄어듦
                height: "auto",       // 원본 비율 유지
                display: "block",
                margin: "16px auto",  // 가운데 정렬
            }}
        />
    );
};

export default SocialLoginButton;