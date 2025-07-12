import { ReactNode } from "react";

function YearSpan({ children }: { children: ReactNode }) {
    return <span className="font-bold text-sm border-2 text-white bg-orange w-4/12 h-fit border-orange rounded-2xl text-center">{children}</span>
}

interface IExperienceBlock {
    children: ReactNode,
    year: string,
    stack: string,
    title: string,
    period?: string
}

export default function ExperienceBlock({ children, year, stack, title, period }: IExperienceBlock) {
    let finalPeriod: string | undefined = period;

    if (!finalPeriod) {
        const [firstDateStr, secondDateStr] = year.split('-').map(s => s.trim());
        const hasMonths = firstDateStr && secondDateStr && (/[a-zA-Z]{3}/.test(firstDateStr) || /[a-zA-Z]{3}/.test(secondDateStr));

        let monthsStr: string = '';
        let years: number = 0;

        if (hasMonths) {
            const firstDate: Date = new Date(firstDateStr);
            const secondDate: Date = secondDateStr.toLowerCase() === 'present' ? new Date() : new Date(secondDateStr);

            years = secondDate.getFullYear() - firstDate.getFullYear();
            let months = secondDate.getMonth() - firstDate.getMonth();

            if (months < 0) {
                years -= 1;
                months += 12;
            }

            monthsStr = months > 0 ? `${months} mo` : monthsStr;
        } else {
            years = +secondDateStr - +firstDateStr;
        }
        const yearsStr: string = years > 0 ? `${years} yrs ` : '';
        finalPeriod = years || monthsStr ? `(${yearsStr}${monthsStr})` : '';
    }

    return (
        <div className="flex flex-col my-2 border-2 rounded-2xl px-4 py-2 border-green shadow-[0px_4px_43px_-33px_rgba(0,_0,_0,_0.7)] shadow-black dark:shadow-green">
            <div className="flex flex-row justify-between">
                <YearSpan>{year} <br /> {finalPeriod}</YearSpan>
                <code className="max-w-7/12 p-2 border-2 border-orange rounded-2xl text-center">Stack: {stack}</code>
            </div>
            <h3 className="mt-1 text-center">{title}</h3>
            {children}
        </div>
    )
}