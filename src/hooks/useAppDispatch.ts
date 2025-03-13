import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {AppDispatch} from "../redux/store/store.ts";
import {RootState} from "@reduxjs/toolkit/query";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState<any, any, any>> = useSelector;
