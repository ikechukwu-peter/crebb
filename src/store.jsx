import create from 'zustand';
import { devtools } from 'zustand/middleware'


const store = (set => ({
    isAuthenticated: false,
    login:()=> set({isAuthenticated: true}),
    logout:()=> set({isAuthenticated:false})
}));
// Usage with a plain action store, it will log actions as "setState"
const useStore = create(devtools(store))
export default useStore;