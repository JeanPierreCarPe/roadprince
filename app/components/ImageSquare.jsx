import Image from "next/image";

const ImageSquare = (props) => {
  const { image, type } = props;
  if (type === "info") {
    return (
      <div className="h-[214px] w-[214px] relative overflow-hidden flex justify-center items-center rounded-md">
        <Image src={image} alt="road image" style={{objectFit:"cover"}} />
      </div>
    );
  }
  if (type === "gallery") {
    return (
      <div className="h-[300px] w-[350px] relative overflow-hidden flex justify-center items-center rounded-md bg-white">
        <Image src={image} alt="road image" objectFit="contain" />
      </div>
    );
  }
};

export default ImageSquare;
