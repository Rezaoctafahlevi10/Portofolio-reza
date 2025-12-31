"use client";

interface SkillItem {
  name: string;
  icon: string;
}

export default function Skill() {
  const skills: SkillItem[] = [
    { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { name: "Trello", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
    { name: "Katalon", icon: "https://testautomationtools.dev/wp-content/uploads/2023/03/Katalon-logo-squared.png" },
    { name: "Mysql", icon: "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "React JS", icon: "https://www.svgrepo.com/show/355190/reactjs.svg" },
    { name: "Python", icon: "https://www.svgrepo.com/show/354238/python.svg" },
    { name: "Test Case", icon: "https://www.nicepng.com/png/detail/935-9352352_png-file-svg-test-case-icon.png" },
    { name: "Flask", icon: "https://www.svgrepo.com/show/473611/flask.svg" },
];

  const duplicated = [...skills, ...skills];

  return (
    <div id= "skill" className="bg-white py-12 rpx-dot-bg">
      <h2 className="text-center text-4xl font-bold text-indigo-900 mt-2 font-semibold mb-8">
        Skills
      </h2>


      <div className="relative overflow-hidden mb-6">
        <div className="flex gap-6 animate-row-left">
          {duplicated.map((item, i) => (
            <div
              key={`row1-${i}`}
              className="min-w-[200px] h-20 rounded-xl border bg-white shadow-sm flex items-center justify-center gap-3 px-4"
            >
              <img src={item.icon} alt={item.name} className="h-9 object-contain" />
              <span className="font-medium text-gray-700">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex gap-6 animate-row-right">
          {duplicated.map((item, i) => (
            <div
              key={`row2-${i}`}
              className="min-w-[200px] h-20 rounded-xl border bg-white shadow-sm flex items-center justify-center gap-3 px-4"
            >
              <img src={item.icon} alt={item.name} className="h-9 object-contain" />
              <span className="font-medium text-gray-700">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-row-left {
          animation: scrollLeft 60s linear infinite;
        }

        .animate-row-right {
          animation: scrollRight 60s linear infinite;
        }

        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
