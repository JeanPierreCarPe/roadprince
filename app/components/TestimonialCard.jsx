import Image from "next/legacy/image";

const TestimonialCard = (props) => {
  const { image, name, text } = props;
  return (
    <div className="flex flex-col w-full md:w-[368px] h-full md:h-[260px] p-2 md:p-8 gap-3 xl:gap-5">
      <div className="flex flex-col xl:flex-row justify-start items-center gap-3 xl:gap-5">
        <div className="w-20 h-20 rounded-full flex justify-center items-center overflow-hidden">
          <Image src={image} alt="user photo" fill />
        </div>
        <h3 className="text-xl text-white font-montserrat font-semibold">
          {name}
        </h3>
      </div>
      <p className="text-white text-base text-center xl:text-left font-light">
        {text}
      </p>
    </div>
  );
};

export default TestimonialCard;
