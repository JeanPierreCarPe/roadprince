import Image from "next/image";

const ImageSquare = (props) => {
  const { image, type } = props;
  if (type === "info") {
    return (
      <div className="h-[48%] md:h-[214px] w-[48%] md:w-[214px] relative overflow-hidden flex justify-center items-center rounded-md">
        <Image
          src={image}
          alt="road image"
          fill
          style={{
            maxWidth: "100%"
            
          }} />
      </div>
    );
  }
  if (type === "gallery") {
    return (
      <div className="h-[200px] md:h-[300px] w-full md:w-[350px] relative overflow-hidden flex justify-center items-center rounded-md bg-white">
        <Image
          src={image}
          alt="road image"
          fill
          style={{
            maxWidth: "100%"
            
          }} />
      </div>
    );
  }
};

export default ImageSquare;
