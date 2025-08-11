import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Settings, Layers, Server, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
     /*{
      icon: Settings,
      title: "SAP & ERP",
      color: "text-primary",
      skills: [
        { name: "SAP MM (Materials Management)", level: 40 },
        { name: "ABAP Básico", level: 15 }
      ]
    },
     */
    {
      icon: Code,
      title: "Desenvolvimento",
      color: "text-accent",
      skills: [
        { name: "JavaScript", level: 45 },
        { name: "Java", level: 30 },
        { name: "Python", level: 2 },
        { name: "React", level: 0 }
      ]
    },
     /*
    {
      icon: Database,
      title: "Bancos de Dados",
      color: "text-primary",
      skills: [
        { name: "MySQL", level: 80 }
      ]
    },
    */
    /* {
      icon: Server,
      title: "Backend & APIs",
      color: "text-accent",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 80 },
        { name: "API REST", level: 85 },
        { name: "Microservices", level: 60 }
      ]
    },
    */
    {
      icon: Globe,
      title: "Frontend",
      color: "text-primary",
      skills: [
        { name: "HTML/CSS", level: 90 },
         /*{ name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Design", level: 90 } */
      ]
    },
    {
      icon: Layers,
      title: "Ferramentas & DevOps",
      color: "text-accent",
      skills: [
        { name: "Git & GitHub", level: 45 },
        { name: "Docker", level: 55 },
        { name: "AWS Básico", level: 40 },
        { name: "Agile/Scrum", level: 75 }
      ]
    }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 80) return "bg-primary";
    if (level >= 60) return "bg-accent";
    return "bg-muted-foreground";
  };

  return (
    <section id="habilidades" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Habilidades Técnicas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Competências adquiridas através de estudos acadêmicos, projetos práticos e experiência profissional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg bg-muted/50 ${category.color}`}>
                      <category.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2" 
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-card border-border/50 shadow-elegant inline-block">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">Sempre Aprendendo</h3>
                <p className="text-muted-foreground max-w-2xl">
                  Acredito no aprendizado contínuo e sempre busco novas tecnologias e metodologias 
                  para expandir meus conhecimentos e entregar soluções ainda melhores.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;