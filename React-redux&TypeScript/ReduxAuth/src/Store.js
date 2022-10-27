import { lagecy_createStore , combineReducers , applyMiddleware } from "redux";
import { authReducer } from "./redux/auth/auth.reducer";
import { feedReducer } from "./redux/feed/feed.reducer";
import { postReducer } from "./redux/post/post.reducer";

const rootReducer=combineReducers({
    auth:authReducer,
    feed:feedReducer,
    post:postReducer
})

export const Store=lagecy_createStore(rootReducer  )