import { observer } from "mobx-react-lite"
import postsStore from "../../store/posts-store";
import { useEffect } from "react";
import { useStores } from "../../root-store-context";

export const Wrapper = observer(() => {
    // const { getPostsAction, 
    //         posts,
    //     // isLoading
    //         } = postsStore;
    const {post: {getPostsAction, posts}} = useStores(); //получаем объект где содержатся все наши сторы

    useEffect(() => {
        getPostsAction();
    }, [])

    // if (posts?.state === 'pending') {
    //     return <div>loading...</div>
    // }

    // if (posts?.state === 'rejected') {
    //     return <div>error</div>

    // }

    // console.log(posts, 'posts');

    // return (
    //     <>
    //         {posts?.value[0].body}
    //     </>
    // )

    if (!posts) {
        return null
    }

    return posts.case({
        pending: () => <div>loading...</div>,
        rejected: () => <div>error</div>,
        fulfilled: (value) => (
            <>
                <div>{value[0].body}</div>
                <div>{value[0].title}</div>
            </>
        )
    });
});