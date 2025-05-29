// 모듈 연동(Micro Frontend)을 위한 Module Federation 설정 객체
export const mfConfig = {
  // 현재 애플리케이션의 이름 (호스트 이름)
  name: "html_container",

  // 원격(Remote) 애플리케이션 정의
  remotes: {
    // 'htmlCssTestApp' 이라는 이름으로 외부 모듈을 불러옴
    // 해당 애플리케이션은 http://localhost:3001/remoteEntry.js 에서 제공
    htmlCssTestApp: "htmlCssTestApp@http://localhost:3001/remoteEntry.js",
  },

  // 호스트/리모트 간 공유할 패키지들 설정
  shared: {
    // React를 싱글톤으로 공유 (여러 앱이 하나의 인스턴스를 사용)
    // 버전 요구: 18.2.0 이상
    react: { singleton: true, requiredVersion: "^18.2.0" },

    // React DOM도 동일하게 싱글톤 공유
    "react-dom": { singleton: true, requiredVersion: "^18.2.0" },

    // MUI(Material-UI)도 싱글톤으로 공유
    // UI 라이브러리이므로 통일된 테마/스타일을 위해 공유 권장
    "@mui/material": { singleton: true, requiredVersion: "^7.0.1" },

    // 리액트 라우터도 싱글톤으로 공유
    // 라우팅 간 충돌 방지를 위함
    "react-router-dom": { singleton: true, requiredVersion: "^6.30.0" },
  },
};
