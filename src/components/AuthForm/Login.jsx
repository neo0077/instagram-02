import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const { loading, error, login } = useLogin();
    return (
        <>
            <Input
                placeholder='Enter email'
                fontSize={16}
                type='email'
                size={"md"}
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <Input
                placeholder='Enter password'
                fontSize={16}
                size={"md"}
                type='password'
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
            {error && (
                <Alert status='error' fontSize={16} p={2} borderRadius={4}>
                    <AlertIcon fontSize={14} />
                    {error.message}
                </Alert>
            )}
            <Button
                w={"full"}
                colorScheme='blue'
                size={"sm"}
                fontSize={14}
                isLoading={loading}
                onClick={() => login(inputs)}
            >
                Log in
            </Button>
        </>
    );
};

export default Login;