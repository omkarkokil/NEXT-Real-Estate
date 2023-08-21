"use client"
import { useMemo } from "react"
import { usePathname } from "next/navigation"

const useRoutes = () => {
    const pathname = usePathname()
    const routes = useMemo(() => [
        {
            label: "Buy",
            href: "/",
            active: pathname === "/"
        },
        {
            label: "Rent",
            href: "/rent",
            active: pathname === "/rent"
        },
        {
            label: "PG",
            href: "/pg",
            active: pathname === "/pg"
        },
        {
            label: "Plots",
            href: "/plots",
            active: pathname === "/plots"
        },
        {
            label: "Commercial",
            href: "/commercial",
            active: pathname === "/commercial"
        },
    ], [pathname])

    return routes
}

export default useRoutes
