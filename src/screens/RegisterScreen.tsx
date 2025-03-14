import { useEffect, useState } from 'react';
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
    ImageBackground,
    Dimensions,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks/useAppDispatch.ts";
import { register } from "../redux/features/authSlice.ts";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const RegisterScreen = () => {
    const dispatch = useAppDispatch();
    const { isLoading, error, isAuthenticated } = useAppSelector((state) => state.auth);
    const navigation = useNavigation();

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const handleRegister = () => {
        dispatch(register(userData));
    };

    useEffect(() => {
        if (isAuthenticated) {
            // @ts-ignore
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });
        }
    }, [isAuthenticated, navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1000' }}
                style={styles.backgroundImage}
                blurRadius={3}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.keyboardAvoidingView}
                >
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <View style={styles.formContainer}>
                            <Text style={styles.title}>Join Us</Text>
                            <Text style={styles.subtitle}>Create your account today</Text>

                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>USERNAME</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="johndoe"
                                    placeholderTextColor="rgba(255,255,255,0.5)"
                                    onChangeText={(text) => setUserData({ ...userData, username: text })}
                                    autoCapitalize="none"
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>PASSWORD</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="••••••••"
                                    placeholderTextColor="rgba(255,255,255,0.5)"
                                    secureTextEntry
                                    onChangeText={(text) => setUserData({ ...userData, password: text })}
                                />
                            </View>

                            {error && <Text style={styles.errorText}>{error}</Text>}

                            {isLoading ? (
                                <View style={styles.loadingContainer}>
                                    <ActivityIndicator size="large" color="#FFFFFF" />
                                </View>
                            ) : (
                                <TouchableOpacity style={styles.button} onPress={handleRegister} activeOpacity={0.8}>
                                    <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
                                </TouchableOpacity>
                            )}

                            <View style={styles.footer}>
                                <Text style={styles.footerText}>
                                    Already have an account? <Text style={styles.footerLink}>Sign In</Text>
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    keyboardAvoidingView: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        padding: 20,
    },
    formContainer: {
        width: "100%",
        maxWidth: 400,
        alignSelf: "center",
        padding: 30,
        borderRadius: 15,
        backgroundColor: "rgba(25, 25, 35, 0.85)",
    },
    title: {
        fontSize: 32,
        fontWeight: "700",
        color: "#FFFFFF",
        marginBottom: 8,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        color: "rgba(255,255,255,0.7)",
        marginBottom: 30,
        textAlign: "center",
    },
    inputContainer: {
        marginBottom: 24,
    },
    label: {
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 1,
        color: "rgba(255,255,255,0.7)",
        marginBottom: 8,
    },
    input: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.3)",
        paddingHorizontal: 0,
        fontSize: 16,
        color: "#FFFFFF",
        backgroundColor: "transparent",
    },
    button: {
        backgroundColor: "#8A2BE2",
        height: 56,
        borderRadius: 28,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 32,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 1,
    },
    loadingContainer: {
        marginTop: 32,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
    },
    errorText: {
        color: "#FF6B6B",
        fontSize: 14,
        marginTop: 8,
        textAlign: "center",
    },
    footer: {
        marginTop: 30,
        alignItems: "center",
    },
    footerText: {
        color: "rgba(255,255,255,0.7)",
        fontSize: 14,
    },
    footerLink: {
        color: "#8A2BE2",
        fontWeight: "700",
    },
});

export default RegisterScreen;
