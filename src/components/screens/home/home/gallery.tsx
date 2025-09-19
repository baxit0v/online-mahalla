import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Download } from "lucide-react"
import { Container } from "src/components/layout"

const galleryImages = [
    {
        src: "https://static.vecteezy.com/system/resources/thumbnails/013/526/396/small_2x/working-together-group-of-young-modern-people-in-smart-casual-wear-discussing-business-and-smiling-while-sitting-in-the-creative-office-photo.jpg",
        alt: "Aholi bilan uchrashuv - Yanvar 2025",
        title: "Aholi bilan uchrashuv",
        date: "15 Yanvar 2025",
    },
    {
        src: "https://cdn.sanity.io/images/uqxwe2qj/production/4ee9fb18bdc214aefebf7859557a6611125c3841-760x426.png?q=80&auto=format&fit=clip&w=760",
        alt: "Yangi biznes ochilishi marosimi",
        title: "Biznes ochilishi",
        date: "22 Yanvar 2025",
    },
    {
        src: "https://crownworkspace.com/wp-content/uploads/2022/04/53110373_l-530x354.jpg",
        alt: "Ijtimoiy yordam tarqatish",
        title: "Ijtimoiy yordam",
        date: "28 Yanvar 2025",
    },
    {
        src: "https://ychef.files.bbci.co.uk/1280x720/p09bl4jj.jpg",
        alt: "Infratuzilma rivojlantirish ishlari",
        title: "Infratuzilma ishlari",
        date: "5 Fevral 2025",
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1661725357418-fb09ff7c0aae?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwd29ya2VyfGVufDB8fDB8fHww",
        alt: "Ta'lim dasturlari",
        title: "Ta'lim dasturlari",
        date: "12 Fevral 2025",
    },
    {
        src: "https://images.stockcake.com/public/6/6/4/6646dce7-6557-4d2c-a47a-a8806e8c07fa_large/office-night-shift-stockcake.jpg",
        alt: "Madaniy tadbirlar",
        title: "Madaniy tadbirlar",
        date: "18 Fevral 2025",
    },
]

export const Gallery = () => {
    return (
        <section id="gallery" className="py-20">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Faoliyat galereyasi</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Mahalla hayotidan lavhalar va muhim tadbirlar
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={image.src || "/placeholder.svg"}
                                    alt={image.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex space-x-2">
                                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                                            <Download className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                    <h3 className="text-white font-medium text-sm mb-1">{image.title}</h3>
                                    <p className="text-white/80 text-xs">{image.date}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Button variant="outline" size="lg">
                        Barcha rasmlarni ko'rish
                    </Button>
                </div>
            </Container>
        </section>
    )
}
