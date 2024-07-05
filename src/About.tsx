export const About = () => {
  return (
    <>
      <section className="flex flex-col gap-4">
        <h1 className="font-bold text-4xl text-white pb-5 after:content[''] relative  after:w-[40px] after:h-[5px] after:absolute after:bg-accent after:bottom-0 after:left-0 after:rounded-md">
          About Me
        </h1>
        <p className="font-normal text-base text-white">
          As a Multimedia Engineer graduate from the prestigious University San
          Buenaventura, I have honed my entrepreneurial profile by combining
          multimedia, digital marketing, and web programming to create and
          implement exceptional ideas, applications, and solutions. My abilities
          have led businesses to higher levels of competitiveness and
          functionality. As an active learner, I continuously acquire new tools
          and technologies to stay ahead of the curve.
        </p>
      </section>
      <section>
        <h1 className="font-bold text-4xl text-white pb-5">What I'm Doing</h1>
        {/* <div>
          <ul>
            <li className="rounded-[15px] bg-secondary shadow-softui">
              <span className="icon-webdesign block w-icon-64">
                <span className="path1 w-icon-64 block"></span>
                <span className="path2 w-icon-64 block"></span>
                <span className="path3 w-icon-64 block"></span>
                <span className="path4 w-icon-64 block"></span>
                <span className="path5 w-icon-64 block"></span>
                <span className="path6 w-icon-64 block"></span>
              </span>
              <div>
                <h2 className="font-bold  text-white text-2xl">Web Design</h2>
                <p className="font-normal text-white text-base">
                  The most modern and high-quality design made at a professional
                  level.
                </p>
              </div>
            </li>
          </ul>
        </div> */}
      </section>
      <section></section>
    </>
  );
};
