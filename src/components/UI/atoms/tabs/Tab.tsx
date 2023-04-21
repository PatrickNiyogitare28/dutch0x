import { Tab } from "@/types/frontend/ui/Tab";

export default function TabItem({label, isActive, status}: Tab){
    return (
        <div className="w-[max-content] flex flex-col">
           <label className={`text-${isActive ? 'white' : 'text-inactive'} text-[14px] }`}
             style={{
                fontWeight: isActive ? 'bold' : 'lighter'
             }}
           >{label}</label>
           {isActive && 
           <div className="w-full  flex justify-around">
             <div className="w-[5px] h-[5px] rounded-full bg-primary" />
           </div>
            }
           {status && 
            <label className="text-primary text-[12px]">{status}</label>
           }
        </div>
    )
}