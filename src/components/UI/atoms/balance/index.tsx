import Image from "next/image";

export default function Balance () {
    return (
        <div className="flex gap-2 p-2 items-center">
            <Image src="/assets/icons/amount-icon.svg" alt="Balance" width={15} height={15} />
            <label className="text-white text-sm" style={{fontWeight: 'lighter'}}>$14.04</label>
        </div>
    )
}