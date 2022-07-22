import { BigNumber } from "ethers";

import { Flex } from "../../../components/Box";
import { Button } from "../../../components/Button";
import { Countdown } from "../../../components/Countdown";
import { WaitingForOpponentContext } from "../../../components/GameContext";
import { useInfoModal } from "../../../components/Modal";
import { Text } from "../../../components/Text";
import { useToast } from "../../../components/Toast";
import useStore from "../../../state";
import { RockPaperScissors } from "../../../typechain-types"
import StyledBackground from "../../StyledBackground";

interface Props {
    gameId: BigNumber;
    contract: RockPaperScissors;
    wrapper: RockPaperScissors.GameWrapperStructOutput;
    callback: () => Promise<void>;
}

const margin = '8px auto';

const WaitingForOpponent = ({ gameId, contract, wrapper, callback }: Props) => {
    const { toastSuccess, toastError, toastInfo } = useToast();
    const setTransactionPending = useStore(x => x.setTransactionPending);
    const transactionPending = useStore(x => x.transactionPending);
    const { onPromptModal } = useInfoModal(<WaitingForOpponentContext wrapper={wrapper} />);

    const duration = wrapper.context.waitingForOpponentTimeout;
    const remaining = wrapper.game.updateTimestamp
        .add(duration)
        .sub(wrapper.timestamp);

    const abortGame = async () => {
        try {
            setTransactionPending(true);
            const tx = await contract.abortGame(gameId);
            toastInfo('Abort transaction', 'Abort transaction was submitted');
            await tx.wait();
            toastSuccess('Abort transaction', 'Abort transaction was mined');
        } catch (error: any) {
            if (error.code === 4001)
                return;
            console.error(error);
            toastError('Abort transaction', 'Error occured while processing abort transaction');
        } finally {
            setTransactionPending(false);
        }
    }

    return (
        <Flex justifyContent='center' alignItems='center' height='100%' margin='0 4px'>
            <form>
                <StyledBackground>
                    <Flex flexDirection='column' justifyContent='center' alignItems='center' width='100%' padding='8px'>
                        <Text fontSize='18px' margin={margin}>Waiting for opponent to join the game</Text>
                        <Button margin={margin} type='button' variant='info' onClick={onPromptModal}>Game context</Button>
                        <Text fontSize='18px' margin={margin}>Time left for opponent to join</Text>
                        <Countdown duration={duration.toNumber()} remaining={remaining.toNumber()} callback={callback} />
                        <Text fontSize='18px' textAlign='center' margin={margin}>Or before that you can abort and claim back pot</Text>
                        <Button margin={margin} variant='warning' disabled={transactionPending} onClick={abortGame}>Abort game</Button>
                    </Flex>
                </StyledBackground>
            </form>
        </Flex>
    )
}

export default WaitingForOpponent;