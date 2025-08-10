import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Estagiária SAP MM",
      company: "Empresa Líder em ERP",
      location: "São Paulo, SP",
      period: "Mar 2024 - Presente",
      description: [
        "Configuração e parametrização do módulo SAP MM para otimização de processos",
        "Desenvolvimento de relatórios customizados usando SAP Query e Smart Forms",
        "Análise de processos de procurement e gestão de fornecedores",
        "Suporte técnico aos usuários finais e resolução de incidentes críticos",
        "Participação em projetos de implementação e migração de dados"
      ],
      skills: ["SAP MM", "SAP Query", "ABAP", "Procurement", "S/4HANA", "Fiori"]
    },
    {
      type: "education",
      title: "Análise e Desenvolvimento de Sistemas",
      company: "FATEC São Paulo",
      location: "São Paulo, SP",
      period: "Jan 2023 - Dez 2025",
      description: [
        "Desenvolvimento de aplicações web e mobile com foco em soluções empresariais",
        "Análise e modelagem de sistemas complexos e arquitetura de software",
        "Implementação de metodologias ágeis e DevOps em projetos acadêmicos",
        "Especialização em integração de sistemas e APIs RESTful",
        "Projetos práticos envolvendo bancos de dados e Business Intelligence"
      ],
      skills: ["Java", "JavaScript", "Python", "React", "Spring Boot", "PostgreSQL", "Docker"]
    },
    {
      type: "work",
      title: "Desenvolvedora Full Stack (Freelance)",
      company: "Projetos Independentes",
      location: "Remoto",
      period: "Jun 2023 - Fev 2024",
      description: [
        "Desenvolvimento de aplicações web responsivas para PMEs e startups",
        "Criação de dashboards interativos para análise de dados empresariais",
        "Implementação de APIs RESTful e integração com sistemas legados",
        "Consultoria em transformação digital e automação de processos",
        "Desenvolvimento de soluções mobile-first com React Native"
      ],
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "React Native"]
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Experiência & Educação
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Minha trajetória acadêmica e profissional, com foco em tecnologia e sistemas empresariais.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${exp.type === 'work' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
                      {exp.type === 'work' ? <Building2 className="w-6 h-6" /> : <GraduationCap className="w-6 h-6" />}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                          <p className="text-lg font-semibold text-primary">{exp.company}</p>
                        </div>
                        
                        <div className="flex flex-col md:items-end text-sm text-muted-foreground mt-2 md:mt-0">
                          <div className="flex items-center gap-1 mb-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary"
                            className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;