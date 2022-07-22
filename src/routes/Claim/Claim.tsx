import { useState, useEffect } from "react";
import { ContractReceipt, utils } from 'ethers';

import { Box, Flex } from "../../components/Box";
import { useActiveWeb3React, useRockPaperScissorsContract } from "../../hooks";
import retryPromise from "../../utils/retryPromise";
import { NotConnectedCard } from "../Game/components/Card";
import { useToast } from "../../components/Toast";
import isBigNumberish from "../../utils/isBigNumberish";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import useStore from "../../state";
import StyledBackground from "../StyledBackground";
import { Fade } from "../../components/AnimationWrapper";

const ZERO_BALANCE = '0.0';

const tryGetAmount = (receipt: ContractReceipt): string | undefined => {
    const events = receipt.events;

    if (!events)
        return undefined;

    const args = events[0].args;

    if (!args)
        return undefined;

    const amount = args['amount'];

    if (!isBigNumberish(amount))
        return undefined;

    return utils.formatEther(amount);
}

const margin = '8px auto';
const blockMargin = '8px';

const Claim = () => {
    const setTransactionPending = useStore(x => x.setTransactionPending);
    const transactionPending = useStore(x => x.transactionPending);
    const { toastError, toastSuccess } = useToast();
    const [balance, setBalance] = useState(ZERO_BALANCE);
    const { account, error } = useActiveWeb3React();
    const contract = useRockPaperScissorsContract(true);

    const getBalance = async () => {
        if (!account || error || !contract)
            return;

        try {
            const accountBalance = await retryPromise(contract.balances(account), 2);
            const formatValue = utils.formatEther(accountBalance);
            setBalance(formatValue);
        } catch (error) {
            console.error(error);
            toastError('Fetch error', 'Error occurred while fetching balance');
        }
    }

    const withrawBalance = async () => {
        if (!account || error || !contract)
            return;

        try {
            setTransactionPending(true);
            const tx = await retryPromise(contract.withraw(), 2);
            const receipt = await tx.wait();
            const amount = tryGetAmount(receipt);
            const msg = amount ? 'Withraw completed successfully' : `Withraw completed successfully, you received ${balance} BNB`;
            toastSuccess('Withraw transaction', msg);
            setBalance(ZERO_BALANCE);
        } catch (error) {
            console.error(error);
            toastError('Withraw error', 'Error occurred while withrawing');
        } finally {
            setTransactionPending(false);
        }
    }

    useEffect(() => {
        getBalance();
    }, [account]);

    if (!account || error)
        return <NotConnectedCard />

    return (
        <Flex justifyContent='center' alignItems='center' height='100%'>
            <Box margin={margin}>
                <StyledBackground>
                    <Box padding='8px'>
                        <Flex margin={blockMargin}>
                            <Text fontSize='18px'>
                                For playing for and/or referring this game you're eligible to claim:
                            </Text>
                        </Flex>
                        <Flex margin={blockMargin} justifyContent='center'>
                            <Text fontSize='18px'>
                                <Fade value={balance}><>{balance} BNB</></Fade>
                            </Text>
                        </Flex>
                        <Flex margin={blockMargin} justifyContent='center'>
                            <Text fontSize='18px'>
                                In order to claim click below
                            </Text>
                        </Flex>
                        <Flex justifyContent='center'>
                            <Button variant='success' onClick={withrawBalance} disabled={balance === ZERO_BALANCE || transactionPending}>Claim</Button>
                        </Flex>
                    </Box>
                </StyledBackground>
            </Box>
        </Flex>
    )
}

export default Claim;