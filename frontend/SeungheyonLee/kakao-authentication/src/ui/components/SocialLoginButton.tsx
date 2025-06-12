// React 기본 라이브러리 임포트
import React from "react";
// 카카오 로그인 버튼에 사용할 이미지 불러오기
import KakaoLoginImage from "../../assets/kakao_login.png";

// 사용할 로그인 제공자(Provider) 타입 정의
// Provider는 "google", "kakao", "github" 중 하나만 가능
type Provider = "google" | "kakao" | "github";

// 컴포넌트가 받을 props(속성)의 타입을 정의
interface Props {
    provider: Provider;      // 사용할 로그인 제공자 종류
    //입력이 없고, 리턴도 없는 함수가 onClick이다
    //void(*)(void)
    onClick: () => void;     // 버튼 클릭 시 실행할 함수
}

// 각 로그인 제공자에 대한 UI 정보를 담은 객체
// 현재는 kakao만 정의되어 있고, icon은 사용하지 않음
const providerInfo:
    Record<Provider, {
        label: string;           // 버튼에 표시할 텍스트
        color: string;           // (현재 미사용) 버튼 색상
        icon: React.ReactNode;   // (현재 미사용) 아이콘 컴포넌트
    }> = {
    kakao: { label: "Kakao 로그인", color: "", icon: null },   // 현재 프로젝트에선 kakao만 사용 중
};

// 소셜 로그인 버튼 컴포넌트 정의
// 파라미터 2개(provider의 onClick함수)를 받아옴
const SocialLoginButton: React.FC<Props> = ({ provider, onClick }) => {
    // provider에 해당하는 정보 불러오기 (예: kakao)
    //위쪽의 label,color,icon 정보를 획득함 ->현재 provider는 kakao 이다
    const info = providerInfo[provider];

    // label이 없다면 유효하지 않은 provider이므로 렌더링하지 않음
    if (!info.label) return null;

    // 실제 버튼(이미지)을 렌더링
    // 하단의 onClick이 핵심
    // 현재 onClick이 사실상 Authen
    return (
        <img
            src={KakaoLoginImage}    // 버튼 이미지로 사용할 Kakao 이미지
            alt="Kakao Login"        // 이미지가 로딩되지 않을 때 대체 텍스트
            onClick={onClick}        // 클릭 시 전달받은 onClick 함수 실행
            style={{
                cursor: "pointer",         // 마우스 커서가 손가락 모양으로 바뀜
                maxWidth: "100%",          // 부모 요소 너비 내에서 크기 조절
                height: "auto",            // 원본 비율 유지
                display: "block",          // 인라인 요소가 아닌 블록 요소로 렌더링
                margin: "16px auto",       // 위아래 여백 16px, 좌우 가운데 정렬
            }}
        />
    );
};

// 다른 파일에서 이 컴포넌트를 사용할 수 있도록 export
export default SocialLoginButton;
