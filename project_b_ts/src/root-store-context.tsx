import {createContext, useContext} from 'react'
import RootStore from './store/roote-store'

export const RootStoreContext = createContext<RootStore | null>(null);

export const useStores = () => {
    const contex = useContext(RootStoreContext);

    if (contex === null) { // если contex === null, то скорее всего наш App не обернут в провайдер
        throw new Error('');
    }
    return contex;
}