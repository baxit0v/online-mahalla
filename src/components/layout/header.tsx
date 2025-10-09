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
        if (rect.top <= 100 && rect.bottom >= 100) current = section.id
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
    }
  }, [location.hash])

  const LinkAnimated = ({ id, label }: { id: string; label: string }) => {
    const active = activeSection === id

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      const el = document.getElementById(id)
      if (el) {
        window.history.pushState(null, "", `#${id}`)
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        setActiveSection(id)
      }
    }

    return (
      <a
        href={`#${id}`}
        onClick={handleClick}
        className="relative group inline-block overflow-hidden text-sm font-medium h-[20px]"
      >
        <span
          className={`block transform transition-transform duration-300 ease-in-out ${
            active ? "-translate-y-full" : "translate-y-0"
          } group-hover:-translate-y-full`}
        >
          {label}
        </span>
        <span
          className={`absolute inset-0 block text-blue-500 transform transition-transform duration-300 ease-in-out ${
            active ? "translate-y-0" : "translate-y-full"
          } group-hover:translate-y-0`}
        >
          {label}
        </span>
      </a>
    )
  }

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
            <h2 className="text-lg font-bold text-foreground">Onlayn Mahalla</h2>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <LinkAnimated id="services" label="Xizmatlar" />
            <LinkAnimated id="news" label="Yangiliklar" />
            <LinkAnimated id="business" label="Biznes Navigator" />
            <LinkAnimated id="statistics" label="Statistika" />
            <LinkAnimated id="gallery" label="Galereya" />
            <LinkAnimated id="faq" label="FAQ" />
            <LinkAnimated id="contact" label="Aloqa" />
          </nav>
        </div>
      </Container>
    </header>
  )
}
