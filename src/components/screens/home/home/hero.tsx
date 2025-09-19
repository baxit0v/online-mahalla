import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Users, BarChart3 } from "lucide-react"
import { Container } from "src/components/layout"

export const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-muted/30 to-background">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
            Mahalla xizmatlari <span className="text-primary">bir joyda</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Elektron platforma orqali mahalla xizmatlaridan foydalaning, biznes yo'nalishlarini o'rganing va jamoamiz
            bilan bog'laning
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-base">
              Xizmatlarni ko'rish
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-base bg-transparent">
              Biznes Navigator
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <FileText className="h-4 w-4 text-primary" />
              <span>2500+ Murojaat</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-primary" />
              <span>15+ Xizmat turi</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <BarChart3 className="h-4 w-4 text-primary" />
              <span>84% Hal qilingan</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
