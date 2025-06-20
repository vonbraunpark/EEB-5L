// recoil에서 상태(atom)와 파생 상태(selector)를 가져온다.
import { atom, selector } from 'recoil';

/**
 * 📌 postsState
 * 게시글 데이터를 저장할 atom (기본값은 빈 배열)
 * 외부 API에서 데이터를 받아오고 나면 이 상태에 저장해서 다른 컴포넌트에서 사용한다.
 */
export const postsState = atom({
    key: 'postsState',       // 이 atom을 구별하는 고유한 key (반드시 유일해야 함)
    default: [],             // 초기 상태는 빈 배열 (아직 게시글이 없다는 의미)
});

/**
 * 📌 postsLoadingState
 * 게시글을 로딩 중인지 여부를 나타내는 상태
 * true: 로딩 중, false: 로딩 완료
 * 로딩 스피너나 메시지를 표시할 때 유용하게 사용된다.
 */
export const postsLoadingState = atom({
    key: 'postsLoadingState', // 고유한 key ,api 호출이 진행중인지 여부 판별용 boolean
    default: true,            // 처음엔 로딩 중 상태로 설정
});

/**
 * 📌 fetchPostsSelector
 * 서버(API)로부터 게시글 데이터를 비동기로 가져오는 selector
 * selector는 컴포넌트에서 직접 호출 가능하며,
 * get 내부에서 비동기 로직을 처리할 수 있음
 */
export const fetchPostsSelector = selector({
    key: 'fetchPostsSelector', // 고유한 key
    get: async ({ get }) => {
        try {
            // JSONPlaceholder에서 게시글 데이터를 가져온다.
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            return await response.json(); // 응답을 JSON 형식으로 변환해 반환
        } catch (err) {
            // 네트워크 오류 또는 fetch 실패 시
            console.error('API 오류:', err); // 콘솔에 에러 출력
            return []; // 오류 시 빈 배열 반환
        }
    },
});
