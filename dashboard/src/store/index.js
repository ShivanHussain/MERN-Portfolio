import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Import your slices
import userReducer from "../store/slices/userSlice";
import skillReducer from "../store/slices/skillSlice";
import softwareApplicationReducer from "../store/slices/softwareApplicationSlice";
import timelineReducer from "../store/slices/timelineSlice";
import messageReducer from "../store/slices/messageSlice";
import projectReducer from "../store/slices/projectSlice";

const rootReducer = combineReducers({
  user: userReducer,
  skill: skillReducer,
  softwareApplication: softwareApplicationReducer,
  timeline: timelineReducer,
  message: messageReducer,
  project: projectReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], // only user slice will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
