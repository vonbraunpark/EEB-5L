// React 18 방식으로 DOM에 렌더링을 위한 모듈
// CSS 파일 불러오기 (스타일 적용)
import "./style/main.css";

// MUI(Material UI)의 텍스트 컴포넌트 불러오기
import {Button, Typography} from "@mui/material";

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


            <h1> HTML & CSS 학습을 진행하겠다 </h1>
            <p>이 단락은 HTML과 CSS에 대해 알아보는 단락이다.</p>

            <div className="box">
                <h2>HTML 구조</h2>
                <p>HTML은 제목, 단락 목록 등으로 구성됨</p>
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
                <p>CSS는 HTML 요소를 스타일링 하기위한 목적으로 사용함</p>
                <ul>
                    <li>선택자 : 요소를 선택(예:</li>
                    <li>속성: 스타일을 정의(예:color,font-size</li>
                    <li>값: 특정 스타일을 지정(예:red,px)</li>
                </ul>
            </div>
            <div className="box">
                <h2>링크 및 내비게이션</h2>
                <p><code>&lt;a&gt;</code>태그를 사용하여 이미지를 표시할 수 있음</p>
                <a href="http://www.w3schools.com/html">
                    html 더 살펴보기
                </a>
            </div>

            <div className="box">
                <h2>이미지 표현</h2>
                <p><code>&lt;img&gt;</code> 태그를 사용하여 이미지를 표시할 수 있음</p>
                <img src="https://picsum.photos/200" alt="예제"/>
            </div>
            <div className="box">
                <h2>표 만들기</h2>
                <p>표는 데이터를 행과 열로 표현합니다</p>
                <table>
                    <thead>
                    <tr>
                        <th>제목 열 1</th>
                        <th>제목 열 2</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>데이터 1</td>
                        <td>데이터 2</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="box">
                <h2>Form(형식) 입력</h2>
                <p>폼(Form)은 사용자가 데이터를 입력할 수 있도록 지원함</p>
                <form>
                    <label htmlFor="name">이름: </label>
                    <input type="text" id="name" name="name" placeholder="이름 입력"/>
                    <br/>
                    <label htmlFor="email">이메일: </label>
                    <input type="email" id="email" name="email" placeholder="이메일 입력"/>
                    <br/>
                    <button type="submit" className="custom-button">제출</button>
                </form>
            </div>
            <div className="box">
                <h2>CSS Animation</h2>
                <p>CSS는 Key Frame을 사용해서 애니메이션을 만들 수 있음</p>
                <div className="animated-box">이 상자에 애니메이션 효과가 적용됨</div>
            </div>

            <div className="box">
                <h2>Audio & Video</h2>
                <p><code>&lt;audio&gt;</code> 및 <code>&lt;video&gt;</code> 태그를 사용해 멀티미디어를 추가</p>
                <audio controls>
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg"/>
                    브라우저가 오디오를 지원하지 않음.
                </audio>
                <br/>
                <video controls width="320">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                    브라우저가 비디오를 지원하지 않음.
                </video>
            </div>

            <Button variant="contained" color="primary">
                MUI 버튼 클릭
            </Button>
        </div>


    );
};


// 다른 모듈에서 App을 사용할 수 있도록 내보냄
export default App;
//스크넘?을 통해서 각자 담당할 내용을 정리,번호 부여해서 부여
//이후 정상작동하는지 확인 후 git에 pr(pull request)올리기