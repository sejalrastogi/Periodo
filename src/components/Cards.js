import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
           <h1>Check out these HACKS and TIPS!</h1>
           <div className='cards__container'>
               <div className='cards__wrapper'>
                   <ul className='cards__items'>
                       <CardItem 
                       src= "images/img-1.jpg"
                       text="How to get relief from Period Cramps"
                       label='Pain'
                       path="/services"
                       />
                       <CardItem 
                       src= "images/img-2.jpg"
                       text="Menstrual Cup Hacks you should Know"
                       label='Hacks'
                       path="/services"
                       />
                   </ul>
                   <ul className='cards__items'>
                       <CardItem 
                       src= "images/img-3.jpg"
                       text="Tips to maintain Menstrual Hygiene"
                       label='Tips'
                       path="/services"
                       />
                       <CardItem 
                       src= "images/img-4.jpg"
                       text="Work life balance TIPS that help moms blend a Carrer with Family time"
                       label='Tips'
                       path="/services"
                       />
                       <CardItem 
                       src= "images/img-5.jpg"
                       text="Hacks for Personal Hygiene and Comfort"
                       label='Self Care'
                       path="/services"
                       />
                   </ul>
               </div>
           </div>
        </div>
    )
}

export default Cards
