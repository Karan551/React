import React ,{useContext} from 'react';
import ThemeContext from '../Context/ThemeContext';
import AppTheme from '../Color';
// import { useContext } from 'react';

const btnCss = {
    backgroundColor: "#26ae60",
    padding: "1rem",
    fontSize: "1.2rem",
    color: "#fff",
    borderRadius: "15px"
};

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    return (
        <>
            <div style={{
                padding: "1rem",
                backgroundColor: currentTheme.backgroundColor,
                color: currentTheme.textColor,
                textAlign: "center"
                }}>
                <h1>Context API Theme Toggler</h1>
                <p>This is a nice Paragraph.</p>
                <button style={{
                    backgroundColor: "#26ae60",
                    padding: "1rem",
                    fontSize: "1.2rem",
                    color: "#fff",
                    borderRadius: "15px",
                    border:`${currentTheme.border}`,
                }
                }
                >Toggle Theme</button>
            </div>
        </>
    );
};
export default HeroSection;