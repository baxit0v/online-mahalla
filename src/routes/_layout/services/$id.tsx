import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Briefcase, FileText, Home, CreditCard, Map, MessageCircle } from "lucide-react";
import { Container } from "src/components/layout";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

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
  ]

export const Route = createFileRoute("/_layout/services/$id")({
  component: ServicePage,
});

function ServicePage() {
  const { id } = useParams({ from: "/_layout/services/$id" });
  const service = services.find((s) => s.id.toString() === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!service) {
    return <div className="p-10 text-center text-red-500">Xizmat topilmadi 😢</div>;
  }

  const Icon = service.icon;

  return (
    <section className="py-20">
      <Container>
        <Link to="/" hash="services" className="inline-block mb-8" onClick={() => window.scrollTo(0, 0)}>
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Barcha xizmatlar
          </Button>
        </Link>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold">{service.title}</h1>
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
            {service.details}
          </p>
        </div>
      </Container>
    </section>
  );
}
