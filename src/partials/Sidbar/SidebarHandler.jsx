import { useState } from "react"

const SidebarHandler = ({ name, child, link, children }) => {
    const [open, setOpen] = useState(false)
    if (child.length === 0) {
        return (

            <ul>
                <li>
                    <a href={link}>{name}</a>
                </li>
            </ul>

        )
    }else{
        return (

            <ul>
                <li onClick={() => setOpen(!open)}>
                    <a href="#0">{name}</a>
                </li>
                <div className={open ? "" : "hidden"}>
                    {children}
                </div>
            </ul>

        )
    }

}
export default SidebarHandler