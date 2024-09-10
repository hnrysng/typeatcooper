import React, { useState } from 'react';
import { Link, Routes, Route } from "react-router-dom";
import './Showcase.css'; // Importing the CSS file for styling



const Showcase = (props) => {


  return (
    <>
    <div className="showcase">
      
      <div className='image_container'>
        <img className='image cover' src={props.cover}></img>
      </div>
      
    <div className='info'>
      <div className='showcase_title'>Designer</div>
      <div className='showcase_description'><a class='designer_link' href={props.link} target='_blank'>{props.designer}</a></div>
    

      <div className='showcase_title'>Typeface</div>
      <div className='showcase_description'>{props.typeface}</div>

      <div className='showcase_title'>Styles</div>
      <div className='showcase_description'>{props.styles}</div>
    </div>

    <div className='description'>
      <div className='showcase_title'>Description</div>
      <div>{props.description}</div>
    </div>
      
      {props.img_0 &&
        <div className='image_container'>
          <img className='image rect_image' src={props.img_0}></img>
        </div>
      }
      
      {props.img_a && props.img_b &&
        <>
          <img className='image sqr_image_a' src={props.img_a}></img>
          <img className='image sqr_image_b' src={props.img_b}></img>
        </>
      }

      {props.img_1 &&
        <div className='image_container'>
          <img className='image rect_image' src={props.img_1}></img>
        </div>
      }
      
      {props.img_c && props.img_d &&
        <>
          <img className='image sqr_image_a' src={props.img_c}></img>
          <img className='image sqr_image_b' src={props.img_d}></img>
        </>
      }

      {props.img_2 &&
        <div className='image_container'>
          <img className='image rect_image' src={props.img_2}></img>
        </div>
      }
      
      {props.img_e && props.img_f &&
        <>
          <img className='image sqr_image_a' src={props.img_e}></img>
          <img className='image sqr_image_b' src={props.img_f}></img>
        </>
      }

      {props.img_3 &&
        <div className='image_container'>
          <img className='image rect_image' src={props.img_3}></img>
        </div>
      }
      
      {props.img_g && props.img_h &&
        <>
          <img className='image sqr_image_a' src={props.img_g}></img>
          <img className='image sqr_image_b' src={props.img_h}></img>
        </>
      }

      {props.img_4 &&
        <div className='image_container'>
          <img className='image rect_image' src={props.img_4}></img>
        </div>
      }
      
      {props.img_i && props.img_j &&
        <>
          <img className='image sqr_image_a' src={props.img_i}></img>
          <img className='image sqr_image_b' src={props.img_j}></img>
        </>
      }

      {props.img_5 &&
        <div className='image_container'>
          <img className='image rect_image' src={props.img_5}></img>
        </div>
      }
      
      {props.img_k && props.img_l &&
        <div className='image_container'>
          <img className='image sqr_image_a' src={props.img_k}></img>
          <img className='image sqr_image_b' src={props.img_l}></img>
        </div>
      }

      {props.img_6 &&
        <div className='image_container'>
          <img className='image rect_image' src={props.img_6}></img>
        </div>
      }

      </div>

      <Link className='next_container'
        to = {props.next_to}>
        <div className='next'>Next</div>
        <div className='next next_info'>{props.next_typeface}</div>
        <div className='next next_info'>{props.next_designer}</div>
      </Link>

    </>
  );
};

export default Showcase;