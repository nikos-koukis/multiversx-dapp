import { useEffect, useState, FunctionComponent } from 'react';
import { Box } from '@chakra-ui/react';
import { useConfig } from '@useelven/core';
import QRCode from 'qrcode';

interface WalletConnectQRCodeProps {
    uri: string;
}
export const WalletConnectQRCode: FunctionComponent<WalletConnectQRCodeProps> = ({ uri }) => {

    const [qrCodeSvg, setQrCodeSvg] = useState('');
    const { walletConnectDeepLink } = useConfig();

    useEffect(() => {
        const generateQRCode = async () => {
            if (!uri) {
                return;
            }
            const svg = await QRCode.toString(uri, {
                type: 'svg',
            });
            setQrCodeSvg(svg);
        };
        generateQRCode();
    }, [uri]);

    return (
        <Box
            sx={{
                svg: {
                    borderRadius: 'xl',
                },
            }}
            dangerouslySetInnerHTML={{
                __html: qrCodeSvg,
            }}
        />
    );
};
