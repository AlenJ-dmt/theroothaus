import { Link } from "react-router-dom"
import React, { FC, Dispatch, useState } from "react"
import "./SubMenu.scss"
import { BsChevronDoubleDown } from "react-icons/bs"


interface IMenuLinkProps {
    open: boolean,
    labels?: string[]
    mainLabel: string;
    directions?: string[]
    setOpen: Dispatch<React.SetStateAction<boolean>>
}

export const SubMenu: FC<IMenuLinkProps> = ({ open, labels, mainLabel, directions, setOpen }) => {

    const arrow = document.getElementById("submenu-arrow")

    return (
        <div className="submenu-container">
            <div className="main-link">
                <p>{mainLabel}</p>
                <BsChevronDoubleDown
                    id="submenu-arrow"

                    onClick={() => {
                        if (open) {
                            arrow?.classList.remove("rotate-open")
                            arrow?.classList.add("rotate-close")
                        }
                        else if (!open) {

                            arrow?.classList.remove("rotate-close")
                            arrow?.classList.add("rotate-open")
                        }

                        setOpen(!open)

                    }
                    } />
            </div>
            {open &&
                labels?.map(label =>  <div className="main-link">
                    
                    <a>{label}</a>
                </div>)
            }
        </div>
    )
}