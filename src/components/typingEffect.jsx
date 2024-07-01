import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/theme';

const TypingEffect = ({ text: textx }) => {
  const text = textx;
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

    const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

  useEffect(() => {
    let typingTimeout;
    let resetTimeout;

    if (index < text.length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(index));
        setIndex(index + 1);
      }, 100); // Adjust the speed here
    } else {
      resetTimeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, 2000); // Adjust the pause before restarting
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(resetTimeout);
    };
  }, [index, displayedText, text]);

  return (
    // <h1 style={{ color: theme.bold }} className="md:text-[50px] text-[40px] md:leading-[4rem] leading-[3rem] md:mb-10 my-5 font-bold">{ item.title }</h1>
  <h1 style={{ color: theme.bold }} className="text md:text-[50px] text-[40px] md:leading-[4rem] leading-[3rem] md:mb-10 my-5 font-bold">{displayedText}</h1>)
};

export default TypingEffect;
