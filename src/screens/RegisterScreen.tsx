import { useState } from "react"
import {
    View,
    Text,
    TextInput,
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native"
import { useAppDispatch, useAppSelector } from '../hooks/useAppDispatch.ts'
import {register} from '../redux/features/authSlice.ts';


const RegisterScreen = () => {
    const dispatch = useAppDispatch()
    // @ts-ignore
    const { isLoading, error, isAuthenticated } = useAppSelector((state) => state.auth)

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    })

    const handleRegister = () => {
        dispatch(register(userData))
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardAvoidingView}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.formContainer}>
                        <Text style={styles.title}>Create Account</Text>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Username</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your username"
                                placeholderTextColor="#A0A0A0"
                                onChangeText={(text) => setUserData({ ...userData, username: text })}
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Password</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your password"
                                placeholderTextColor="#A0A0A0"
                                secureTextEntry
                                onChangeText={(text) => setUserData({ ...userData, password: text })}
                            />
                        </View>

                        {error && <Text style={styles.errorText}>{error}</Text>}

                        {isAuthenticated && (
                            <View style={styles.successContainer}>
                                <Text style={styles.successText}>Registration Successful!</Text>
                            </View>
                        )}

                        {isLoading ? (
                            <View style={styles.loadingContainer}>
                                <ActivityIndicator size="large" color="#4A90E2" />
                            </View>
                        ) : (
                            <TouchableOpacity style={styles.button} onPress={handleRegister} activeOpacity={0.8}>
                                <Text style={styles.buttonText}>Register</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
    },
    formContainer: {
        backgroundColor: "#FFFFFF",
        margin: 20,
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#333333",
        marginBottom: 24,
        textAlign: "center",
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: "500",
        color: "#333333",
        marginBottom: 6,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        color: "#333333",
        backgroundColor: "#FAFAFA",
    },
    button: {
        backgroundColor: "#4A90E2",
        height: 50,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 24,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    },
    loadingContainer: {
        marginTop: 24,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    errorText: {
        color: "#E53935",
        fontSize: 14,
        marginTop: 8,
        marginBottom: 8,
    },
    successContainer: {
        backgroundColor: "#E8F5E9",
        padding: 12,
        borderRadius: 8,
        marginTop: 8,
        marginBottom: 8,
    },
    successText: {
        color: "#2E7D32",
        fontSize: 14,
        textAlign: "center",
    },
})

export default RegisterScreen

