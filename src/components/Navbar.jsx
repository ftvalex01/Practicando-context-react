import React from 'react'
//import { useState } from 'react'
import { ThemeContext } from '../context/ThemeProvider'










const Navbar = () => {


const {theme,cambioColor} = React.useContext(ThemeContext)
/* const [color,setColor] = useState('#000')
const [textColor,setTextColor] = useState('')  */



    return (
        
        <div style={
            {
                background: theme.background,
                color: theme.color
            }
        }>
            <h1>Navbar</h1>
            <label>Color Texto</label>
            <input 
            type="color"
            onChange={e => cambioColor({...theme, color: e.target.value})}
            />
             <label>Color Fondo</label>
             <input 
            type="color"
            onChange={e => cambioColor({...theme, background: e.target.value})}
            />
        </div>
    )
}

export default Navbar
