

'use client'
import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

enum Themes {
    light = 'light',
    dark = 'dark',
}

export default function ThemeSwitcher() {
    const { setTheme } = useTheme();
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null;

    function BtnSwitcher({ children, onClick }: { children: ReactNode, onClick: () => void }) {
        return (<a
            onClick={onClick}
            className="p-2 rounded-xl hover:bg-green hover:text-white dark:hover:text-black hover:brightness-75 dark:hover:brightness-150 text-black">
            {children}
        </a>)
    }

    return (
        <div className="flex justify-around fixed right-2 top-2 p-1 rounded-2xl bg-green/50 border-orange border-2 z-1">
            <BtnSwitcher onClick={() => setTheme(Themes.light)}>
                <Sun size={20}></Sun>
            </BtnSwitcher>
            <BtnSwitcher onClick={() => setTheme(Themes.dark)}>
                <Moon size={20}></Moon>
            </BtnSwitcher>
        </div>

    )
}