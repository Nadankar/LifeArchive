import { Stack } from "expo-router";

function LibraryLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        />
    );
}

export default LibraryLayout;