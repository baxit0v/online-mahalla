import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, FileText, Home, CreditCard, Map, MessageCircle } from "lucide-react";
import { Container } from "src/components/layout";
import { Link } from "@tanstack/react-router";

const services = [
  {
    id: 1,
    icon: FileText,
    title: "Subsidiya",
    description: "Subsidiya, turli ma'lumotnomalar va guvohnomalar olish",
    details:
      "Subsidiya olish uchun talab etiladigan hujjatlar, ariza topshirish tartibi va davlat tomonidan taqdim etiladigan yordam turlari haqida to‘liq ma’lumot. Ushbu xizmat orqali fuqarolar energiya, uy-joy, ta’lim va boshqa yo‘nalishlarda subsidiya olish imkoniyatiga ega bo‘lishadi. Yangi onlayn platforma orqali arizalarni elektron shaklda yuborish va ularning holatini kuzatish mumkin.",
  },
  {
    id: 2,
    icon: Home,
    title: "Informaciya",
    description: "Uy-joy bilan bog‘liq barcha ma'lumot va xizmatlar",
    details:
      "Uy-joy sotib olish, ijaraga olish, mulkni rasmiylashtirish va notarial tasdiqlash bo‘yicha kerakli hujjatlar to‘plami va davlat xizmatlari haqida ma’lumot. Fuqarolar ushbu xizmat orqali o‘z turar joyi bilan bog‘liq barcha ma’lumotlarni onlayn tarzda ko‘rishlari, kadastr holatini tekshirishlari va yangilashlari mumkin.",
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Kreditlar",
    description: "Kredit olish, to‘lovlar va ijtimoiy yordam dasturlari",
    details:
      "Bank kreditlari, mikromoliyaviy dasturlar va ijtimoiy yordam kreditlari haqida to‘liq ma’lumot. Xizmat orqali foydalanuvchilar o‘z ehtiyojlariga mos kredit turlarini tanlash, foiz stavkalarini taqqoslash va to‘lov jadvalini onlayn hisoblash imkoniga ega. Davlat tomonidan qo‘llab-quvvatlanadigan kreditlar haqida ham ma’lumot beriladi.",
  },
  {
    id: 4,
    icon: Map,
    title: "Yer",
    description: "Yer ajratish, kadastr va ro‘yxatga olish xizmatlari",
    details:
      "Yer uchastkalarini ajratish, sotish, ijaraga berish va kadastr ma’lumotlarini yangilash bo‘yicha xizmat. Xizmat foydalanuvchilarga yer maydonining huquqiy holatini tekshirish, ariza topshirish va natijani onlayn ko‘rish imkoniyatini beradi. Shuningdek, yangi raqamli kadastr tizimi orqali ma’lumotlar yangiligi va aniqligi kafolatlanadi.",
  },
  {
    id: 5,
    icon: Briefcase,
    title: "Bajariladigan ishlar",
    description: "Topshiriqlar va tadbirkorlik faoliyatini ro‘yxatga olish",
    details:
      "Mahalla yoki tuman miqyosida bajarilishi kerak bo‘lgan ijtimoiy va iqtisodiy loyihalar haqida ma’lumot. Xizmat tadbirkorlar va fuqarolarga mavjud bo‘sh ish o‘rinlari, kichik biznes imkoniyatlari hamda davlat buyurtmalari bo‘yicha tenderlarda ishtirok etish shartlarini tushuntiradi.",
  },
  {
    id: 6,
    icon: MessageCircle,
    title: "Murojat",
    description: "Arizalar, murojaatlar va mahalla xavfsizligi",
    details:
      "Fuqarolar murojaatlarini qabul qilish, ko‘rib chiqish va javob berish jarayonini soddalashtiruvchi platforma. Xizmat orqali aholining muammolari tezroq hal qilinadi, shikoyatlarni kuzatish tizimi esa shaffoflikni ta’minlaydi. Mahalla xavfsizligi bo‘yicha tezkor xabar berish imkoniyati ham mavjud.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Mahalla xizmatlari</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Barcha zarur xizmatlarni bir joydan oling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
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

                  <Link
                    to="/services/$id"
                    params={{ id: service.id.toString() }}
                    className="w-full"
                  >
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Batafsil
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
