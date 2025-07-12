"use client";

import { EnvelopeSimple, GitlabLogoSimple, LinkedinLogoIcon, MapPin, Phone, TelegramLogoIcon, WhatsappLogo, YoutubeLogoIcon } from "@phosphor-icons/react";

interface IIcon {
    IconComponent: React.ElementType,
    size: number
}

function Icon({ IconComponent, size }: IIcon) {

    return (
        <div className={`bg-white rounded-full overflow-hidden flex justify-center items-center`}
            style={{ width: `${size / 4}rem`, height: `${size / 4}rem` }}>
            <IconComponent size={size * 3} className="text-orange" />
        </div>
    )
}

export default function IconsBlock() {
    const linkClassName: string = `flex items-center justify-start gap-2 origin-left
    hover:scale-135 hover:text-black hover:brightness-75 dark:hover:brightness-200`;
    const iconSize: number = 10;
    return (
        <div className="grid grid-rows-4 gap-2">
            <a href="mailto:contact@glebsnezhko.com" className={linkClassName}>
                <Icon IconComponent={EnvelopeSimple} size={iconSize}></Icon>
                <span>E-mail</span>
            </a>

            <a href="tel:+34695299357" className={linkClassName}>
                <Icon IconComponent={Phone} size={iconSize}></Icon>
                <span>Phone</span>
            </a>

            <a href="https://gitlab.com/glebsneg" target="_blank" rel="noopener noreferrer" className={linkClassName}>
                <Icon IconComponent={GitlabLogoSimple} size={iconSize}></Icon>
                <span>Gitlab</span>
            </a>

            <a href="https://www.linkedin.com/in/glebsneg/" target="_blank" rel="noopener noreferrer" className={linkClassName}>
                <Icon IconComponent={LinkedinLogoIcon} size={iconSize}></Icon>
                <span>Linkedin</span>
            </a>

            <a href="https://youtube.com/@glebsneg" target="_blank" rel="noopener noreferrer" className={linkClassName}>
                <Icon IconComponent={YoutubeLogoIcon} size={iconSize}></Icon>
                <span>YouTube</span>
            </a>

            <a href="https://t.me/glebsneg" target="_blank" rel="noopener noreferrer" className={linkClassName}>
                <Icon IconComponent={TelegramLogoIcon} size={iconSize}></Icon>
                <span>Telegram</span>
            </a>

            <a href="https://wa.me/380997309909" target="_blank" rel="noopener noreferrer" className={linkClassName}>
                <Icon IconComponent={WhatsappLogo} size={iconSize}></Icon>
                <span>WhatsApp</span>
            </a>

            <a href="/googleMapsLink" target="_blank" rel="noopener noreferrer" className={linkClassName}>
                <Icon IconComponent={MapPin} size={iconSize}></Icon>
                <span>Spain, Valencia</span>
            </a>

        </div >
    )
}
