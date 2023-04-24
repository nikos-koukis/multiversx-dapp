import { useCallback, memo, useState } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { ActionButton } from '@/components/tools/ActionButton';
import { useLogin, LoginMethodsEnum } from '@useelven/core';
import { WalletConnectQRCode } from '@/components/tools/WalletConnectQRCode';


export const LoginComponent = (() => {

    // If you need the auth signature and token pas your unique token in useLogin
    // all auth providers will return the signature, it will be saved in localstorage and global state
    // For the demo purposes here is a dummy token
    const {
        login,
        isLoggedIn,
        error,
        walletConnectUri,
        getHWAccounts,
        walletConnectPairingLogin,
        walletConnectPairings,
        walletConnectRemovePairing,
        setLoggingInState,
    } = useLogin({ token: 'token_just_for_testing_purposes' });


    const [loginMethod, setLoginMethod] = useState<LoginMethodsEnum>();

    const handleLogin = useCallback(
        (type: LoginMethodsEnum, ledgerAccountsIndex?: number) => () => {
            setLoginMethod(type);
            login(type, ledgerAccountsIndex);
        },
        [login]
    );

    const backToOptions = useCallback(() => {
        setLoggingInState('error', '');
    }, [setLoggingInState]);

    if (error)
        return (
            <Stack>
                <Box textAlign="center">{error}</Box>
                <ActionButton isFullWidth onClick={backToOptions}>
                    Back
                </ActionButton>
            </Stack>
        );

    return (
        <>
            <Stack spacing={4} direction="column" align="center">
                {!isLoggedIn && (
                    <>
                        <ActionButton
                            isFullWidth
                            onClick={handleLogin(LoginMethodsEnum.wallet)}
                        >
                            MultiversX Web Wallet
                        </ActionButton>
                        <ActionButton
                            isFullWidth
                            onClick={handleLogin(LoginMethodsEnum.walletconnect)}
                        >
                            xPortal Mobile App
                        </ActionButton>
                    </>
                )}
            </Stack>
            {loginMethod === LoginMethodsEnum.walletconnect && walletConnectUri && (
                <Box mt={5}>
                    <WalletConnectQRCode uri={walletConnectUri} />
                </Box>
            )}
        </>
    );
});