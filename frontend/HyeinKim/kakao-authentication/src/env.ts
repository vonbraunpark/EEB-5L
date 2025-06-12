interface Env {
    mode: string | undefined;
    api: {
        KAKAO_AUTHENTICATION_URL: string | undefined;
    };
}

const env: Env = {
    mode: process.env.NODE_ENV,
    api: {
        // process : 현재 구동중인 ~
        KAKAO_AUTHENTICATION_URL: process.env.REACT_APP_KAKAO_AUTHENTICATION_URL,
    },
};

export default env;