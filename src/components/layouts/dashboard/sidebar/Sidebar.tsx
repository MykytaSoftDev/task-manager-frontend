import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'

import { LogoutButton } from '@/components/ui/buttons/LogoutButton'

import { COLORS } from '@/constants/color.constants'

import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'

export default function Sidebar() {
	return (
		<aside className='border-r border-r-border h-full bg-sidebar flex flex-col justify-between'>
			<div>
				<Link
					href='/'
					className='flex items-center gap-2.5 p-layout border-b border-b-border'
				>
					<GanttChartSquare
						color={COLORS.primary}
						size={38}
					/>
					<span className='text-2xl font-bold relative'>TManager</span>
				</Link>
				<div className='p-3 relative'>
					<LogoutButton />
					{MENU.map(item => (
						<MenuItem
							item={item}
							key={item.link}
						/>
					))}
				</div>
			</div>
		</aside>
	)
}
