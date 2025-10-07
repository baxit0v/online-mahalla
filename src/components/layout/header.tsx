import { useEffect, useState } from "react"
import { Container } from "../ui/container"
import { useLocation } from "@tanstack/react-router"

export const Header = () => {
  const [activeSection, setActiveSection] = useState("")
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      let current = ""

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.id
        }
      })

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "")
      setActiveSection(id)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }, [location.hash])

  const linkClass = (id: string) =>
    `text-sm font-medium transition-colors ${
      activeSection === id ? "text-blue-500" : "text-foreground hover:text-primary"
    }`

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
            <a href="#services" className={linkClass("services")}>Xizmatlar</a>
            <a href="#news" className={linkClass("news")}>Yangilikar</a>
            <a href="#business" className={linkClass("business")}>Biznes Navigator</a>
            <a href="#statistics" className={linkClass("statistics")}>Statistika</a>
            <a href="#gallery" className={linkClass("gallery")}>Galereya</a>
            <a href="#faq" className={linkClass("faq")}>FAQ</a>
            <a href="#contact" className={linkClass("contact")}>Aloqa</a>
          </nav>
        </div>
      </Container>
    </header>
  )
}
