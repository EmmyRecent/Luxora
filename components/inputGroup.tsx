type InputGroupProps = {
  name: string;
};

const InputGroup = ({ name }: InputGroupProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-tertiary text-base font-medium">
        {`${name[0].toUpperCase()}${name.slice(1)}`}
      </label>

      <input
        name={name}
        type={name}
        className="border-tertiary rounded-round border bg-[#FCE4D0] px-3 py-1"
      />
    </div>
  );
};

export default InputGroup;
