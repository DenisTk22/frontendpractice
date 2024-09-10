import { observer } from "mobx-react-lite"
import Counter from "../counter/indexTwo"
import CounterStore from "../../store/counterTwo-store"
import postsStore from "../../store/posts-store";
import { useEffect } from "react";

const counter1 = new CounterStore();
const counter2 = new CounterStore();

export const Wrapper = observer(() => {
    const {getPostsAction, posts} = postsStore

    useEffect(() => {
        getPostsAction();
    }, [])

    console.log(posts, 'posts');

    return (
        <>
            {/* <Counter {...counter1} total={counter1.total}/>
            <Counter {...counter2} total={counter2.total} /> */}
        </>
    )
})