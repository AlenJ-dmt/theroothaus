import { FC } from "react"

interface IIconProps {
    color: string
    size: string
    onClick: () => void
}


export const LeftArrowIcon: FC<IIconProps> = ({ color, size, onClick }) => {
    return (
        <svg
            onClick={onClick}
            stroke={color}
            fill={color}
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height={size}
            width={size}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z">
            </path>
        </svg>
    )
}