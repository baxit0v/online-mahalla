import type { PropsWithChildren } from "react"
import { Footer } from "./footer"
import { Header } from "./header"

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
