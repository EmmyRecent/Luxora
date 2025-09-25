type HowItemProps = {
  title: string;
  description: string;
};

const HowItem = ({ title, description }: HowItemProps) => {
  return (
    <div className="border-secondary how border-b py-6">
      <h4 className="text-tertiary pb-4 text-end text-base font-semibold capitalize md:text-lg">
        {title}
      </h4>

      <p className="text-tertiary text-end text-sm font-normal md:text-base">
        {description}
      </p>
    </div>
  );
};

export default HowItem;
