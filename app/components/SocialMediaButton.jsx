import Image from "next/legacy/image";

const SocialMediaButton = (props) => {
  const { image, alt } = props;
  return (
    <div className="flex justify-center items-center h-8 w-8 border-[1px] border-white rounded-md">
      <Image src={image} alt={alt} height={18} width={18} />
    </div>
  );
};

export default SocialMediaButton;
