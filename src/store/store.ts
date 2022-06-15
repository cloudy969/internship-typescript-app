import {configureStore} from "@reduxjs/toolkit";
import {isAuth} from "./reducers/isAuthSlice";
import {weather} from "./reducers/weatherSlice";
import {users} from "./reducers/usersSlice";
import {user} from "./reducers/userSlice";

export const store = configureStore({
    reducer: {
        isAuth: isAuth.reducer,
        weather: weather.reducer,
        users: users.reducer,
        user: user.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;