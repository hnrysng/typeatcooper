import React from "react";
import './Landing.css';
import Card from './Card';
import './Card.css';


import Students_info from '../assets/info_con'


import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";



const Landing = () => {


    //  Animation
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {if (isInView){
        mainControls.start("visible")
    }}, [isInView])
    //  Animation


    const pageVariants = {
        initial: { opacity: 0, y: 50},
        animate: { opacity: 1, y: 0, transition: { duration: 0.35, delay: 0} },
        exit: { opacity: 0, y: -50, transition: { duration: 0.3 , delay: 0} }
      };
      
    //   useEffect(() => {
    //     window.scrollTo(0, 0)
    //   }, [])
      

    return(

        <div>
            <div className="landing_container">
                <motion.div 
                    className="intro_container grid_container"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >

                    <div className="landing_title">
                        <div className="kern">Type@Cooper</div>
                        Extended Program<br />
                        2023 – 2024
                    </div>
                    
                </motion.div>
            </div>
            
            <motion.div  className='card_container'
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
            >
                <Card designer={Students_info[0].designer} to={Students_info[0].to} typeface={Students_info[0].typeface} style_amount={Students_info[0].style_amount} color={Students_info[0].color} background={Students_info[0].background} next_to={Students_info[0].next_to} next_typeface={Students_info[0].next_typeface} next_designer={Students_info[0].next_designer}
                default_letter={Students_info[0].default_letter} active_letter={Students_info[0].active_letter}/>
                <Card designer={Students_info[1].designer} to={Students_info[1].to} typeface={Students_info[1].typeface} style_amount={Students_info[1].style_amount} color={Students_info[1].color} background={Students_info[1].background} next_to={Students_info[1].next_to} next_typeface={Students_info[1].next_typeface} next_designer={Students_info[1].next_designer}
                default_letter={Students_info[1].default_letter} active_letter={Students_info[1].active_letter}/>
                <Card designer={Students_info[2].designer} to={Students_info[2].to} typeface={Students_info[2].typeface} style_amount={Students_info[2].style_amount} color={Students_info[2].color} background={Students_info[2].background} next_to={Students_info[2].next_to} next_typeface={Students_info[2].next_typeface} next_designer={Students_info[2].next_designer}
                default_letter={Students_info[2].default_letter} active_letter={Students_info[2].active_letter}/>
                <Card designer={Students_info[3].designer} to={Students_info[3].to} typeface={Students_info[3].typeface} style_amount={Students_info[3].style_amount} color={Students_info[3].color} background={Students_info[3].background} next_to={Students_info[3].next_to} next_typeface={Students_info[3].next_typeface} next_designer={Students_info[3].next_designer}
                default_letter={Students_info[3].default_letter} active_letter={Students_info[3].active_letter}/>
                <Card designer={Students_info[4].designer} to={Students_info[4].to} typeface={Students_info[4].typeface} style_amount={Students_info[4].style_amount} color={Students_info[4].color} background={Students_info[4].background} next_to={Students_info[4].next_to} next_typeface={Students_info[4].next_typeface} next_designer={Students_info[4].next_designer}
                default_letter={Students_info[4].default_letter} active_letter={Students_info[4].active_letter}/>
                <Card designer={Students_info[5].designer} to={Students_info[5].to} typeface={Students_info[5].typeface} style_amount={Students_info[5].style_amount} color={Students_info[5].color} background={Students_info[5].background} next_to={Students_info[5].next_to} next_typeface={Students_info[5].next_typeface} next_designer={Students_info[5].next_designer}
                default_letter={Students_info[5].default_letter} active_letter={Students_info[5].active_letter}/>
                <Card designer={Students_info[6].designer} to={Students_info[6].to} typeface={Students_info[6].typeface} style_amount={Students_info[6].style_amount} color={Students_info[6].color} background={Students_info[6].background} next_to={Students_info[6].next_to} next_typeface={Students_info[6].next_typeface} next_designer={Students_info[6].next_designer}
                default_letter={Students_info[6].default_letter} active_letter={Students_info[6].active_letter}/>
                <Card designer={Students_info[7].designer} to={Students_info[7].to} typeface={Students_info[7].typeface} style_amount={Students_info[7].style_amount} color={Students_info[7].color} background={Students_info[7].background} next_to={Students_info[7].next_to} next_typeface={Students_info[7].next_typeface} next_designer={Students_info[7].next_designer}
                default_letter={Students_info[7].default_letter} active_letter={Students_info[7].active_letter}/>
                <Card designer={Students_info[8].designer} to={Students_info[8].to} typeface={Students_info[8].typeface} style_amount={Students_info[8].style_amount} color={Students_info[8].color} background={Students_info[8].background} next_to={Students_info[8].next_to} next_typeface={Students_info[8].next_typeface} next_designer={Students_info[8].next_designer}
                default_letter={Students_info[8].default_letter} active_letter={Students_info[8].active_letter}/>
                <Card designer={Students_info[9].designer} to={Students_info[9].to} typeface={Students_info[9].typeface} style_amount={Students_info[9].style_amount} color={Students_info[9].color} background={Students_info[9].background} next_to={Students_info[9].next_to} next_typeface={Students_info[9].next_typeface} next_designer={Students_info[9].next_designer}
                default_letter={Students_info[9].default_letter} active_letter={Students_info[9].active_letter}/>
                <Card designer={Students_info[10].designer} to={Students_info[10].to} typeface={Students_info[10].typeface} style_amount={Students_info[10].style_amount} color={Students_info[10].color} background={Students_info[10].background} next_to={Students_info[10].next_to} next_typeface={Students_info[10].next_typeface} next_designer={Students_info[10].next_designer}
                default_letter={Students_info[10].default_letter} active_letter={Students_info[10].active_letter}/>
                <Card designer={Students_info[11].designer} to={Students_info[11].to} typeface={Students_info[11].typeface} style_amount={Students_info[11].style_amount} color={Students_info[11].color} background={Students_info[11].background} next_to={Students_info[11].next_to} next_typeface={Students_info[11].next_typeface} next_designer={Students_info[11].next_designer}
                default_letter={Students_info[11].default_letter} active_letter={Students_info[11].active_letter}/>
                <Card designer={Students_info[12].designer} to={Students_info[12].to} typeface={Students_info[12].typeface} style_amount={Students_info[12].style_amount} color={Students_info[12].color} background={Students_info[12].background} next_to={Students_info[12].next_to} next_typeface={Students_info[12].next_typeface} next_designer={Students_info[12].next_designer}
                default_letter={Students_info[12].default_letter} active_letter={Students_info[12].active_letter}/>
                <Card designer={Students_info[13].designer} to={Students_info[13].to} typeface={Students_info[13].typeface} style_amount={Students_info[13].style_amount} color={Students_info[13].color} background={Students_info[13].background} next_to={Students_info[13].next_to} next_typeface={Students_info[13].next_typeface} next_designer={Students_info[13].next_designer}
                default_letter={Students_info[13].default_letter} active_letter={Students_info[13].active_letter}/>
                <Card designer={Students_info[14].designer} to={Students_info[14].to} typeface={Students_info[14].typeface} style_amount={Students_info[14].style_amount} color={Students_info[14].color} background={Students_info[14].background} next_to={Students_info[14].next_to} next_typeface={Students_info[14].next_typeface} next_designer={Students_info[14].next_designer}
                default_letter={Students_info[14].default_letter} active_letter={Students_info[14].active_letter}/>
                <Card designer={Students_info[15].designer} to={Students_info[15].to} typeface={Students_info[15].typeface} style_amount={Students_info[15].style_amount} color={Students_info[15].color} background={Students_info[15].background} next_to={Students_info[15].next_to} next_typeface={Students_info[15].next_typeface} next_designer={Students_info[15].next_designer}
                default_letter={Students_info[15].default_letter} active_letter={Students_info[15].active_letter}/>
                <Card designer={Students_info[16].designer} to={Students_info[16].to} typeface={Students_info[16].typeface} style_amount={Students_info[16].style_amount} color={Students_info[16].color} background={Students_info[16].background} next_to={Students_info[16].next_to} next_typeface={Students_info[16].next_typeface} next_designer={Students_info[16].next_designer}
                default_letter={Students_info[16].default_letter} active_letter={Students_info[16].active_letter}/>
                <Card designer={Students_info[17].designer} to={Students_info[17].to} typeface={Students_info[17].typeface} style_amount={Students_info[17].style_amount} color={Students_info[17].color} background={Students_info[17].background} next_to={Students_info[17].next_to} next_typeface={Students_info[17].next_typeface} next_designer={Students_info[17].next_designer}
                default_letter={Students_info[17].default_letter} active_letter={Students_info[17].active_letter}/>
                <Card designer={Students_info[18].designer} to={Students_info[18].to} typeface={Students_info[18].typeface} style_amount={Students_info[18].style_amount} color={Students_info[18].color} background={Students_info[18].background} next_to={Students_info[18].next_to} next_typeface={Students_info[18].next_typeface} next_designer={Students_info[18].next_designer}
                default_letter={Students_info[18].default_letter} active_letter={Students_info[18].active_letter}/>
            </motion.div>
        </div>
    )
}


export default Landing