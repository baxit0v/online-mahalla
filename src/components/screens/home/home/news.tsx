import { Container } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "@tanstack/react-router"
import { CalendarDays, Newspaper } from "lucide-react"

const news = [
    {
      id: 1,
      title: "Yangi soliq islohoti",
      description:
        "2025-yildan boshlab kichik bizneslar uchun yangi soliq islohoti kuchga kiradi. Ushbu islohot doirasida tadbirkorlik subyektlariga soliq stavkalari pasaytiriladi va hisobot topshirish jarayoni soddalashtiriladi. Bundan tashqari, elektron soliq tizimlari yanada takomillashtirilib, tadbirkorlarga vaqt va mablag‘ni tejash imkonini beradi. Mutaxassislarning ta’kidlashicha, bu o‘zgarishlar mamlakat iqtisodiyotini yanada raqobatbardosh qilishga xizmat qiladi.",
      date: "2025-10-05",
      category: "Iqtisodiyot",
      image:
        "https://storage.kun.uz/source/8/CPzXmlg1WjpEhb9lx2m3GTCzvOe4o_oC.jpg",
    },
    {
      id: 2,
      title: "Startaplar uchun grantlar",
      description:
        "Innovatsion loyihalarni qo‘llab-quvvatlash maqsadida 2025-yilda startaplar uchun yangi grant dasturi yo‘lga qo‘yiladi. Dastur doirasida yosh tadbirkorlar, ilmiy markazlar va texnoparklarda faoliyat yuritayotgan jamoalar o‘z g‘oyalarini amaliyotga joriy etish uchun davlatdan moliyaviy yordam olishlari mumkin bo‘ladi. Grantlar miqdori loyiha miqyosiga qarab belgilanadi, eng istiqbolli startaplar esa xalqaro hamkorlik dasturlariga jalb qilinadi.",
      date: "2025-10-03",
      category: "Texnologiya",
      image: "https://old.sbtsue.uz/frontend/web/news/5e6a0c852de02.jpg",
    },
    {
      id: 3,
      title: "Qahvaxonalar soni oshmoqda",
      description:
        "So‘nggi yillarda Toshkent shahrida kichik kafe va qahvaxonalar soni keskin oshgan. Mutaxassislar bu holatni shahar aholisi orasida yangi turmush madaniyati shakllanayotgani bilan izohlaydi. Yoshlar orasida zamonaviy kafe va coworking-lar mashhur bo‘lib bormoqda, bu esa kichik biznes rivojlanishiga turtki bermoqda. Statistik ma’lumotlarga ko‘ra, 2023-yildan 2025-yilgacha bo‘lgan davrda yangi ochilgan qahvaxonalar soni qariyb 40 foizga oshgan.",
      date: "2025-10-01",
      category: "Biznes",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xc-DnvSXIN57oWFMHEWvmekH-PeD_3jCdQ&s",
    },
    {
      id: 4,
      title: "Hunarmandlar yarmarkasi",
      description:
        "Viloyat markazida o‘tkazilayotgan an’anaviy hunarmandlar yarmarkasi bu yil ham o‘ziga xos ko‘rinishda tashkil etildi. Unda mahalliy ustalar, rassomlar, kulollar va zargarlik ustalari o‘z mahsulotlarini taqdim etishdi. Tadbir davomida mehmonlar nafaqat mahsulotlarni xarid qilish, balki ularni tayyorlash jarayonini ham kuzatish imkoniga ega bo‘lishdi. Yarmarka hududiy turizmni rivojlantirish va milliy qadriyatlarni targ‘ib qilishga qaratilgan.",
      date: "2025-09-28",
      category: "Madaniyat",
      image:
        "https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/696926319621c3f3f2eaf71f75c1e8de.jpg",
    },
    {
      id: 5,
      title: "Yangi texnopark ochildi",
      description:
        "Toshkent shahrida IT startaplar va yosh dasturchilarni qo‘llab-quvvatlashga qaratilgan yangi texnopark ishga tushirildi. Bu markazda dasturlash, sun’iy intellekt, robototexnika va kiberxavfsizlik yo‘nalishlari bo‘yicha treninglar tashkil etiladi. Texnoparkda yuzlab yoshlar o‘z loyihalarini sinovdan o‘tkazish, investorlar bilan ishlash va xalqaro hamkorlikni yo‘lga qo‘yish imkoniyatiga ega bo‘ladilar. Loyihaning asosiy maqsadi – O‘zbekistonni mintaqadagi IT markazlaridan biriga aylantirishdir.",
      date: "2025-09-25",
      category: "Innovatsiya",
      image:
        "https://avatars.mds.yandex.net/get-altay/1031166/2a00000185bfa9734086f311d601d4e2a7e3/orig",
    },
    {
      id: 6,
      title: "Qishloq xo‘jaligida yangi dastur",
      description:
        "Fermerlarga raqamli texnologiyalarni joriy etish bo‘yicha yangi davlat dasturi boshlandi. Ushbu dastur orqali yer maydonlarini sun’iy yo‘ldoshlar yordamida kuzatish, hosildorlikni tahlil qilish va suv sarfini optimallashtirish imkoniyati yaratiladi. Qishloq xo‘jaligida ilg‘or texnologiyalarni qo‘llash natijasida mahsuldorlik oshadi, xarajatlar kamayadi va ekologik barqarorlik ta’minlanadi. Dastur 2025–2030-yillar davomida bosqichma-bosqich amalga oshirilishi rejalashtirilgan.",
      date: "2025-09-22",
      category: "Qishloq xo‘jaligi",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKKn293e57YKYu8IiKYvt6OcTcgpsZxAJRg&s",
    },
  ]
  
export const News = () => {
  return (
    <section id="news" className="py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Yangiliklar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            So‘nggi yangiliklar, tadbirlar va iqtisodiy o‘zgarishlar bilan tanishing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <Link
                to="/news/$id"
                params={{ id: item.id.toString() }}
                className="block"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full flex items-center gap-2 text-sm">
                    <Newspaper className="w-4 h-4 text-primary" />
                    {item.category}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
              </Link>

              <CardContent>
                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <CalendarDays className="w-4 h-4" />
                  <span>{new Date(item.date).toLocaleDateString("uz-UZ")}</span>
                </div>

                <div className="flex gap-2">
                  <Link
                    to="/news/$id"
                    params={{ id: item.id.toString() }}
                    className="flex-1"
                  >
                    <Button className="w-full">O‘qish</Button>
                  </Link>
                  <Link
                    to="/news/$id"
                    params={{ id: item.id.toString() }}
                    className="flex-1"
                  >
                    <Button variant="outline" className="w-full bg-transparent">
                      Batafsil
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
