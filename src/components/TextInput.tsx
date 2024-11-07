import Label from "./Label";

interface ITextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function TextInput({
  label,
  placeholder,
  value,
  onChange,
}: ITextInputProps) {
  return (
    <div className="flex flex-col">
      <Label>{label}</Label>
      <input
        placeholder={placeholder}
        value={value}
        type="text"
        onChange={onChange}
        className="bg-white 
            w-full h-[41px] 
            border 
            border-brown-light 
            border-solid 
            rounded-[10px] 
            px-[17px] 
            font-light 
            placeholder:text-sm 
            placeholder:font-light"
      />
    </div>
  );
}
