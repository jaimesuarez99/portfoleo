import { ComponentType } from "react";
import WebDesignSvg from "~/components/complexIcons/WebDesignSvg";
import WebDevelopmentSvg from "~/components/complexIcons/WebDevelopmentSvg";
import CloudComputingSvg from "~/components/complexIcons/CloudComputingSvg";
import ApiIntegrationSvg from "~/components/complexIcons/ApiIntegrationSvg";

interface Item {
  title: string;
  description: string;
  iconComponent: ComponentType;
}

const Items: Item[] = [
  {
    title: "Web Design",
    description:
      "The most modern and high-quality design made at a professional level.",
    iconComponent: WebDesignSvg,
  },
  {
    title: "Web Development",
    description: "High-quality development of sites at the professional level.",
    iconComponent: WebDevelopmentSvg,
  },
  {
    title: "API Integration",
    description:
      "The most modern and high-quality design made at a professional level.",
    iconComponent: ApiIntegrationSvg,
  },
  {
    title: "Cloud Computing",
    description:
      "The most modern and high-quality design made at a professional level.",
    iconComponent: CloudComputingSvg,
  },
];

export default Items;
