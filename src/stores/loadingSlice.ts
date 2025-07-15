import { StateCreator } from "zustand";


export type LoadingSliceType = {
    isLoading: boolean;
    setLoading: (value: boolean) => void;
}

export const loadingSlice: StateCreator<LoadingSliceType> = (set) => ({
    isLoading: false,
    setLoading: (value) => {
        set({isLoading: value})
    }
});