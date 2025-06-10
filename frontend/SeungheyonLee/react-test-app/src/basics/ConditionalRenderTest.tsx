import React, { useState } from "react";

const ConditionalRenderTest = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ 상태값으로 관리

    return (
        <div>
            {isLoggedIn ? (
                <h1>환영합니다</h1>
            ) : (
                <h1>로그인 이후 서비스를 이용 할 수 있습니다.</h1>
            )}

            {/* ✅ 버튼으로 상태 변경 */}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "로그아웃" : "로그인"}
            </button>
        </div>
    );
};

export default ConditionalRenderTest;
