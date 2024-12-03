
// import Profile from '../header/profile/Profile'
// import Image from 'next/image'

export function Header() {
	return (
		<header className="flex justify-end items-center min-h-[75px] max-lg:justify-start">
			<div className="flex items-center bg-white/5 rounded-lg w-full h-full px-10 max-lg:px-2">
				<div className="flex flex-start w-2/4 font-black tracking-widest text-center max-lg:hidden">
					ПЛАТФОРМА 1.0
				</div>
				<div className="flex w-2/4 max-lg:w-full gap-5 justify-end items-center ">
					{/* <Profile /> */}
					Ли Владислав
					{/* <LogoutButton /> */}
				</div>
			</div>
		</header>
	)
}
