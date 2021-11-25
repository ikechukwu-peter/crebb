import create from 'zustand';

const useStore = create(set => ({
    isAuthenticated: false,
    login:()=> set({isAuthenticated: true}),
    logout:()=> set({isAuthenticated:false})
}));
export default useStore;