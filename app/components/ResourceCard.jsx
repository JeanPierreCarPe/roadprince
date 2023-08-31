import Image from "next/image";

const ResourceCard = (props) => {
  const { icon, title, text } = props;
  return (
    <div className="w-[274px] h-[300px] bg-white rounded-md flex flex-col justify-center items-center gap-5 p-[30px]">
      <Image src={icon} alt="resource card" height={75}/>
      <h3 className="text-black-background text-xl font-montserrat font-semibold">{title}</h3>
      <p className="text-black-background text-lg text-center">{text}</p>
    </div>
  );
};

export default ResourceCard;
