import { useState } from "react";

import Label from "./Label";
import dynamic from "next/dynamic";

interface ITextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement> | string) => void;
}

const DaumPostcode = dynamic(() => import("react-daum-postcode"), {
  ssr: false,
});

export default function TextInput({
  label,
  placeholder,
  value,
  onChange,
}: ITextInputProps) {
  const [openPostcode, setOpenPostcode] = useState(false);

  const handleClick = () => {
    setOpenPostcode(true);
  };

  const handleComplete = (data: { address: string }): void => {
    onChange(data.address);
    setOpenPostcode(false);
  };

  const postCodeStyle = {
    width: "350px",
    height: "400px",
  };

  return (
    <div className="flex flex-col">
      <Label>{label}</Label>
      <div className="flex justify-between">
        <input
          placeholder={placeholder}
          value={value}
          type="text"
          onChange={e => onChange(e)}
          className="
          bg-white 
            flex-1
            mr-2
            h-[41px] 
            border 
            border-brown-light 
            border-solid 
            rounded-[10px] 
            px-[17px] 
            font-light 
            text-xs
            placeholder:text-xs 
            placeholder:font-light"
        />
        <button
          onClick={handleClick}
          className="px-[8px] h-[41px] rounded-[8px] bg-brown-light font-light text-xs text-yellow"
        >
          주소검색
        </button>
        {openPostcode && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setOpenPostcode(false)}
          >
            <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
          </div>
        )}
      </div>
    </div>
  );
}
