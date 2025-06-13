import React from 'react'

// useDispatch() <- redux 액션을 가져오기 위해 사용
// useSelector() <- redux 상태를 읽어오기 위해 사용
// increment, decrement <- store.ts에서 만든 커스텀 액션
// RootState <- redux의 root 상태 타입

import { useDispatch, useSelector } from "react-redux";
import { RootState, increment, decrement } from "../state/store.ts";

const ReduxCounterTest = () => {
    // 현재 state에 해당하는 count.value를 읽는 과정
    // increment, decrement를 사용할 준비, dispatch를 통해 사용(dispatch(increment()) 형식)
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center space-y-4">
                <h1 className="text-2xl font-bold"> 카운트 </h1>
                <p className="text-4xl font--mono"> { count } </p>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => dispatch(increment()) }
                        className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white text-2xl font-bold rounded-lg shadow transition"
                    >
                        +
                    </button>
                    <button
                        onClick={() => dispatch(decrement()) }
                        className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white text-2xl font-bold rounded-lg shadow transition"
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ReduxCounterTest

{/*
                bg-white            ◀ 흰색배경
                p-6                 ◀ 내부 패딩 24px
                rounded-2xl         ◀ 둥근 모서리
                shadow-md           ◀ 중간 정도의 그림자
                text-center         ◀ 배치되는 글자를 가운데 정렬
                space-y-4           ◀ 하위에 배치되는 요소를 16px만큼 세로로 간격을 둠
            */}
{/*
                        onClic                           ◀ 앞서 우리가 만들어놓은 store의 counter.value 값을 증가시킨다.
                        w-12, h-12                       ◀ 48 * 48 px의 정사각형을 생성
                        bg-blue-500, hover:bg-blue-600   ◀ 버튼 색상 및 마우스 올렸을 때 색상
                        text-white                       ◀ 글자 색상 흰색
                        text-2xl font-bold               ◀ 적당히 큰 글씨와 굵은 폰트
                        ronded-lg                        ◀ 동그란 테두리
                        shadow                           ◀ 적당한 그림자
                        transition                       ◀ 마우스 호버 기능이 있으므로 부드럽게 변하도록 설정
                        */}
{/*
                    flex                ◀ 가로정렬
                    gap-4               ◀ 버튼 사이의 간격
                    justify-center      ◀ 가운데 정렬
                */}
{/*
                    text-2xl, text-4xl  ◀ 각각의 글자 크기
                    font-bold           ◀ 굵은 글씨
                    font-mono           ◀ 고정폭 폰트를 통해 숫자 정렬을 좀 더 예쁘게 표현하기 위해 사용
                */}
// flex flex-col                ◀ 세로로 배치되는 구성
// items-center justify-center  ◀ 정가운데 배치(가로, 세로 정렬 혹은 전체 정렬)
// min-h-scree                  ◀ 100vh와 동일하기에 화면 높이만큼 채움
// bg-gray-100                  ◀ 연한 회색 배경