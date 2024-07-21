import WhatImDoingItems from "~/Utils/whatImDoingTexts";
import TestimonialsItems from "~/Utils/TestimonialTexts";

import WhatImDoingTemplate from "./components/WhatImDoingTemplate";
import TestimonialsTemplate from "./components/TestimonialsTemplate";

export const About = () => {
  const whatImDoingItems = () => {
    return WhatImDoingItems.map((item, index) => (
      <WhatImDoingTemplate
        key={index}
        title={item.title}
        description={item.description}
        iconComponent={<item.iconComponent />}
      />
    ));
  };

  const Testimonials = () => {
    return TestimonialsItems.map((item, index) => (
      <TestimonialsTemplate
        key={index}
        name={item.name}
        testimony={item.testimony}
        imageSrc={item.imageSrc}
      />
    ));
  };

  return (
    <>
      <div className="space-y-8">
        <section className="flex flex-col gap-4">
          <h1 className="font-bold text-4xl text-white pb-5 after:content[''] relative after:w-[50px] after:h-[5px] after:absolute after:bg-accent after:bottom-0 after:left-0 after:rounded-md">
            About Me
          </h1>
          <p className="font-normal text-base text-white">
            As a Multimedia Engineer graduate from the prestigious University
            San Buenaventura, I have honed my entrepreneurial profile by
            combining multimedia, digital marketing, and web programming to
            create and implement exceptional ideas, applications, and solutions.
            My abilities have led businesses to higher levels of competitiveness
            and functionality. As an active learner, I continuously acquire new
            tools and technologies to stay ahead of the curve.
          </p>
        </section>
        <section>
          <h2 className="font-bold text-4xl text-white mb-5">What I'm Doing</h2>
          <div className="flex flex-wrap -mx-4">{whatImDoingItems()}</div>
        </section>
        <section>
          <h2 className="font-bold text-4xl text-white -mt-6 mb-5 ">
            Testimonials
          </h2>
          <div className="flex flex-row flex-nowrap gap-6 overflow-x-scroll py-12 px-4">
            {Testimonials()}
          </div>
        </section>
      </div>
    </>
  );
};
