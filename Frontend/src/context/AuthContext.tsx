import { getCurrentUser, logoutUser } from "@/services/authService";
import { getToken, removeToken } from "@/services/storage";
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";


type User = {
    id: number,
    name: string, 
    email: string
}

type AuthContextType = {
    user: User | null; 
    setUser: (user: User | null) => void;
    isAuthenticated: boolean; 
    loading: boolean;
    logout: () => Promise<void>
}


export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = await getToken();

                if (!token) {
                    setUser(null);
                    return;
                }
                const currentUser = await getCurrentUser();
                setUser(currentUser);

            } catch (error) {
                await removeToken();
                setUser(null);
            }
            finally {
                setLoading(false);
            }
        }
        checkAuth();
    }, []);


    const logout = async () => {
        try {
            await logoutUser();
        } finally {
            await removeToken();
            setUser(null);
        }

    }

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                isAuthenticated: user !== null,
                loading,
                logout
            }}
        >
            {children}


        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
};
