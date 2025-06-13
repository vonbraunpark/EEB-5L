import { configureStore, createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {value: 0},                           // 초기화
    reducers:{
        increment: (state) => { state.value += 1 },     // 증가값 지정
        decrement: (state) => { state.value -= 1 },     // 감소값 지정
    },
})

// 증가, 감소에 대하여 외부에 노출한다.
export const { increment, decrement } = counterSlice.actions
export const store = configureStore({
    reducer: {
      counter: counterSlice.reducer,
    },
})
// 타입에 해당하는 내용. 이런 타입이 있습니다.
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch