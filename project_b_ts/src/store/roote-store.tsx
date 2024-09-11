import postsStore from "./posts-store";

// для объединения всех сторов, если их много
class RootStore {
    post = postsStore;
    //другой store
}

export default RootStore;