import { useState } from "react";
import { cn } from "./lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Next.js", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },

  // AI/ML/Data Science
  { name: "Python", category: "ai-ml" },
  { name: "TensorFlow", category: "ai-ml" },
  { name: "PyTorch", category: "ai-ml" },
  { name: "Scikit-learn", category: "ai-ml" },
  { name: "Pandas", category: "ai-ml" },
  { name: "NumPy", category: "ai-ml" },
  { name: "Keras", category: "ai-ml" },
  { name: "OpenCV", category: "ai-ml" },
  { name: "Matplotlib", category: "ai-ml" },
  { name: "Seaborn", category: "ai-ml" },
  { name: "Jupyter", category: "ai-ml" },
  { name: "MLflow", category: "ai-ml" },
  { name: "Hugging Face", category: "ai-ml" },
  { name: "LangChain", category: "ai-ml" },
  { name: "OpenAI API", category: "ai-ml" },
  { name: "Computer Vision", category: "ai-ml" },
  { name: "NLP", category: "ai-ml" },
  { name: "Deep Learning", category: "ai-ml" },

  // Tools
  { name: "Git/GitHub", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "VS Code", category: "tools" },
];

const categories = ["all", "frontend", "backend", "ai-ml", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  // Show 4x4 grid for "all" category, but show all skills when specific category is selected
  const displaySkills = activeCategory === "all" ? skills.slice(0, 16) : filteredSkills;

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category === "ai-ml" ? "AI/ML" : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {displaySkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center justify-center min-h-[120px]"
            >
              <div className="text-center">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};