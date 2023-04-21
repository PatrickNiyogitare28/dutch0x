export default function Badge(){
    return (
        <div className="p-2  flex items-center gap-2 rounded-[4px] bg-switch-light">
            <div className="w-3 h-3 rounded-full bg-switch-default" />
            <label className="text-[12px] text-switch-default">STATUS</label>
        </div>
    )
}