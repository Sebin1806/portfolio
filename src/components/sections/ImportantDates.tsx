import { Calendar } from "lucide-react";

const dates = [
  {
    year: "2024",
    title: "Current Position",
    description: "Working on innovative projects and expanding my skillset",
  },
  {
    year: "2023",
    title: "Major Achievement",
    description: "Completed a significant milestone in my professional journey",
  },
  {
    year: "2022",
    title: "Career Transition",
    description: "Began focusing on new technologies and methodologies",
  },
  {
    year: "2021",
    title: "Educational Milestone",
    description: "Gained valuable knowledge and certifications in my field",
  },
];

export const ImportantDates = () => {
  return (
    <section id="dates" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Important Dates
        </h2>
        <div className="space-y-8">
          {dates.map((date, index) => (
            <div
              key={index}
              className="flex gap-6 group hover:translate-x-2 transition-transform duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shrink-0">
                  <Calendar size={20} />
                </div>
                {index < dates.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border mt-2" />
                )}
              </div>
              <div className="pb-8 flex-1">
                <div className="text-primary font-bold text-lg mb-1">
                  {date.year}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{date.title}</h3>
                <p className="text-muted-foreground">{date.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
