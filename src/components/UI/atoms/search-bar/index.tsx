import Image from "next/image";

export default function SearchBar() {
  return (
    <div className="flex py-2 items-center justify-between px-4  rounded-[8px] border-[rgba(255,255,255,0.1)] border-[0.5px]">
      <div className="flex gap-4 w-[90%] ">
        <Image src="/assets/icons/search-icon.svg" alt="search" width={20} height={20} />
        <input
          placeholder="Enter name or ID"
          className="w-[80%] bg-transparent outline-none text-sm"
          style={{ fontWeight: 'lighter', color: 'white' }} // Add color property with value 'white'
        />
      </div>
      <div className="w-6 h-6 bg-[rgba(255,255,255,0.1)] rounded-sm flex justify-around">
        <label className="text-text-inactive">/</label>
      </div>
    </div>
  );
}
