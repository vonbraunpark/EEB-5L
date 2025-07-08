import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../utility/AxiosInst.ts";

const SignupSummaryPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, loginType, temporaryUserToken } = location.state || {};

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

    const [nickname, setNickname] = useState(user.nickname || user.name || "");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSignup = async () => {
        setError(null);

        if (!nickname.trim()) {
            setError("닉네임을 입력해주세요.");
            return;
        }

        try {
            setLoading(true);

            const response = await axiosInstance.springAxiosInst.post("/account/register", {
                email: user.email,
                nickname: nickname.trim(),
                loginType,
                temporaryUserToken,
            });

            const createdUserToken = response.data

            console.log("response:", response)
            console.log("userToken:", createdUserToken);
            console.log("user.email:", user.email);
            console.log("nickname.trim():", nickname.trim());

            localStorage.setItem("userToken", createdUserToken);
            localStorage.setItem("userEmail", user.email);
            localStorage.setItem("userNickname", nickname.trim());
            window.dispatchEvent(new Event("user-token-changed"));

            navigate("/", { replace: true });
        } catch (e: any) {
            setError(
                e.response?.data?.message ||
                "회원가입 중 오류가 발생했습니다. 다시 시도해주세요."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-20 p-6 border rounded-xl bg-white shadow">
            <h1 className="text-2xl font-bold mb-6">회원 정보 확인 및 신청</h1>

            <div className="mb-4">
                <p className="text-gray-700 font-medium">이메일 주소</p>
                <p className="text-lg">{user.email || "알 수 없음"}</p>
            </div>

            <div className="mb-6">
                <label htmlFor="nickname" className="text-gray-700 font-medium block mb-1">
                    닉네임
                </label>
                <input
                    id="nickname"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
            </div>

            {error && <p className="mb-4 text-red-600">{error}</p>}

            <button
                onClick={handleSignup}
                disabled={loading}
                className={`w-full py-3 text-white font-semibold rounded ${
                    loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-yellow-400 hover:bg-yellow-500"
                }`}
            >
                {loading ? "처리 중..." : "회원 신청"}
            </button>
        </div>
    );
};

export default SignupSummaryPage;
