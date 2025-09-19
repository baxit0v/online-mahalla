import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Container } from "src/components/layout"

const faqs = [
  {
    question: "Qanday qilib elektron ariza berishim mumkin?",
    answer:
      "Elektron ariza berish uchun saytda ro'yxatdan o'ting, kerakli xizmatni tanlang va ko'rsatmalarga amal qiling. Barcha zarur hujjatlarni yuklash imkoniyati mavjud.",
  },
  {
    question: "Arizamning holatini qanday kuzatishim mumkin?",
    answer:
      "Ariza bergandan so'ng sizga maxsus kuzatuv raqami beriladi. Ushbu raqam orqali arizangizning holatini real vaqtda kuzatishingiz mumkin.",
  },
  {
    question: "Qaysi hujjatlar kerak bo'ladi?",
    answer:
      "Har bir xizmat turi uchun kerakli hujjatlar ro'yxati alohida ko'rsatilgan. Odatda pasport, yashash joyi ma'lumotnomasi va xizmat turiga mos maxsus hujjatlar talab qilinadi.",
  },
  {
    question: "Xizmatlar bepulmi?",
    answer:
      "Ko'pgina davlat xizmatlari bepul taqdim etiladi. Ba'zi xizmatlar uchun belgilangan davlat bojlari to'lanishi kerak bo'lishi mumkin.",
  },
  {
    question: "Biznes ro'yxatga olish qancha vaqt oladi?",
    answer:
      "Biznes ro'yxatga olish jarayoni odatda 3-5 ish kuni davom etadi. Barcha hujjatlar to'g'ri taqdim etilgan taqdirda jarayon tezlashtirilishi mumkin.",
  },
  {
    question: "Texnik yordam qanday olishim mumkin?",
    answer:
      "Texnik yordam uchun saytdagi 'Aloqa' bo'limidan foydalaning yoki telefon orqali murojaat qiling. Bizning mutaxassislarimiz sizga yordam berishga tayyor.",
  },
  {
    question: "Mobil ilovangiz bormi?",
    answer:
      "Hozircha mobil ilova ishlab chiqilmoqda. Ayni paytda saytning mobil versiyasi barcha qurilmalarda qulay ishlaydi.",
  },
  {
    question: "Shikoyat qanday berishim mumkin?",
    answer:
      "Shikoyatlaringizni saytdagi maxsus forma orqali yoki to'g'ridan-to'g'ri mahalla raisi bilan bog'lanish orqali bildirishingiz mumkin.",
  },
]

export const Faq = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ko'p beriladigan savollar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Eng ko'p so'raladigan savollarga javoblar</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  )
}
