import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Users, BarChart3 } from "lucide-react"
import { Container } from "src/components/layout"

import heroBg from "src/assets/images/a.jpg"

export const Hero = () => {
  return (
    <section
  style={{ backgroundImage: `url('${heroBg}')` }}
  className="relative bg-cover bg-center bg-no-repeat py-20 lg:py-25"
>
  {/* 🔳 Overlay для затемнения фона */}
  <div className="absolute inset-0 bg-black/50 z-0"></div>

  <Container>
    <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
      <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
        Mahalla xizmatlari <span className="text-primary">bir joyda</span>
      </h1>

      <p className="text-lg lg:text-xl text-pretty mb-8 max-w-2xl mx-auto text-gray-200">
        Elektron platforma orqali mahalla xizmatlaridan foydalaning, biznes yo'nalishlarini o'rganing va jamoamiz
        bilan bog'laning
      </p>

      {/* 🔘 Кнопки с плавным скроллом */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Button
          size="lg"
          className="text-base"
          onClick={() => {
            document.querySelector("#services")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          Xizmatlarni ko'rish
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="text-base bg-transparent text-white border-white hover:bg-white/10"
          onClick={() => {
            document.querySelector("#business")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          Biznes Navigator
        </Button>
      </div>

      {/* 📊 Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-200">
          <FileText className="h-4 w-4 text-primary" />
          <span>2500+ Murojaat</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-200">
          <Users className="h-4 w-4 text-primary" />
          <span>15+ Xizmat turi</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-200">
          <BarChart3 className="h-4 w-4 text-primary" />
          <span>84% Hal qilingan</span>
        </div>
      </div>
    </div>
  </Container>
</section>


  )
}
