import React from "react";
import './About.css';

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

const About = () => {

    //  Animation
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {if (isInView){
        mainControls.start("visible")
    }}, [isInView])
    //  Animation

    const pageVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0} },
        exit: { opacity: 0, y: -50, transition: { duration: 0.3 , delay: 0} }
      };
      
      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(

        <motion.div 
        className="about_container"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit">

            <div className="text_container">
                <div className="about_title">About</div>
                <div className="about_content">
                Extended Program is a year-long  educational certificate program offered by Type@Cooper. The program offers the foundations of typography in hands-on classes, while developing a broad understanding of the field through lectures, discussions, and research. Over the eight months, students design and develop their own typeface projects. This site showcases the final projects of the class of 2024.
                </div>
            </div>

            <div className="text_container">
                <div className="about_title">TC24 Class</div>
                <div className="about_content">
                    <div className='tc24class'><a href="" target="_blank">Trinidad Azpiroz</a></div>
                    <div className='tc24class'><a href="" target="_blank">Mel Barat Bours</a></div>
                    <div className='tc24class'><a href="" target="_blank">Eun Jung (Jennifer) Bahng</a></div>
                    <div className='tc24class'><a href="" target="_blank">Kimberly Ann Hopkins</a></div>
                    <div className='tc24class'><a href="" target="_blank">Jennifer Bowles</a></div>
                    <div className='tc24class'><a href="" target="_blank">Tucker Brown</a></div>
                    <div className='tc24class'><a href="" target="_blank">Mei Ying (Joey) Chen</a></div>
                    <div className='tc24class'><a href="" target="_blank">Xiaoyi Dong</a></div>
                    <div className='tc24class'><a href="" target="_blank">Júlia Figueiredo Accorsi</a></div>
                    <div className='tc24class'><a href="" target="_blank">Jiaqi (Amanda) Guo</a></div>
                    <div className='tc24class'><a href="" target="_blank">Jordan Grove</a></div>
                    <div className='tc24class'><a href="" target="_blank">Jie (JJ) Jian</a></div>
                    <div className='tc24class'><a href="" target="_blank">Dohee Lee</a></div>
                    <div className='tc24class'><a href="" target="_blank">Eunice Su</a></div>
                    <div className='tc24class'><a href="https://www.hnrysng.com/" target="_blank">Hyeong Geun (Henry) Song</a></div>
                    <div className='tc24class'><a href="" target="_blank">Jeremy Vinson</a></div>
                    <div className='tc24class'><a href="" target="_blank">Francisco Javier Zabaleta Vilar</a></div>
                    <div className='tc24class'><a href="" target="_blank">Hui Zeng</a></div>
                    <div className='tc24class'><a href="" target="_blank">Chris Zhang</a></div>
                </div>
            </div>

            <div className="text_container">
                <div className="about_title">Instructors</div>
                <div className="about_content">
                    <div>Hannes Famira</div>
                    <div>Cara Di Edwardo</div>
                    <div>Alexander Tochilovsky</div>
                    <div>Ken Barber</div>
                    <div>Beau Parent</div>
                    <div>Benjamin Tuttle</div>
                    <div>Kevin Foley</div>
                    <div>Stephanie Moore</div>
                    <div>John Downer</div>
                    <div>Gen Ramirez</div>
                    <div>Ryan Bugden</div>
                    <div>John Downer</div>
                    <div>Erik van Blokland</div>
                    <div>Colin Ford</div>
                    <div>Flavia Zimbardi</div>
                </div>
            </div>

            <div className="text_container">
                <div className="about_title">Guest Critics</div>
                <div className="about_content">
                    <div>Ryan Bugden</div>
                    <div>David Jonathan Ross</div>
                    <div>Christian Schwartz</div>
                    <div>Benjamin Tuttle</div>
                </div>
            </div>

            <div className="text_container">
                <div className="about_title">Site by</div>
                <div className="about_content">
                    <div>Joey Chen</div>
                    <div>Amanda Guo</div>
                    <div>Jie (JJ) Jian</div>
                    <div>Hyeong Geun (Henry) Song</div>
                </div>
            </div>

            <div className="text_container">
                <div className="about_title">Text Set</div>
                <div className="about_content">
                    <div>MD System by Mass-Driver</div>
                </div>
            </div>

            <div className="text_container copyright">
                <div className="about_content">© 2024</div>
            </div>
            
        </motion.div>
    )
}


export default About