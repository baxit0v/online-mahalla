import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Container } from "src/components/layout"

export const ContactForm = () => {
  return (
    <section id="contact" className="py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Biz bilan bog'laning</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Savollaringiz yoki takliflaringiz bo'lsa, biz bilan bog'laning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Telefon</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">+998 (71) 123-45-67</p>
                <p className="text-sm text-muted-foreground">Ish kunlari 9:00-18:00</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">info@mahalla.uz</p>
                <p className="text-sm text-muted-foreground">24/7 javob beramiz</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Manzil</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">Toshkent sh., Yunusobod t.</p>
                <p className="text-sm text-muted-foreground">Mahalla boshqarmasi binosi</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Ish vaqti</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">Dush-Juma: 9:00-18:00</p>
                <p className="text-sm text-muted-foreground">Shanba: 9:00-13:00</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Murojaat yuborish</CardTitle>
                <CardDescription>Formani to'ldiring va biz tez orada siz bilan bog'lanamiz</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ism familiya *</Label>
                    <Input id="name" placeholder="Ismingizni kiriting" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon raqam *</Label>
                    <Input id="phone" type="tel" placeholder="+998 (__) ___-__-__" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email (ixtiyoriy)</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Murojaat turi *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Murojaat turini tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="complaint">Shikoyat</SelectItem>
                      <SelectItem value="suggestion">Taklif</SelectItem>
                      <SelectItem value="question">Savol</SelectItem>
                      <SelectItem value="service">Xizmat so'rovi</SelectItem>
                      <SelectItem value="other">Boshqa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Xabar matni *</Label>
                  <Textarea
                    id="message"
                    placeholder="Xabaringizni batafsil yozing..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attachments">Fayllar (ixtiyoriy)</Label>
                  <Input id="attachments" type="file" multiple accept="image/*,.pdf" />
                  <p className="text-xs text-muted-foreground">
                    Maksimal 5 ta fayl, har biri 2MB dan oshmasin (JPG, PNG, PDF)
                  </p>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Murojaat yuborish
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Murojaat yuborib, siz{" "}
                  <a href="#" className="text-primary hover:underline">
                    maxfiylik siyosati
                  </a>
                  ga rozilik bildirasiz
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}
