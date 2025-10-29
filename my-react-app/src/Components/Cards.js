import React from 'react'
import { NavLink } from 'react-router-dom';
import Recipe from './Recipe';

const Cards = ({detail}) => {
    console.log(detail);
  return (
    <div className='meals'>
        {
           !detail ? "" : detail.map((curItem,index)=>{
            console.log(curItem)
                return(
                    <div className='mealImg'>
                    <img src={curItem.strMealThumb}/>
                    <p>{curItem.strMeal}</p>
                    <NavLink to={`/${curItem.idMeal}`}> <button >Recipe </button></NavLink>
                    
                    </div>
                )
            })
        }
    </div>
  )
}

export default Cards