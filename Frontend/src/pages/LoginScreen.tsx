
import { View, Text, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { getCurrentUser, loginUser } from "@/services/authService";
import { useAuth } from "@/context/AuthContext";

function LoginScreen() {
    const router = useRouter();
    const { setUser } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setError("");

        try {
            setLoading(true);

            await loginUser({ email, password });

            const currentUser = await getCurrentUser();
            setUser(currentUser);

            router.replace("/home");
        }
        catch (error: any) {
            setError(
                error.response?.data?.message ||
                error.message ||
                "Registration failed."
            );
        }
        finally {
            setLoading(false); 
        }
    }

    return (
        <View className="flex-grow justify-center px-7  ">
            <View className="shadow-md rounded-2xl py-12 px-10">
                <View className="mb-10">
                    <View className="mb-5 h-14 w-14 items-center justify-center rounded-2xl bg-[#E9D8C8]">
                        <Text className="text-3xl">♡</Text>
                    </View>

                    <Text className="text-4xl font-bold text-[#352C27]">
                        Welcome Back
                    </Text>

                    <Text className="mt-3 text-base text-[#8A7C72]">
                        Your memories are waiting for you.
                    </Text>
                </View>

                <View className="gap-5">
                    <View>
                        <Text className="mb-2 font-semibold text-[#51443B]">
                            Email Address
                        </Text>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Enter your email"
                            placeholderTextColor="#A99B91"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            className="rounded-2xl border border-[#E7DDD2] bg-white px-4 py-4 text-base text-[#352C27]"
                        />
                    </View>

                    <View>
                        <Text className="mb-2 font-semibold text-[#51443B]">
                            Password
                        </Text>
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Enter your password"
                            placeholderTextColor="#A99B91"
                            secureTextEntry
                            className="rounded-2xl border border-[#E7DDD2] bg-white px-4 py-4 text-base text-[#352C27]"
                        />
                    </View>
                    {error ? (
                        <Text className="text-red-500 text-sm">
                            {error}
                        </Text>
                    ) : null}

                    <Pressable
                        onPress={handleLogin}
                        disabled={loading}
                        className="mt-3 items-center rounded-2xl bg-[#A56B50] py-4"
                    >
                        <Text className="text-base font-bold text-white">
                            {loading ? "Logging in..." : "Login"}
                        </Text>
                    </Pressable>
                </View>

                <View className="mt-8 flex-row justify-center">
                    <Text className="text-[#8A7C72]">
                        Don't have an account?{" "}
                    </Text>

                    <Pressable onPress={() => router.push("/register")}>
                        <Text className="font-bold text-[#A56B50]">
                            Register
                        </Text>
                    </Pressable>
                </View>

            </View>
        </View>
    );
}


export default LoginScreen;


