import { ReactNode } from "react";

interface ISectionTitle {
    children: ReactNode,
    inverted?: boolean,
    small?: boolean
}

export default function SectionTitle({ children, inverted = false, small = false }: ISectionTitle) {
    const bg: string = inverted ? 'bg-green' : 'bg-white';
    const text: string = inverted ? 'text-white' : 'text-green';
    const darkShadowColor: string = inverted ? 'dark:shadow-green' : 'dark:shadow-white';
    const width: string = small ? 'w-full md:w-6/12' : 'w-full';

    return (
        <div className={`${bg} ${width} ${darkShadowColor} ${text} dark:text-black
         shadow-xl/30 shadow-black rounded-md text-center my-4 self-center`}>

            <h3 className="uppercase">{children}</h3>
        </div>
    )
}
