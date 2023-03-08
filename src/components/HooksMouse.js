import React, { useEffect } from 'react'

function HooksMouse() {
    const [y,setY] = React.useState(0);
    const [x,setX] = React.useState(0);

    const logMouse = e => {
        console.log("Mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("UseEffect Called")
        window.addEventListener("mousemove", logMouse)

        return() => {
            console.log("Component unmount code")
            window.removeEventListener("mousemove", logMouse)
        }
    }, [])
  return (
    <div>
        x -{x} y - {y}
    </div>
  )
}

export default HooksMouse
