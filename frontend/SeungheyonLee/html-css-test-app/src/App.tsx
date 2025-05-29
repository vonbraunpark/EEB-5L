// React 18 방식으로 DOM에 렌더링을 위한 모듈
import ReactDOM from "react-dom/client";

// CSS 파일 불러오기 (스타일 적용)
import "./style/main.css";

// MUI(Material UI)의 텍스트 컴포넌트 불러오기
import {Typography} from "@mui/material";

// 🔽 앱의 메인 컴포넌트 정의
const App = () => {
    return (
        // main.css에서 정의한 container 클래스를 적용한 div
        /*
        컴포넌트의 레이아웃/구조를 구성하기 위한 기본 박스

        container 클래스명을 적용해 스타일을 쉽게 지정

        여러 UI 요소들을 그룹으로 묶는 용도

        👉 HTML의 구조적 역할을 담당하는 기본 단위
         */
        <div className="container">
            {/* MUI Typography 컴포넌트: 텍스트 출력 전용 컴포넌트
             <h1>, <p>, <span> 같은 기본 텍스트 태그들을 대체하면서
            일관된 디자인, 접근성, 반응형 설정을 자동 적용*/}
            <Typography
                variant="h5"        // HTML <h5>처럼 스타일을 지정함
                gutterBottom        // 아래쪽 여백(margin-bottom)을 자동으로 줌
            >
                HTML & CSS 학습 공간
            </Typography>
        </div>
    );
};

// React 18 방식으로 루트 DOM에 앱 렌더링 시작
const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App/>);

// 다른 모듈에서 App을 사용할 수 있도록 내보냄
export default App;
