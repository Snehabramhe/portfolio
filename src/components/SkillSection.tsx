import React from "react";

interface Skill {
  title: string;
  hash: string;
  icon: string | undefined;
  color: string;
}

interface SkillCategory {
  readonly skillsTitle: string;
  readonly skills: readonly Skill[];
}

interface SkillSectionProps {
  skillsData: readonly SkillCategory[];
  theme: "dark" | "light";
}

const SkillSection: React.FC<SkillSectionProps> = ({ skillsData, theme }) => {
  return (
    <article
      className={`h-auto rounded-2xl p-16 pt-32 grid grid-cols-4 gap-10 relative z-10 max-lg:w-full max-lg:grid-cols-3 max-md:grid-cols-2 max-lg:p-8 ${
        theme === "dark"
          ? "bg-[--blackblue] dark-mode-shadow"
          : "bg-[--icewhite] dark-shadow"
      }`}
    >
      <div
        className={`absolute top-10 left-1/2 transform -translate-x-1/2 px-4 py-2  rounded-t-xl `}
      >
        <p className="font-black text-4xl">
          <span className="text-[--orange]">&lt;</span>
          {skillsData[0].skillsTitle}
          <span className="text-[--orange]">/&gt;</span>
        </p>
      </div>
      {skillsData[0].skills.map((skill, index) => (
        <div
          key={index}
          className={`skill-item cursor-pointer flex flex-col gap-6 rounded-2xl p-8 border-solid border-[0.25rem]  text-center max-lg:items-center    ${
            theme === "dark" ? "bg-[--darkblue]" : "bg-[--icewhite]"
          }`}
          data-tooltip-id="my-tooltip"
          data-tooltip-content={skill.title}
          style={{
            borderColor: skill.color,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animation = "pulse 2s infinite";
            e.currentTarget.style.transform = "scale(1)";
            document.documentElement.style.setProperty(
              "--box-shadow-color",
              `${skill.color}b3`
            );
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animation = "";
            e.currentTarget.style.transform = "";
            document.documentElement.style.setProperty(
              "--box-shadow-color",
              "inherit"
            );
          }}
        >
          <img
            src={skill.icon}
            alt={`${skill.icon}-icon`}
            className="h-[10rem]"
          />
          <h3 className="max-lg:text-[2rem] min-[1024px]:hidden">
            {skill.title}
          </h3>
        </div>
      ))}
    </article>
  );
};

export default SkillSection;
