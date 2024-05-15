
interface Props {
  title: string
  year: string
  roro: string
  lolo: string
}

const SkilsItem = ({ title, year, roro, lolo}: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem] scroll-container">
      <h1 className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]">
        {year}
      </h1>
      <h1 className="mt-[2rem] capitalize font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[34px] text-white">
        {title}
      </h1>
      <p className="text-[#aaaaaa] font-normal w-[80%] text-[25px]">{roro}</p>
      <p className="text-[#aaaaaa] font-normal w-[80%] text-[25px]">{lolo}</p>
    </div>
  )
}

export default SkilsItem
