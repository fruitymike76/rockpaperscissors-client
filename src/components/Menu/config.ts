import type { MenuItemsType } from '../MenuItems';
import {
    GithubIcon,
    MediumIcon,
    TelegramIcon,
    DiscordIcon,
    TwitterIcon
} from '../Svg'

export const links: MenuItemsType[] = [
    {
        label: 'Play',
        href: '/rockpaperscissors-client/newgame',
        items: [
            {
                label: 'Create game',
                href: '/rockpaperscissors-client/newgame'
            },
            {
                label: 'Find game',
                href: '/rockpaperscissors-client/findgames'
            }
        ]
    },
    {
        label: 'Withraw',
        href: '/rockpaperscissors-client/referral',
        items: [
            {
                label: 'Referral',
                href: '/rockpaperscissors-client/referral'
            },
            {
                label: 'Claim',
                href: '/rockpaperscissors-client/claim'
            }
        ]
    }
];

export const socials = [
    {
        label: 'Telegram',
        icon: TelegramIcon,
        href: 'https://t.me/pancakeswap'

    },
    {
        label: 'Discord',
        icon: DiscordIcon,
        href: 'https://discord.gg/GcrkbtWFj9'
    },
    {
        label: 'Twitter',
        icon: TwitterIcon,
        href: 'https://twitter.com/pancakeswap',
    },
    {
        label: 'Github',
        icon: GithubIcon,
        href: 'https://www.github.com/fruitymike76/'
    },
    {
        label: 'Medium',
        icon: MediumIcon,
        href: 'https://www.medium.com/fuckingarticle'
    }
];

export const MENU_HEIGHT = 56;
export const MENU_ENTRY_HEIGHT = 48;
