import Image from "next/image";

interface BackgroundImageProps {
  height: number;
  imgSrc: string;
}

const BackgroundImage = ({ imgSrc, height }: BackgroundImageProps) => {
  return (
    <div className="bg-white">
      <div
        className="w-screen opacity-75 bg-fixed bg-cover bg-center"
        style={{
          height,
          backgroundImage: `url("${imgSrc}")`,
        }}
      ></div>
    </div>
  );
};

export default BackgroundImage;
