import { Feature } from "@/types/frontend/ui"
import FeatureItem from "../atoms/feature"

export default function Features () {
  const features: Feature[] = [
    {
        label: "NFT Management",
        iconName: "nft-icon",
        bgColor: "rgba(112, 188, 99, 0.2)"
    },
    {
        label: "Find Holders",
        iconName: "finder-icon",
        bgColor: "rgba(245, 215, 46, 0.2)"
    },
    {
        label: "Airdrop",
        iconName: "airdrop-icon",
        bgColor: "rgba(46, 196, 218, 0.2)"
    },
    {
        label: "Trade-in",
        iconName: "tradein-icon",
        bgColor: "rgba(167, 76, 201, 0.2)"
    },
    {
        label: "Analytics",
        iconName: "analytics-icon",
        bgColor: "rgba(255, 79, 182, 0.2)"
    }
  ]
  return (
    <div className="w-[100vw]  p-4 flex justify-between border-b-[0.5px] border-light">
        {features.map(({label, bgColor, iconName}, index: number) => (
            <div key={index} className="w-[19%]">
                <FeatureItem label={label} bgColor={bgColor} iconName={iconName} />
            </div>
        ))}
    </div>
  )
}
