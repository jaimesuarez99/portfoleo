import { ReactNode } from "react";

interface Props {
  description: String;
  title: String;
  //   isVisible?: boolean;
  //   onButtonClick: () => void;
  iconComponent: ReactNode;
}

const WhatImDoingTemplate = ({
  title = "",
  description = "",
  iconComponent,
}: Props) => {
  return (
    <>
      <div className="w-full shrink flex-grow basis-1/2 px-4 mb-6">
        <ul className="h-full">
          <li className="px-4 py-8 h-full rounded-[15px] bg-secondary shadow-softui flex gap-4">
            <span className="icon-webdesign block w-icon-64">
              {iconComponent}
            </span>
            <div>
              <h2 className="font-bold  text-white text-2xl">{title}</h2>
              <p className="font-normal text-white text-base">{description}</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WhatImDoingTemplate;
