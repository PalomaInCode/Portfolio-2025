import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Database, Code, Settings } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Gestão de Estoque",
      description: "Aplicação web completa para controle de estoque com funcionalidades de cadastro de produtos, movimentações, relatórios e alertas de baixo estoque. Desenvolvido com React e Node.js.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "PostgreSQL", "Express", "Chart.js"],
      features: [
        "Dashboard interativo com métricas em tempo real",
        "Controle de entrada e saída de produtos",
        "Relatórios customizáveis em PDF",
        "Sistema de alertas automatizados"
      ],
      github: "#",
      demo: "#",
      category: "fullstack"
    },
    {
      title: "Dashboard SAP MM Analytics",
      description: "Interface web para visualização de dados do SAP MM, com gráficos e KPIs sobre compras, fornecedores e movimentações de material. Conecta com dados SAP via API.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "SAP API", "Recharts", "Tailwind"],
      features: [
        "Integração com dados SAP MM",
        "Visualizações interativas de compras",
        "Análise de performance de fornecedores",
        "Exportação de relatórios"
      ],
      github: "#",
      demo: "#",
      category: "sap"
    },
    {
      title: "E-commerce Responsivo",
      description: "Plataforma de e-commerce moderna com carrinho de compras, sistema de pagamento, catálogo de produtos e painel administrativo. Interface totalmente responsiva.",
      image: "/placeholder.svg",
      technologies: ["React", "Redux", "MongoDB", "Stripe", "Material-UI"],
      features: [
        "Catálogo de produtos com filtros",
        "Carrinho de compras persistente",
        "Integração com gateway de pagamento",
        "Painel administrativo completo"
      ],
      github: "#",
      demo: "#",
      category: "frontend"
    },
    {
      title: "API de Gestão de Usuários",
      description: "API RESTful robusta para autenticação e gestão de usuários com JWT, rate limiting, logs de auditoria e documentação Swagger.",
      image: "/placeholder.svg",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
      features: [
        "Autenticação JWT segura",
        "Middleware de rate limiting",
        "Logs de auditoria completos",
        "Documentação Swagger automática"
      ],
      github: "#",
      demo: "#",
      category: "backend"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "sap": return Settings;
      case "fullstack": return Code;
      case "backend": return Database;
      default: return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "sap": return "text-primary";
      case "fullstack": return "text-accent";
      case "backend": return "text-primary";
      default: return "text-accent";
    }
  };

  return (
    <section id="projetos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Projetos em Destaque
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma seleção dos meus principais projetos, demonstrando minhas habilidades em 
              desenvolvimento web e integração com sistemas empresariais.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
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
                    <div className={`p-2 rounded-lg bg-background/80 backdrop-blur-sm ${getCategoryColor(project.category)}`}>
                      {(() => {
                        const Icon = getCategoryIcon(project.category);
                        return <Icon className="w-5 h-5" />;
                      })()}
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
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
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
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-primary">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="w-4 h-4 mr-2" />
              Ver Todos os Projetos no GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;