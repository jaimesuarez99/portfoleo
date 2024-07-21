// import { ReactNode } from "react";

interface Props {
  testimony: String;
  name: String;
  //   isVisible?: boolean;
  //   onButtonClick: () => void;
  imageSrc: string;
}

const TestimonialsTemplate = ({ name, testimony, imageSrc }: Props) => {
  return (
    <>
      <div className="px-4 py-4 rounded-[15px] bg-secondary shadow-softui flex flex-col w-full h-full basis-1/2 shrink-0 grow gap-2 relative">
        <div className="flex flex-row gap-4 h-full">
          <div className="flex-none w-auto h-full ">
            <div className="rounded-[15px] bg-secondary shadow-softui absolute top-0 origin-top-left transform -translate-y-1/2">
              <img className="max-w-max" src={imageSrc}></img>
            </div>
          </div>
          <div className=" shrink grow">
            <h2 className="font-bold text-white text-2xl ">{name}</h2>
          </div>
        </div>
        <div className="h-full">
          <p className="font-normal text-white text-base">{testimony}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialsTemplate;
