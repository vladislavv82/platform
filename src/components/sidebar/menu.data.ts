import { House, User} from 'lucide-react'

import type { IMenuItem } from './menu.interface'
import { PUBLIC_PAGES } from '@/config/public.config'
import { USER_PAGES } from '@/config/user.config'

export const MENU: IMenuItem[] = [
	{
		icon: House,
		link: PUBLIC_PAGES.HOME,
		name: 'Главная'
	},
	{
		icon: User,
		link: USER_PAGES.PROFILE,
		name: 'Профиль'
	},
]
