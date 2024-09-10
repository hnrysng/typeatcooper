import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import {Link} from "react-router-dom";
import Students_info from '../assets/info_con.js';

import './List.css';

const List = () => {
    
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => setHoveredIndex(index);
  
    const handleMouseLeave = () => setHoveredIndex(null);

    const getSlideStyle = (index, hoveredIndex) => ({
        background:  Students_info[index].background,
        opacity: hoveredIndex === index ? 1 : 0,
        transform: hoveredIndex === index ? `translateY(-20px)` : 'translateY(0)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        });

    const slide_style_0 = getSlideStyle(0, hoveredIndex);
    const slide_style_1 = getSlideStyle(1, hoveredIndex);
    const slide_style_2 = getSlideStyle(2, hoveredIndex);
    const slide_style_3 = getSlideStyle(3, hoveredIndex);
    const slide_style_4 = getSlideStyle(4, hoveredIndex);
    const slide_style_5 = getSlideStyle(5, hoveredIndex);
    const slide_style_6 = getSlideStyle(6, hoveredIndex);
    const slide_style_7 = getSlideStyle(7, hoveredIndex);
    const slide_style_8 = getSlideStyle(8, hoveredIndex);
    const slide_style_9 = getSlideStyle(9, hoveredIndex);
    const slide_style_10 = getSlideStyle(10, hoveredIndex);
    const slide_style_11 = getSlideStyle(11, hoveredIndex);
    const slide_style_12 = getSlideStyle(12, hoveredIndex);
    const slide_style_13 = getSlideStyle(13, hoveredIndex);
    const slide_style_14 = getSlideStyle(14, hoveredIndex);
    const slide_style_15 = getSlideStyle(15, hoveredIndex);
    const slide_style_16 = getSlideStyle(16, hoveredIndex);
    const slide_style_17 = getSlideStyle(17, hoveredIndex);
    const slide_style_18 = getSlideStyle(18, hoveredIndex);
  
    const pageVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0} },
        exit: { opacity: 0, y: -50, transition: { duration: 0.3 , delay: 0} }
      };


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(

        <motion.div  className="index_container" variants={pageVariants} initial="initial" animate="animate" exit="exit">

            <div className="index_list_displayer">
                <img className="index_display" style={slide_style_0} src={Students_info[0].active_letter}></img>
                <img className="index_display" style={slide_style_1} src={Students_info[1].active_letter}></img>
                <img className="index_display" style={slide_style_2} src={Students_info[2].active_letter}></img>
                <img className="index_display" style={slide_style_3} src={Students_info[3].active_letter}></img>
                <img className="index_display" style={slide_style_4} src={Students_info[4].active_letter}></img>
                <img className="index_display" style={slide_style_5} src={Students_info[5].active_letter}></img>
                <img className="index_display" style={slide_style_6} src={Students_info[6].active_letter}></img>
                <img className="index_display" style={slide_style_7} src={Students_info[7].active_letter}></img>
                <img className="index_display" style={slide_style_8} src={Students_info[8].active_letter}></img>
                <img className="index_display" style={slide_style_9} src={Students_info[9].active_letter}></img>
                <img className="index_display" style={slide_style_10} src={Students_info[10].active_letter}></img>
                <img className="index_display" style={slide_style_11} src={Students_info[11].active_letter}></img>
                <img className="index_display" style={slide_style_12} src={Students_info[12].active_letter}></img>
                <img className="index_display" style={slide_style_13} src={Students_info[13].active_letter}></img>
                <img className="index_display" style={slide_style_14} src={Students_info[14].active_letter}></img>
                <img className="index_display" style={slide_style_15} src={Students_info[15].active_letter}></img>
                <img className="index_display" style={slide_style_16} src={Students_info[16].active_letter}></img>
                <img className="index_display" style={slide_style_17} src={Students_info[17].active_letter}></img>
                <img className="index_display" style={slide_style_18} src={Students_info[18].active_letter}></img>
            </div>


            <div className="index_list_container">
                <Link to={Students_info[0].to} className="index_info_container" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
                    <div className="index_typeface">{Students_info[0].typeface}</div>
                    <div className="index_designer">{Students_info[0].designer}</div>
                </Link>
                <Link to={Students_info[1].to} className="index_info_container" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
                    <div className="index_typeface">{Students_info[1].typeface}</div>
                    <div className="index_designer">{Students_info[1].designer}</div>
                </Link>
                <Link to={Students_info[2].to} className="index_info_container" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
                    <div className="index_typeface">{Students_info[2].typeface}</div>
                    <div className="index_designer">{Students_info[2].designer}</div>
                </Link>
                <Link to={Students_info[3].to} className="index_info_container" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
                    <div className="index_typeface">{Students_info[3].typeface}</div>
                    <div className="index_designer">{Students_info[3].designer}</div>
                </Link>
                <Link to={Students_info[4].to} className="index_info_container" onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>
                    <div className="index_typeface">{Students_info[4].typeface}</div>
                    <div className="index_designer">{Students_info[4].designer}</div>
                </Link>
                <Link to={Students_info[5].to} className="index_info_container" onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>
                    <div className="index_typeface">{Students_info[5].typeface}</div>
                    <div className="index_designer">{Students_info[5].designer}</div>
                </Link>
                <Link to={Students_info[6].to} className="index_info_container" onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave}>
                    <div className="index_typeface">{Students_info[6].typeface}</div>
                    <div className="index_designer">{Students_info[6].designer}</div>
                </Link>
                <Link to={Students_info[7].to} className="index_info_container" onMouseEnter={() => handleMouseEnter(7)} onMouseLeave={handleMouseLeave}>
                    <div className="index_typeface">{Students_info[7].typeface}</div>
                    <div className="index_designer">{Students_info[7].designer}</div>
                </Link>
                <Link to={Students_info[8].to} className="index_info_container" onMouseEnter={() => handleMouseEnter(8)} onMouseLeave={handleMouseLeave}>
                    <div className="index_typeface">{Students_info[8].typeface}</div>
                    <div className="index_designer">{Students_info[8].designer}</div>
                </Link>
                <Link to={Students_info[9].to} className="index_info_container" onMouseEnter={() => handleMouseEnter(9)} onMouseLeave={handleMouseLeave}>
                    <div className="index_typeface">{Students_info[9].typeface}</div>
                    <div className="index_designer">{Students_info[9].designer}</div>
                </Link>
                <Link to={Students_info[10].to} className="index_info_container" onMouseEnter={() => handleMouseEnter(10)} onMouseLeave={handleMouseLeave}>
                    <div className="index_typeface">{Students_info[10].typeface}</div>
                    <div className="index_designer">{Students_info[10].designer}</div>
                </Link>
                <Link to={Students_info[11].to} className="index_info_container" onMouseEnter={() => handleMouseEnter(11)} onMouseLeave={handleMouseLeave}>
                    <div className="index_typeface">{Students_info[11].typeface}</div>
                    <div className="index_designer">{Students_info[11].designer}</div>
                </Link>
                <Link to={Students_info[12].to} className="index_info_container" onMouseEnter={() => handleMouseEnter(12)} onMouseLeave={handleMouseLeave}>
                    <div className="index_typeface">{Students_info[12].typeface}</div>
                    <div className="index_designer">{Students_info[12].designer}</div>
                </Link>
                <Link to={Students_info[13].to} className="index_info_container" onMouseEnter={() => handleMouseEnter(13)} onMouseLeave={handleMouseLeave}>
                    <div className="index_typeface">{Students_info[13].typeface}</div>
                    <div className="index_designer">{Students_info[13].designer}</div>
                </Link>
                <Link to={Students_info[14].to} className="index_info_container" onMouseEnter={() => handleMouseEnter(14)} onMouseLeave={handleMouseLeave}>
                    <div className="index_typeface">{Students_info[14].typeface}</div>
                    <div className="index_designer">{Students_info[14].designer}</div>
                </Link>
                <Link to={Students_info[15].to} className="index_info_container" onMouseEnter={() => handleMouseEnter(15)} onMouseLeave={handleMouseLeave}>
                    <div className="index_typeface">{Students_info[15].typeface}</div>
                    <div className="index_designer">{Students_info[15].designer}</div>
                </Link>
                <Link to={Students_info[16].to} className="index_info_container" onMouseEnter={() => handleMouseEnter(16)} onMouseLeave={handleMouseLeave}>
                    <div className="index_typeface">{Students_info[16].typeface}</div>
                    <div className="index_designer">{Students_info[16].designer}</div>
                </Link>
                <Link to={Students_info[17].to} className="index_info_container" onMouseEnter={() => handleMouseEnter(17)} onMouseLeave={handleMouseLeave}>
                    <div className="index_typeface">{Students_info[17].typeface}</div>
                    <div className="index_designer">{Students_info[17].designer}</div>
                </Link>
                <Link to={Students_info[18].to} className="index_info_container" onMouseEnter={() => handleMouseEnter(18)} onMouseLeave={handleMouseLeave}>
                    <div className="index_typeface">{Students_info[18].typeface}</div>
                    <div className="index_designer">{Students_info[18].designer}</div>
                </Link>
            </div>

        </motion.div>

    )
}


export default List