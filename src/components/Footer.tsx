import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/anasilva", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/anasilva", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ana.silva@email.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Experiência", href: "#experiencia" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId.replace('#', ''))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Ana Silva
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Estudante de ADS e estagiária SAP MM, apaixonada por tecnologia 
              e sempre em busca de novos desafios e oportunidades de crescimento.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Navegação</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contato</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 ana.silva@email.com</p>
              <p>📱 +55 (11) 99999-9999</p>
              <p>📍 São Paulo, SP - Brasil</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">Status:</span> Disponível para oportunidades
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Ana Silva. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              Feito com <Heart className="w-4 h-4 text-red-500" /> e muita dedicação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;