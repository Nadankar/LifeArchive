

// import * as SecureStore from "expo-secure-store";

// const TOKEN_KEY = "lifearchive_auth_token";

// export const saveToken = async (token: string) => {
//     await SecureStore.setItemAsync(TOKEN_KEY, token);
// };

// export const getToken = async () => {
//     return await SecureStore.getItemAsync(TOKEN_KEY);
// };

// export const removeToken = async () => {
//     await SecureStore.deleteItemAsync(TOKEN_KEY);
// };




import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const TOKEN_KEY = "lifearchive_auth_token";

export const saveToken = async (token: string) => {
    if (Platform.OS === "web") {
        localStorage.setItem(TOKEN_KEY, token);
    } else {
        await SecureStore.setItemAsync(TOKEN_KEY, token);
    }
};

export const getToken = async () => {
    if (Platform.OS === "web") {
        return localStorage.getItem(TOKEN_KEY);
    }

    return await SecureStore.getItemAsync(TOKEN_KEY);
};

export const removeToken = async () => {
    if (Platform.OS === "web") {
        localStorage.removeItem(TOKEN_KEY);
    } else {
        await SecureStore.deleteItemAsync(TOKEN_KEY);
    }
};

