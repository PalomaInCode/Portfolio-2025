import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Database, Code, Settings } from "lucide-react";
import leakgas from "@/assets/leak.png";
import vida from "@/assets/vida.png";

const Projects = () => {
  const projects = [
    {
      title: "LeakGas - Monitoramento de Vazamento de Gás",
      description:
        "Projeto desenvolvido no 1º Semestre do curso de ADS - Solução inovadora para monitorar vazamentos de gás GLP em cozinhas industriais, com sensores IoT que enviam dados em tempo real, garantindo segurança contra incêndios e explosões.",
      image: leakgas,
      technologies: ["Arduino", "MySQL", "HTML", "CSS", "Figma", "API"],
      features: [
        "Monitoramento em tempo real de vazamentos de gás GLP",
        "Dashboard com visualização dos dados dos sensores",
        "Alertas instantâneos via e-mail e notificações",
        "Análise histórica para prevenção de acidentes",
        "Notificações por e-mail ou push são enviadas imediatamente",
      ],
      github: "https://github.com/felipecalace/leakgas",
      post: "https://www.linkedin.com/posts/paloma-santos-dias_sptech-tecnologia-sprint2-activity-7259712422465196032-J5vv?utm_source=share&utm_medium=member_desktop&rcm=ACoAADpclDUBblWLB_jyE6tKBUhJWWilYDpmXIE",
      category: "fullstack",
    },
    {
      title: "Projeto Vida - Dashboard de Crimes de São Paulo",
      description:
        "Projeto desenvolvido no 2 º Semestre do curso de ADS - Dashboard interativo para análise e previsão de crimes na cidade de São Paulo, auxiliando a tomada de decisões policiais com KPIs, mapas de calor e gestão de usuários.",
      image: vida,
      technologies: ["HTML","CSS", "APIs públicas", "Figma", "AWS","MySQL" ],
      features: [
        "Visualização de dados criminais por região e tipo de crime",
        "Indicadores e mapas de calor para apoio estratégico",
        "Gestão de usuários administrativos e notificações personalizadas",
        "Interface responsiva e acessível para diversos perfis de usuário",
      ],
      github: "https://github.com/guilherme-paiva1/vigi-data",
      post: "https://www.linkedin.com/posts/paloma-santos-dias_retrospectiva-estaergio-sptech-activity-7345809663818366976-q40k?utm_source=share&utm_medium=member_desktop&rcm=ACoAADpclDUBblWLB_jyE6tKBUhJWWilYDpmXIE",
      category: "fullstack",
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "fullstack":
        return Code;
      case "frontend":
        return ExternalLink;
      default:
        return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "fullstack":
        return "text-accent";
      case "frontend":
        return "text-primary";
      default:
        return "text-accent";
    }
  };

  return (
    <section id="projetos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Projetos da Faculdade
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Projetos desenvolvidos no segundo semestre, focados em análise de dados e desenvolvimento web para soluções reais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = getCategoryIcon(project.category);
              const colorClass = getCategoryColor(project.category);

              return (
                <Card
                  key={index}
                  className="bg-gradient-card border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-slide-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="aspect-video bg-muted/50 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div
                        className={`p-2 rounded-lg bg-background/80 backdrop-blur-sm ${colorClass}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-foreground">Principais Funcionalidades:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-primary"
                        onClick={() => window.open(project.post, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Post
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
