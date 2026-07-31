import { FaSquareFacebook } from "react-icons/fa6";
import { MdOutlineChat } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <button className="flex items-center gap-2">
      <MdOutlineChat className="text-xl" />
      WhatsApp
    </button>
  );
}

function InstargramButton() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg">
      <FaInstagram className="text-xl" />
      Instagram
    </button>
  );
}

function FacebookButton() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#1664D9] transition-colors duration-200 shadow-md hover:shadow-lg">
      <FaSquareFacebook className="text-xl" />
      Facebook
    </button>
  );
}

export { WhatsAppButton, InstargramButton, FacebookButton };