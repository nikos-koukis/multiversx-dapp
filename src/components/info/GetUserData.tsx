import {
    Text,
    Flex
} from '@chakra-ui/react';
import { TokenTransfer } from '@multiversx/sdk-core';
import { useAccount, useConfig } from '@useelven/core';
import { shortenHash } from '../../../utils/shortenHash';
import { useLoginInfo } from '@useelven/core';

export const GetUserDataDemo = () => {
    const { address, nonce, balance } = useAccount();
    const { loginMethod } = useLoginInfo();

    return (
        <Flex justifyContent="space-between" width="100%" flexDirection="column" gap={10}>
            <Text>loginMethod: {loginMethod}</Text>
            <Text>address: {shortenHash(address, 8)}</Text>
            <Text>nonce: {nonce}</Text>
            <Text>balance: {' '}
                {balance
                    ? parseFloat(
                        TokenTransfer.egldFromBigInteger(balance).toPrettyString()
                    )
                    : '-'}</Text>
        </Flex>
    );
};
