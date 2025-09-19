import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, FileCheck, AlertCircle } from "lucide-react"
import { Container } from "src/components/layout"

const priorityServices = [
  {
    title: "Tez yordam ma'lumotnomasi",
    description: "24 soat ichida tayyorlanadigan muhim hujjatlar",
    requirements: ["Pasport nusxasi", "Ariza", "To'lov kvitansiyasi"],
    urgency: "Tez",
    time: "1 kun",
    icon: AlertCircle,
  },
  {
    title: "Biznes ro'yxatga olish",
    description: "Tadbirkorlik faoliyatini boshlash uchun",
    requirements: ["Biznes reja", "Moliyaviy hisob", "Litsenziya"],
    urgency: "O'rtacha",
    time: "3-5 kun",
    icon: FileCheck,
  },
  {
    title: "Ijtimoiy yordam",
    description: "Muhtoj oilalar uchun yordam dasturlari",
    requirements: ["Daromad ma'lumotnomasi", "Oila tarkibi", "Tibbiy ma'lumotnoma"],
    urgency: "Muhim",
    time: "2-3 kun",
    icon: Clock,
  },
]

export const PriorityServices = () => {
  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ustuvor xizmatlar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Eng ko'p talab qilinadigan va muhim xizmatlar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {priorityServices.map((service, index) => {
            const Icon = service.icon
            const urgencyColor =
              service.urgency === "Tez" ? "destructive" : service.urgency === "Muhim" ? "default" : "secondary"

            return (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <Badge variant={urgencyColor} className="mb-2">
                          {service.urgency}
                        </Badge>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-2">{service.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Kerakli hujjatlar:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {service.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{service.time}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">Ariza berish</Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Batafsil
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
