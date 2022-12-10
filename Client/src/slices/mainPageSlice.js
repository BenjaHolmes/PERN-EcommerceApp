
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    carouselImg: 1
}

const mainPageSlice = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {
        incrementCarousel(state) {
            state.carouselImg++
        }
    }
});

export const { incrementCarousel } = mainPageSlice.actions;

// export const themeSelector = state => state.header.lightThemeOn;


export default mainPageSlice.reducer;