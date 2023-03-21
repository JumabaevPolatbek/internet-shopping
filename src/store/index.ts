import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { rootReducer } from "./reducer";
import { actionsCountrie } from "./api/country";
import { actionsCategories } from "./api/category";
import { actionsProduct } from "./api/product";
import { actionsUser } from "./api/user";
import { getAll } from "./api/all";
import attributeActions from "./api/attributes";
import { authUser } from "./api/auth";
import { ordersAction } from "./api/orders";
import { adminActions } from "./api/admin";
import { callBack } from "./api/call";
import { advancedSearch } from "./api/search";
import { review } from "./api/review";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      actionsCountrie.middleware,
      actionsCategories.middleware,
      actionsProduct.middleware,
      actionsUser.middleware,
      getAll.middleware,
      attributeActions,
      authUser.middleware,
      ordersAction.middleware,
      adminActions.middleware,
      callBack.middleware,
      advancedSearch.middleware,
      review.middleware
    ),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
