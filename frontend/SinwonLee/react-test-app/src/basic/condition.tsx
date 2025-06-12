import React from "react";
const condition = () => {
    const isLoggedIn =false

    return (
        <div>
            {
                isLoggedIn ?
                    <h1>환영합니다</h1>:<h1>로그인후 이영해주세요</h1>
            }

        </div>
    )

}

export default condition;