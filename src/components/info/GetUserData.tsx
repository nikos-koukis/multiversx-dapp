import {
    Modal,
    ModalContent,
    Text,
    Link,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Spinner,
    Flex,
    ModalHeader,
    Stack,
    Box,
    Card,
    CardHeader,
    Heading,
    CardBody,
} from '@chakra-ui/react';
import { TokenTransfer } from '@multiversx/sdk-core';
import { useAccount, useConfig } from '@useelven/core';

export const GetUserDataDemo = () => {
    const { address, nonce, balance } = useAccount();

    return (
        <Flex justifyContent="space-between" width="100%">
            <Card flex="1" marginRight="4">
                <CardHeader>
                    <Heading size='md'>User data</Heading>
                </CardHeader>
                <CardBody>
                    <Text>address: {address}</Text>
                    <Text>nonce: {nonce}</Text>
                    <Text>balance: {' '}
                        {balance
                            ? parseFloat(
                                TokenTransfer.egldFromBigInteger(balance).toPrettyString()
                            )
                            : '-'}</Text>
                </CardBody>
            </Card>
            <Card flex="1">
                <CardHeader>
                    <Heading size='md'>Login info state</Heading>
                </CardHeader>
                <CardBody>
                    <Text>loginMethod: </Text>
                    <Text>signature: </Text>
                </CardBody>
            </Card>
        </Flex>
    );
};
