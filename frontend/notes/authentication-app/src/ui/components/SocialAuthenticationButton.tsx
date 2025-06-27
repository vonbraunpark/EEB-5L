import React from "react";
import SocialLoginButton from "./SocialLoginButton";

const SocialAuthenticationButtons: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 w-full max-w-xs mx-auto mt-20">
            <SocialLoginButton provider="kakao" />
            <SocialLoginButton provider="google" />
            <SocialLoginButton provider="naver" />
            <SocialLoginButton provider="github" />
            <SocialLoginButton provider="meta" />
        </div>
    );
};

export default SocialAuthenticationButtons;
