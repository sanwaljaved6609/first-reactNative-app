import { AuthProvider, useAuth } from "@/lib/authContext";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

function Routeguard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const {user, isLoadingUser} = useAuth();
  const segments = useSegments();

  useEffect(() => {
    const inAuthGroup = segments[0] === "auth";
    if (!user && !inAuthGroup && !isLoadingUser) {
      router.replace("/auth");
    }
    else if (user && inAuthGroup && !isLoadingUser){
      router.replace("/");
    }
  }, [user, segments]);
  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <AuthProvider>
        <Routeguard>
      <Stack>
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

          <></>
      </Stack>
        </Routeguard>
    </AuthProvider>
  );
}
