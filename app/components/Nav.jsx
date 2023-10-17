import Image from "next/legacy/image"
import {logo} from "../../public/assets"
const navlinks = [
    {label: "Home", href: "/"},
    {label: "Discover", href: "#discover"},
    {label: "Plan your trip", href: "#plan-your-trip"},
    {label: "Gallery", href: "#Gallery"},
    {label: "Share your story", href: "#share-your-story"},
]

const Nav = () => {
  return (
    <header className="px-6 md:px-8 xl:px-20 py-2 h-[64px] fixed top-0 z-10 w-full bg-black-background">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <Image src={logo} alt="logo" className="" height={45} width={200} />
            </a>
            <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
                {navlinks.map(item => (
                    <li key={item.label}>
                        <a href={item.href} className="text-lg leading-normal text-white hover:text-blue-cyan font-extralight">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Nav