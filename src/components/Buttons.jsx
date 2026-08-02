import { FaSquareFacebook } from "react-icons/fa6";
import { MdOutlineChat } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

// Mapas de clases completas: Tailwind necesita ver el string literal
// completo en el código para generar el CSS. No arma clases con
// template strings (`px-${px}`) porque eso no lo puede detectar.
const roundedMap = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

const paddingXMap = {
  2: "px-2",
  3: "px-3",
  4: "px-4",
  5: "px-5",
  6: "px-6",
  8: "px-8",
};

const paddingYMap = {
  2: "py-2",
  3: "py-3",
  4: "py-4",
  5: "py-5",
  6: "py-6",
  8: "py-8",
};

function WhatsAppButton({ rounded = "lg", px = 4, py = 2 }) {
  const roundedClass = roundedMap[rounded] ?? roundedMap.lg;
  const pxClass = paddingXMap[px] ?? paddingXMap[4];
  const pyClass = paddingYMap[py] ?? paddingYMap[2];

  return (
    <button
      className={`flex items-center gap-2 ${pxClass} ${pyClass} bg-green-500 text-white ${roundedClass} font-bold hover:bg-green-600 duration-200 shadow-md hover:shadow-lg`}
    >
      <MdOutlineChat className="text-xl" />
      WhatsApp
    </button>
  );
}

function InstargramButton({ rounded = "lg", px = 4, py = 2 }) {
  const roundedClass = roundedMap[rounded] ?? roundedMap.lg;
  const pxClass = paddingXMap[px] ?? paddingXMap[4];
  const pyClass = paddingYMap[py] ?? paddingYMap[2];

  return (
    <button
      className={`flex items-center gap-2 ${pxClass} ${pyClass} font-bold bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] text-white ${roundedClass} transition-all duration-200 shadow-md hover:shadow-lg`}
    >
      <FaInstagram className="text-xl" />
      Instagram
    </button>
  );
}

function FacebookButton({ px = 4, py = 2 }) {
  const pxClass = paddingXMap[px] ?? paddingXMap[4];
  const pyClass = paddingYMap[py] ?? paddingYMap[2];

  return (
    <button
      className={`flex items-center gap-2 ${pxClass} ${pyClass} font-bold bg-[#1877F2] text-white rounded-lg hover:bg-[#1664D9] transition-colors duration-200 shadow-md hover:shadow-lg`}
    >
      <FaSquareFacebook className="text-xl" />
      Facebook
    </button>
  );
}

export { WhatsAppButton, InstargramButton, FacebookButton };