import { FC } from "react";
import Collapsible from "./Collapsible";
import type { GameContext } from '../../typechain-types/contracts/RockPaperScissors'
import { Text } from '../Text';
import { TooltipLabel } from "../Tooltip";
import numberToTimeString from "../../utils/numberToTimeString";

interface Props {
    context: GameContext.ContextDataStructOutput | undefined;
    margin?: string;
    width?: string;
}

const CollapsibleGameContext: FC<Props> = ({ context, margin = 'auto', width = 'auto' }) => {
    return (<Collapsible title='Game context' margin={margin} width={width}>
        {
            context ? (
                <>
                    <TooltipLabel tooltipText='After join timeout has occurred no one can join this game'>Join timeout: {numberToTimeString(context.waitingForOpponentTimeout.toNumber())}</TooltipLabel>
                    <TooltipLabel tooltipText='After move timeout has occurred no one can submit or validate move'>Move timeout: {numberToTimeString(context.moveTimeout.toNumber())}</TooltipLabel>
                    <TooltipLabel tooltipText={'After claim timeout has occurred anyone can claim game\'s pot'}>Claim timeout: {numberToTimeString(context.claimTimeout.toNumber())}</TooltipLabel>
                    <TooltipLabel tooltipText='Maximum score a player can achieve'>Score threshold: {context.scoreThreshold}</TooltipLabel>
                    <TooltipLabel tooltipText='Maximum amount of rounds that can be played'>Round threshold: {context.roundThreshold}</TooltipLabel>
                    <TooltipLabel tooltipText='A percentage of pot that owner is going receive'>Owner tip: {context.ownerTipRate.div(100).toNumber().toFixed(2)}%</TooltipLabel>
                    <TooltipLabel tooltipText='A percentage of pot that referral is going receive'>Referral tip: {context.referralTipRate.div(100).toNumber().toFixed(2)}%</TooltipLabel>
                </>
            ) :
                <Text fontSize='20px' margin='4px'>Could not load game context</Text>
        }
    </Collapsible>)
}

export default CollapsibleGameContext;
