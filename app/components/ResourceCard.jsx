import Image from "next/image";

const ResourceCard = (props) => {
  const { icon, title, text } = props;
  return (
    <div className="w-full md:w-[274px] h-[300px] bg-white rounded-md flex flex-col justify-center items-center gap-5 p-[30px]">
      <div className="w-[75px] h-[75px] flex justify-center items-center" >
        <Image
          src={icon}
          alt="resource card"
          style={{
            maxHeight: "100%",
          }} />
      </div>
      <h3 className="text-black-background text-xl font-montserrat text-center font-semibold">{title}</h3>
      <p className="text-black-background text-base text-center">{text}</p>
    </div>
  );
};

export default ResourceCard;
