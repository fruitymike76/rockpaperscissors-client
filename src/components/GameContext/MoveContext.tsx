import { RockPaperScissors } from "../../typechain-types";
import { Text } from '../Text';
import { Flex } from '../Box';
import GameContextView from './GameContextView';
import { utils } from 'ethers';

interface Props {
    wrapper: RockPaperScissors.GameWrapperStructOutput | undefined;
}

const MoveContext = ({ wrapper }: Props) => {
    if (!wrapper)
        return <Text fontSize='20px'>Context was not provided</Text>

    return (
        <>
            <Flex flexDirection='row'>
                <Text fontSize='20px' margin='4px'>Challenger: {wrapper.game.challenger.adr}</Text>
            </Flex>
            <Flex flexDirection='row'>
                <Text fontSize='20px' margin='4px'>Opponent: {wrapper.game.opponent.adr}</Text>
            </Flex>
            <Flex flexDirection='row'>
                <Text fontSize='20px' margin='4px'>Pot: {utils.formatEther(wrapper.game.pot)}</Text>
            </Flex>
            <GameContextView context={wrapper.context} />
        </>
    )
}

export default MoveContext;
