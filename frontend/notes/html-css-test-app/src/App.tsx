import "./style/main.css";
import {Typography} from "@mui/material";

const App = () => {
    return (
        <div className="container">
            <Typography variant="h5" gutterBottom>
                HTML & CSS 학습 공간
            </Typography>

            <h1>HTML & CSS 학습을 진행해봐요 ~</h1>
            <p>이 단락은 HTML과 CSS에 대해 알아보는 단락입니다.</p>
            
            <div className="box">
                <h2>HTML 구조</h2>
                <p>HTML은 제목, 단락, 목록 등으로 구성됨</p>
                <ul>
                    <li>&lt;h1&gt; ~ &lt;h6&gt;: 제목</li>
                    <li>&lt;p&gt;: 단락</li>
                    <li>&lt;a href="#"&gt;: 하이퍼링크</li>
                    <li>&lt;img src="..."&gt;: 이미지</li>
                    <li>&lt;table&gt;, &lt;ul&gt;, &lt;ol&gt;: 표, 목록 만들기</li>
                </ul>
            </div>
            
            <div className="box">
                <h2>CSS 기본 개념</h2>
                <p>CSS는 HTML 요소를 스타일링 하기 위한 목적으로 사용함</p>
                <ul>
                    <li>선택자: 요소를 선택 (예: div, p, h1)</li>
                    <li>속성: 스타일을 정의 (예: color, font-size)</li>
                    <li>값: 특정 스타일을 지정 (예: red, 20px)</li>
                </ul>
            </div>

            <div className="box">
                <h2>링크 및 내비게이션</h2>
                <p><code>&lt;a&gt;</code> 태그를 사용하여 링크를 표시할 수 있음</p>
                <a href="https://www.w3schools.com/html/" target="_blank">
                    HTML 더 살펴보기
                </a>
            </div>
        </div>
    )
}

export default App;