import styled from 'styled-components';

import WalletCard from './WalletCard';
import config, { walletLocalStorageKey } from './config';
import { Config, Login } from './types';
import { Box, Flex } from '../../Box';
import { ModalBody, ModalCloseButton, ModalContainer, ModalHeader, ModalTitle } from '../styles';
import Heading from '../../Heading';

interface Props {
    login: Login;
    onDismiss?: () => void;
}

const WalletWrapper = styled(Box)`
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const getPriority = (priority: Config["priority"]) => (typeof priority === "function" ? priority() : priority);

/**
 * Checks local storage if we have saved the last wallet the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted config
 */
const getPreferredConfig = (walletConfig: Config[]) => {
    const sortedConfig = walletConfig.sort((a: Config, b: Config) => getPriority(a.priority) - getPriority(b.priority));

    const preferredWalletName = localStorage?.getItem(walletLocalStorageKey);

    if (!preferredWalletName) {
        return sortedConfig;
    }

    const preferredWallet = sortedConfig.find((sortedWalletConfig) => sortedWalletConfig.title === preferredWalletName);

    if (!preferredWallet) {
        return sortedConfig;
    }

    return [
        preferredWallet,
        ...sortedConfig.filter((sortedWalletConfig) => sortedWalletConfig.title !== preferredWalletName),
    ];
};

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => {
    const sortedConfig = getPreferredConfig(config);
    // Filter out WalletConnect if user is inside TrustWallet built-in browser
    const walletsToShow = sortedConfig;

    return (
        <ModalContainer minWidth="320px">
            <ModalHeader>
                <ModalTitle>
                    <Heading>Connect Wallet</Heading>
                </ModalTitle>
                <ModalCloseButton onDismiss={onDismiss} />
            </ModalHeader>
            <ModalBody width={["320px", null, "340px"]}>
                <WalletWrapper py='8px' maxHeight="453px" overflowY="auto">
                    <Flex flexDirection='column'>
                        {walletsToShow.map((wallet) => (
                            <Box margin='4px 8px' key={wallet.title}>
                                <WalletCard walletConfig={wallet} login={login} onDismiss={onDismiss} />
                            </Box>
                        ))}
                    </Flex>
                </WalletWrapper>
            </ModalBody>
        </ModalContainer>
    );
};

export default ConnectModal;
