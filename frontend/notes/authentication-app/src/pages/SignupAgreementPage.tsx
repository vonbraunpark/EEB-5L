import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { privacyText } from "./PrivacyText";
import { termsText } from "./TermsText";

const SignupAgreementPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, loginType, temporaryUserToken } = location.state || {};

    console.log("[AgreementPage] location.state:", location.state);
    console.log("[AgreementPage] user:", user);
    console.log("[AgreementPage] loginType:", loginType);
    console.log("[AgreementPage] temporaryUserToken:", temporaryUserToken);

    const [privacyAgreed, setPrivacyAgreed] = useState(false);
    const [termsAgreed, setTermsAgreed] = useState(false);
    const [allAgreed, setAllAgreed] = useState(false);

    const [showPrivacy, setShowPrivacy] = useState(true);
    const [showTerms, setShowTerms] = useState(true);

    const buttonRef = useRef<HTMLButtonElement>(null);
    const canProceed = privacyAgreed && termsAgreed;

    useEffect(() => {
        setAllAgreed(privacyAgreed && termsAgreed);
    }, [privacyAgreed, termsAgreed]);

    const handleAllAgree = () => {
        const newVal = !allAgreed;
        setPrivacyAgreed(newVal);
        setTermsAgreed(newVal);
        setAllAgreed(newVal);

        if (newVal) {
            setTimeout(() => {
                buttonRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 100);
        }
    };

    const toggleView = (type: string) => {
        if (type === "privacy") setShowPrivacy(prev => !prev);
        if (type === "terms") setShowTerms(prev => !prev);
    };

    const onAgree = (type: string) => {
        if (type === "privacy" && privacyAgreed) setShowPrivacy(false);
        if (type === "terms" && termsAgreed) setShowTerms(false);
    };

    const goToLogin = () => {
        if (canProceed) {
            sessionStorage.setItem("agreed", "true");
            navigate("/authentication/signup-summary", {
                state: {
                    user,
                    loginType,
                    temporaryUserToken,
                }
            });
        }
    };

    const goBack = () => {
        navigate("/");
    };

    if (!user || !loginType || !temporaryUserToken) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <p className="text-lg font-semibold">잘못된 접근입니다.</p>
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => navigate("/")}
                >
                    홈으로 돌아가기
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl w-[90%] mx-auto mt-10 p-6 rounded-xl border border-gray-200 bg-white">
            <h2 className="text-2xl font-bold mb-6">약관 동의</h2>

            {/* 전체 약관 동의 */}
            <section className="mb-8">
                <label className="font-bold text-base flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={allAgreed}
                        onChange={handleAllAgree}
                    />
                    전체 약관에 동의합니다
                </label>
            </section>

            {/* 개인정보 처리방침 */}
            <section className="mb-8">
                <label className="font-medium text-base flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={privacyAgreed}
                        onChange={() => {
                            setPrivacyAgreed(!privacyAgreed);
                            onAgree("privacy");
                        }}
                    />
                    개인정보처리방침에 동의합니다
                </label>

                {showPrivacy && (
                    <div
                        className="text-sm text-gray-700 leading-relaxed whitespace-pre-line mt-2 p-4 border border-gray-300 rounded-md bg-gray-50 max-h-64 overflow-y-auto"
                        dangerouslySetInnerHTML={{ __html: privacyText }}
                    />
                )}

                <div className="mt-2 text-left">
                    <button
                        className="text-sm text-blue-600 hover:underline"
                        onClick={() => toggleView("privacy")}
                    >
                        {showPrivacy ? "내용 접기" : "자세히 보기"}
                    </button>
                </div>
            </section>

            <hr className="border-gray-300 my-6" />

            {/* 이용약관 */}
            <section className="mb-8">
                <label className="font-medium text-base flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={termsAgreed}
                        onChange={() => {
                            setTermsAgreed(!termsAgreed);
                            onAgree("terms");
                        }}
                    />
                    이용약관에 동의합니다
                </label>

                {showTerms && (
                    <div
                        className="text-sm text-gray-700 leading-relaxed whitespace-pre-line mt-2 p-4 border border-gray-300 rounded-md bg-gray-50 max-h-64 overflow-y-auto"
                        dangerouslySetInnerHTML={{ __html: termsText }}
                    />
                )}

                <div className="mt-2 text-left">
                    <button
                        className="text-sm text-blue-600 hover:underline"
                        onClick={() => toggleView("terms")}
                    >
                        {showTerms ? "내용 접기" : "자세히 보기"}
                    </button>
                </div>
            </section>

            {/* 간편 로그인 버튼 */}
            <button
                ref={buttonRef}
                onClick={goToLogin}
                disabled={!canProceed}
                className={`w-full max-w-sm mx-auto block mt-6 px-6 py-3 text-white font-semibold rounded-md transition ${
                    canProceed
                        ? "bg-yellow-400 hover:bg-yellow-500"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
                간편 로그인으로 계속하기
            </button>

            <p
                onClick={goBack}
                className="mt-4 text-sm text-center text-gray-600 underline cursor-pointer"
            >
                돌아가기
            </p>
        </div>
    );
};

export default SignupAgreementPage;
