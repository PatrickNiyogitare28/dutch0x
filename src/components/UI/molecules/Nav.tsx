import Image from 'next/image';
import Tabs from '../atoms/tabs';
import SearchBar from '../atoms/search-bar';
import Badge from '../atoms/badge';
import Balance from '../atoms/balance';
import Notifications from '../atoms/notifications';
import UserWallet from '../atoms/wallet';

export default function Nav(){
    return (
        <div className="px-6 py-2 flex justify-between items-center h-[max-content] w-[100vw] border-b-[0.5px] border-light">
            <div>
                {/* logo */}
                <Image src="/assets/logos/logo.svg" width={150} height={50} alt="logo" />
            </div>
            <div>
                {/* tabs */}
                <Tabs />
            </div>
            <div className='w-[30%]'>
                {/* search */}
                <SearchBar />
            </div>
            <div>
                {/* status */}
                <Badge />
            </div>
            <div>
                {/* amount */}
                <Balance />
            </div>
            <div>
                {/* notification */}
                <Notifications />
            </div>
            <div>
                {/* wallet id */}
                <UserWallet />
            </div>
        </div>
    )
}