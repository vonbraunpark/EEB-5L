import {
    Cursor,
    useTypewriter,
    TypewriterHelper,
} from "react-simple-typewriter";
import styled from "styled-components";

const Introduction = () => {
    const words: string[] = [
        "둥지 짓는데 진심인",
        "참새를 물어 뜯는데 특화된",
        "나는 지금 아무것도 하고 싶지 않은",
        "왜냐하면 아무것도 하고 싶지 않기 때문인",
    ];
    const [text]: [string, TypewriterHelper] = useTypewriter({
        words,
        loop: 0,
    });
    return (
        <StCotainer>
            <StContent>
                저는
                <br />
                <span>{text}</span>
                <Cursor />
                <br />
                오리가 되고싶습니다.
            </StContent>
        </StCotainer>
    );
};

export default Introduction;

const StCotainer = styled.section`
    width: auto;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;

const StContent = styled.div`
    font-size: 60px;
    font-weight: bold;
    color: white;
  `;