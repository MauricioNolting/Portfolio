import { useTranslation } from "react-i18next";

const Skills = () => {
  const [t] = useTranslation("global");
  return (
    <div className="mx-auto w-screen my-9 h-[300px] relative z-50">
      <div id="skills" className="justify-start items-start flex sm:pl-10 ">
        <div className="text-purple-400 text-[32px] font-medium font-['Fira Code'] dark:text-purple-900">
          #
        </div>
        <div className="text-white text-[32px] font-medium font-['Fira Code'] dark:text-purple-900">
          {t("main.habilidades")}
        </div>
        <img
          className="relative top-6 w-[100px] sm:w-auto sm:border-none border-2 border-purple-400"
          src="/Line.png"
          alt=""
        />
      </div>

      <div className="flex gap-3 flex-row-reverse pr-9 flex-wrap relative z-10">
        <section className="grid gap-3">
          <div className="border-2 dark:border-black w-[120px] sm:w-[200px] my-2">
            <h3 className="font-bold border-b-2 dark:border-black">
              Lenguajes
            </h3>
            <ul>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="border-2 w-[120px] sm:w-[200px] my-2 dark:border-black">
            <h3 className="font-bold border-b-2 dark:border-black">
              {t("skills.herramientas")}
            </h3>
            <ul>
              <li>VSCode | figma</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="border-2 w-[120px] sm:w-[200px] my-2 dark:border-black">
            <h3 className="font-bold border-b-2 dark:border-black">
              {t("skills.base-de-datos")}
            </h3>
            <ul>
              <li>Nil</li>
            </ul>
          </div>

          <div className="border-2 w-[120px] sm:w-[200px] my-2 dark:border-black">
            <h3 className="font-bold border-b-2 dark:border-black">
              {t("skills.otros")}
            </h3>
            <ul>
              <li>REACT.JS | NODE.JS | HTML | CSS | tailwind | Postman</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="border-2 w-[120px] sm:w-[200px] my-2 dark:border-black">
            <h3 className="font-bold border-b-2 dark:border-black">
              Frameworks
            </h3>
            <ul>
              <li>Nil</li>
            </ul>
          </div>
        </section>
      </div>

      <div className="absolute bottom-8 left-20 z-[-1] w-[100px]">
        <img src="/logo/logoLineas.png" alt="" />
      </div>
    </div>
  );
};
export default Skills;
