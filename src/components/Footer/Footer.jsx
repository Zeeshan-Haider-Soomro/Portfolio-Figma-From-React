import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = ({data}) => {
    const {title, about, email} = data
  return (
    <div className="max-w-4xl m-auto p-3 mt-44 pb-28">
        <h1 className="font-extrabold text-3xl mb-5">{title}</h1>
        <p className="mb-5">{about}</p>
        <p className="mb-5">{email}</p>
        <div className="flex text-2xl gap-5 hover:cursor-pointer">
        <FaInstagram />
        <FaXTwitter />
        <AiOutlineYoutube />
        </div>
    </div>
  )
}

export default Footer