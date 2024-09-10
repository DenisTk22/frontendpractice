import { makeAutoObservable, runInAction } from 'mobx';
import { Posts, getPosts } from '../../../project_b_ts/src/api/getPosts';
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils';

class PostsStore {
    // posts: Posts[] = [];
    // inLoading = false;
    posts?: IPromiseBasedObservable<Posts[]>;

    constructor() {
        makeAutoObservable(this);
    }

    //action
    // getPostsAction = async () => {
    //     try {
    //         this.inLoading = true;
    //         const res = await getPosts();
    //         runInAction(() => { // позволяет асинхронным действиям вести себя обычные действия (будет только один перерендер)
    //             this.posts = res;
    //             this.inLoading = false;
    //         })
    //     } catch {
    //         this.inLoading = false;
    //     }
    // }
    getPostsAction = () => {
        this.posts = fromPromise(getPosts())
    }
}

export default new PostsStore()