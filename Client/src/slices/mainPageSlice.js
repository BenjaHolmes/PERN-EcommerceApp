
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    carouselImg: 1
}

const mainPageSlice = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {
        incrementCarousel(state) {
            if (state.carouselImg === 1) {
                state.carouselImg = 2;
            } else if (state.carouselImg === 2) {
                state.carouselImg = 3;
            } else if (state.carouselImg === 3) {
                state.carouselImg = 1;
            }
        },
        decrementCarousel(state) {
            if (state.carouselImg === 1) {
                state.carouselImg = 3;
            } else if (state.carouselImg === 2) {
                state.carouselImg = 1;
            } else if (state.carouselImg === 3) {
                state.carouselImg = 2;
            }
        }
    }
});

export const { incrementCarousel, decrementCarousel } = mainPageSlice.actions;

export const imgSelector = state => state.mainPage.carouselImg;


export default mainPageSlice.reducer;