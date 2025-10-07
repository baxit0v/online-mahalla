import { Hero } from "./home/hero"
import { Services } from "./home/services"
import { BusinessNavigator } from "./home/business-navigator"
import RegionalMap from "./home/regional-map"
import { StatsDashboard } from "./home/stats-dashboard"
import { Gallery } from "./home/gallery"
import { Faq } from "./home/faq"
import { ContactForm } from "./home/contact-form"
import { News } from "./home/news"

export const HomePage = () => {
    return (
        <main className="bg-gradient-to-b from-sky-100 via-sky-100 to-white">
            <Hero />
            <RegionalMap />
            <Services />
            <News/>
            <BusinessNavigator />
            <StatsDashboard />
            <Gallery />
            <Faq />
            <ContactForm />
        </main>
    )
}
