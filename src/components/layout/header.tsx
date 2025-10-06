import { Container } from "../ui/container"


export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">Onlayn Mahalla</h2>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#news" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Yangilikar
            </a>
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Xizmatlar
            </a>
            <a href="#business" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Biznes Navigator
            </a>
            <a href="#statistics" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Statistika
            </a>
            <a href="#gallery" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Galereya
            </a>
            <a href="#faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Aloqa
            </a>
          </nav>
        </div>
      </Container>
    </header >
  )
}
