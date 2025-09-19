import { Hero } from "./home/hero"
import { Services } from "./home/services"
import { BusinessNavigator } from "./home/business-navigator"
import RegionalMap from "./home/regional-map"
import { StatsDashboard } from "./home/stats-dashboard"
import { PriorityServices } from "./home/priority-services"
import { Gallery } from "./home/gallery"
import { Faq } from "./home/faq"
import { ContactForm } from "./home/contact-form"

export const HomePage = () => {
    return (
        <main className="bg-white">
            <Hero />
            <Services />
            <BusinessNavigator />
            <RegionalMap />
            <StatsDashboard />
            <PriorityServices />
            <Gallery />
            <Faq />
            <ContactForm />
        </main>
    )
}
