import {
  BsSunFill,
  BsFillCloudSunFill,
  BsCloudsFill,
  BsSnow2,
} from "react-icons/bs"
import { AiTwotoneCloud } from "react-icons/ai"
import { FaCloudShowersHeavy } from "react-icons/fa"
import { IoThunderstormSharp } from "react-icons/io5"
import { RiMistFill } from "react-icons/ri"

const Icons = ({ icon }) => {
  if (icon === "01d") return <BsSunFill />
  else if (icon === "02d") return <BsFillCloudSunFill />
  else if (icon === "03d") return <AiTwotoneCloud />
  else if (icon === "04d") return <BsCloudsFill />
  else if (icon === "10d") return <FaCloudShowersHeavy />
  else if (icon === "11d") return <IoThunderstormSharp />
  else if (icon === "13d") return <BsSnow2 />
  else if (icon === "50d") return <RiMistFill />
  else return <BsSunFill />
}

export default Icons
