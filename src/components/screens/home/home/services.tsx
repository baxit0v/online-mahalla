import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, FileText, Home, CreditCard, Map, MessageCircle } from "lucide-react";
import { Container } from "src/components/layout";

const services = [
  {
    icon: FileText,
    title: "Subsidiya",
    description: "Subsidiya, turli ma'lumotnomalar va guvohnomalar olish",
    href: "#",
  },
  {
    icon: Home,
    title: "Informaciya",
    description: "Uy-joy bilan bog‘liq barcha ma'lumot va xizmatlar",
    href: "#",
  },
  {
    icon: CreditCard,
    title: "Kreditlar",
    description: "Kredit olish, to‘lovlar va ijtimoiy yordam dasturlari",
    href: "#",
  },
  {
    icon: Map,
    title: "Yer",
    description: "Yer ajratish, kadastr va ro‘yxatga olish xizmatlari",
    href: "#",
  },
  {
    icon: Briefcase,
    title: "Bajariladigan ishlar",
    description: "Topshiriqlar va tadbirkorlik faoliyatini ro‘yxatga olish",
    href: "#",
  },
  {
    icon: MessageCircle,
    title: "Murojat",
    description: "Arizalar, murojaatlar va mahalla xavfsizligi",
    href: "#",
  },
];


export const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Mahalla xizmatlari</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Barcha zarur xizmatlarni bir joydan oling</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="mb-4 text-sm">{service.description}</CardDescription>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Batafsil
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
