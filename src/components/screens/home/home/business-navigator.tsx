import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Store, Utensils, Wrench, Shirt, Coffee, Car } from "lucide-react"
import { Container } from "src/components/layout"

const businesses = [
  {
    icon: Store,
    title: "Do'kon ochish",
    description: "Oziq-ovqat va maishiy buyumlar do'koni",
    tags: ["Litsenziya", "Ruxsat", "Soliq"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjor8zATRMQuZEuWUrYxZMb_AJCt3NcO9Mg&s",
  },
  {
    icon: Utensils,
    title: "Restoran biznes",
    description: "Ovqat tayyorlash va xizmat ko'rsatish",
    tags: ["Sanitariya", "Litsenziya", "Xodimlar"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9oBl8oMj8unCKsHx9WuzVKgxc34HJnei-Qw&s",
  },
  {
    icon: Wrench,
    title: "Hunarmandchilik",
    description: "Ta'mirlash va xizmat ko'rsatish",
    tags: ["Malaka", "Asboblar", "Xizmat"],
    image: "https://www.shutterstock.com/image-photo/car-repair-station-softfocus-over-600nw-1186013791.jpg",
  },
  {
    icon: Shirt,
    title: "Tikuvchilik",
    description: "Kiyim tikish va ta'mirlash",
    tags: ["Uskunalar", "Materiallar", "Dizayn"],
    image: "https://dmitryshishkin.com/wp-content/uploads/text8.jpg",
  },
  {
    icon: Coffee,
    title: "Kafe ochish",
    description: "Ichimliklar va yengil taomlar",
    tags: ["Ruxsat", "Jihozlar", "Menyu"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvWo9G_jToy2TiHbOqj9u73fjnFCa_67RkIw&s",
  },
  {
    icon: Car,
    title: "Transport xizmati",
    description: "Yo'lovchi va yuk tashish",
    tags: ["Litsenziya", "Transport", "Sug'urta"],
    image: "https://xabar.uz/static/crop/2/3/920__95_2309632070.jpg",
  },
]

export const BusinessNavigator = () => {
  return (
    <section id="business" className="py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Biznes Navigator</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O'z biznesingizni boshlash uchun yo'l-yo'riq va maslahatlar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business, index) => {
            const Icon = business.icon
            return (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={business.image || "/placeholder.svg"}
                    alt={business.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{business.title}</CardTitle>
                  <CardDescription>{business.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {business.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">Boshlash</Button>
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
