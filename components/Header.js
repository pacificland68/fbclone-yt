import Image from 'next/image'
import {
    BellIcon,
    ChatIcon,
    CheronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid"
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline"

function Header(){
    return(
        <div>
            {/* Left */}
            <div className="flex items-center">
                <Image src="https://links.papareact.com/5me" width={40} height={40} layout='fixed' alt=""/>
                <div className="flex">
                    <SearchIcon className="h-6"/>
                    <input className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search Facebook"/>
                </div>
            </div>

            {/* Center */}
   
            {/* Right */}
        </div>
    )
}

export default Header