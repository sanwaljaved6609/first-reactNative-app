import { useAuth } from "@/lib/authContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>("")

  const theme = useTheme();

  const router = useRouter();

  const {signIn, signUp} = useAuth();

  const handleAuth = async() => {
    if(!email || !password){
        setError("Please fill in all the fields");
        return;
    }

    if(password.length < 6){
        setError("Password must be greater then 6 letters");
        return;
    }

    setError(null);

    if(isSignUp){
      const error = await signUp(email,password);
      if(error){
        setError(error);
        return
      }
    }
    else{
      const error = await signIn(email,password);
      if(error){
        setError(error);
        return
      }

      router.replace("/");
    }
  }

  function handleSwitch() {
    setIsSignUp((prev) => !prev);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.viewContainer}>
        <Text style={styles.heading} variant="headlineMedium">
          {isSignUp ? "Create account" : "Welcome Back"}
        </Text>

        <TextInput
          style={styles.input}
          label="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="example@gmail.com"
          mode="outlined"
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          label="Password"
          autoCapitalize="none"
          secureTextEntry
          mode="outlined"
          onChangeText={setPassword}
        />

        {error && <Text style={{color:theme.colors.error}}>{error}</Text>}

        <Button style={styles.signbtn} mode="contained" onPress={handleAuth}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>

        <Button style={styles.signbtn} mode="text" onPress={handleSwitch}>
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

//Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  viewContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  heading: {
    textAlign: "center",
    marginBottom:10
  },

  input: {
    marginBottom:12
  },

  signbtn: {
    marginTop: 12,
  },
});
