import { useTranslation } from "react-i18next";

const Home = () => {
  const [t] = useTranslation("global");
  return (
    <section
      id="home"
      className="max-w-[500px] min-h-[168px] top-[52px] mx-[auto] relative grid grid-rows-2 px-3 my-auto dark:text-slate-900"
    >
      <div className="mt-20">
        <h1 className="font-semibold text-3xl ">
          Mauricio <br></br>
          <span className="text-[#C778DD] dark:text-purple-800">
            {t("home.home-1")}
          </span>{" "}
        </h1>
      </div>
      <p className="text-sm font-thin">{t("home.home-2")}</p>
    </section>
  );
};
export default Home;
