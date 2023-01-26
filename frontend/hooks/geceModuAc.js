//import {useState} from 'react';
import { useLocalStorage } from "./localStorageKullan";

const useNightMode = (initialValue) => {
    const localStoredNightMode = useLocalStorage("mode",initialValue);

    return localStoredNightMode;
}

export default useNightMode ;

// initialMode