import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Send, Youtube } from "lucide-react"
import { Container } from "../ui/container"

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Onlayn Mahalla</h3>
                <p className="text-sm text-muted-foreground">Elektron Platforma</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Mahalla xizmatlari uchun zamonaviy elektron platforma. Barcha xizmatlar bir joyda, qulay va tez.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Send className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Xizmatlar</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Ma'lumotnoma olish
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Ijtimoiy yordam
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Biznes ro'yxati
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Uy-joy masalalari
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Ta'lim xizmatlari
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h4 className="font-semibold">Ma'lumot</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Yangiliklar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Qonunlar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Maxfiylik siyosati
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Foydalanish shartlari
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Yangiliklar</h4>
            <p className="text-sm text-muted-foreground">Eng so'nggi yangiliklar va e'lonlardan xabardor bo'ling</p>
            <div className="flex space-x-2">
              <Input placeholder="Email manzilingiz" className="flex-1" />
              <Button>
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">Obuna bo'lib, maxfiylik siyosatiga rozilik bildirasiz</p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 Onlayn Mahalla. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Yordam
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Texnik qo'llab-quvvatlash
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Sayt xaritasi
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
