import React, { useEffect } from 'react';
// Recoil 훅 import
import {
    useRecoilState,          // atom 상태를 읽고 쓸 수 있게 해줌
    useSetRecoilState,       // atom 상태를 설정만 가능
    useRecoilValueLoadable   // selector의 비동기 상태를 다룰 수 있음
} from 'recoil';
// 필요한 상태와 selector import
//- `useRecoilState()` ← 상태(state) 읽기 / 쓰기를 위한 지원
// - `useRecoilValueLoadable()` ← 비동기 selector의 상태 (loading, hasValue, hasError)를 추적하기 위한 지원
// - `postsLoadable 상태 변경`마다 적절한 처리를 위한 구성
import {
    postsState,
    postsLoadingState,
    fetchPostsSelector
} from '../../atoms/postState';

/**
 * 📌 PostList 컴포넌트
 * 게시글을 API로부터 비동기로 불러와서 Recoil atom에 저장하고,
 * 로딩 상태를 관리하며 UI에 게시글을 출력함.
 */
function PostList() {
    // 게시글 상태와 setter
    const [posts, setPosts] = useRecoilState(postsState);
    // 로딩 상태와 setter
    const [loading, setLoading] = useRecoilState(postsLoadingState);
    // fetchPostsSelector를 통해 데이터를 Loadable로 불러옴 (hasValue, loading, hasError 세 가지 상태 가짐)
    const postsLoadable = useRecoilValueLoadable(fetchPostsSelector);

    /**
     * 📌 useEffect
     * postsLoadable의 상태가 변할 때마다 실행됨.
     * Loadable 상태에 따라 게시글을 설정하거나 로딩 상태를 관리함.
     */
    //- `useEffect(() => { ~~~~~ }, [])` ← 대괄호 내의 정보(`postsLoadable.state`)가 변경되면 `useEffect` 가 동작하게 됩니다.
    // - 비동기 처리 (`fetch`) 가 끝나면 posts를 갱신하고 loading 정보를 `false`로 변경합니다.
    // - 에러 또한 로딩은 끝난 것이므로 `false` 처리합니다.
    useEffect(() => {
        if (postsLoadable.state === 'hasValue') {
            // 데이터가 정상적으로 도착했을 경우: 게시글 저장, 로딩 종료
            setPosts(postsLoadable.contents);
            setLoading(false);
        } else if (postsLoadable.state === 'loading') {
            // 데이터 로딩 중일 경우: 로딩 상태 true로 설정
            setLoading(true);
        } else if (postsLoadable.state === 'hasError') {
            // 에러 발생 시: 에러 로그 출력 후 로딩 종료
            console.error('불러오기 오류:', postsLoadable.contents);
            setLoading(false);
        }
    }, [postsLoadable.state]);  // postsLoadable 상태 변경될 때만 실행

    // 로딩 중 UI 처리
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen text-xl font-semibold">
                로딩 중...
            </div>
        );
    }

    /**
     * 📌 게시글 렌더링
     * posts 배열의 앞에서 9개만 선택해서 카드 형태로 출력
     */
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">📚 게시글 목록</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.slice(0, 9).map((post) => (
                    <div
                        key={post.id}
                        className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-lg font-semibold text-blue-600 mb-2">
                            {post.title}
                        </h3>
                        <p className="text-gray-700 text-sm">{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostList;
