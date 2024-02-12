import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const [t] = useTranslation("global");
  return (
    <div id="about-me" className="w-screen">
      <div
        id=""
        className="justify-start items-start flex sm:pl-10 dark:text-purple-800"
      >
        <div className="text-purple-400 dark:text-purple-800 text-[32px] font-medium font-['Fira Code']">
          #
        </div>
        <div className="text-white text-[32px] font-medium font-['Fira Code'] dark:text-purple-800">
          {t("about-me.1")}
        </div>
        <img
          className="relative top-6 w-[100px] sm:w-auto sm:border-none border-2 border-purple-400"
          src="/Line.png"
          alt=""
        />
      </div>
      <div className="max-w-[600px] text-justify mx-auto font-thin px-4">
        <div className="flex justify-between">
          <i className="bx bxs-invader"></i>
          <i className="bx bxs-invader animate-bounce "></i>
          <i className="bx bxs-invader"></i>
        </div>
        <p className="leading-3 hover:leading-6 transition-all text-purple-300 hover:font-semibold hover:text-white hover:p-3 duration-400 hover:h-auto rounded-lg h-[300px] flex items-center pt-5 mt-3 hover:bg-purple-400/20  mb-10 dark:text-slate-900">
          {t("about-me.2")}
          <br />
          <br />
          {t("about-me.3")}
          <br />
        </p>
      </div>
    </div>
  );
};
export default AboutMe;
