import React from 'react';

import Showcase from './Showcase.js';
import './Showcase.css';

import Students_info from '../../assets/info_con.js';

import { useEffect } from "react";
import { motion } from "framer-motion";

const Rügerin = (props) => {

    const pageVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0} },
        exit: { opacity: 0, y: -50, transition: { duration: 0.3 , delay: 0} }
      };
      
      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  const sequence = 15;

  return (
    <motion.div 
        className="about_container"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit">
      <Showcase 
        designer={Students_info[sequence].designer}
        typeface={Students_info[sequence].typeface}
        styles={Students_info[sequence].styles}
        description={Students_info[sequence].description}
        link = {Students_info[sequence].link}
        next_to={Students_info[sequence].next_to}
        next_designer={Students_info[sequence].next_designer}
        next_typeface={Students_info[sequence].next_typeface}
        cover = {Students_info[sequence].cover}
        img_0 = {Students_info[19].rect}
        img_3 = {Students_info[19].rect}
        img_4 = {Students_info[19].rect}
        img_a = {Students_info[19].sqr}
        img_b = {Students_info[19].sqr}
        img_c = {Students_info[19].sqr}
        img_d = {Students_info[19].sqr}>
      </Showcase>
    </motion.div>
  );
};

export default Rügerin;