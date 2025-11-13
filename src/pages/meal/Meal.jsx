import { step, Typography } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Meal() {
  const [data, setData] =useState();
  const {id} = useParams();

  const getData = async () =>{
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php`,
        {
          params: {
            i: id,
          }
        }
      );
      setData(response.data);
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getData();
  },[id]);


  return (
    <>
    <div className='p-5 min-h-screen bg-gray-100'>
        <div className='p-5 flex min-h-screen bg-gray-100 justify-center items-center'>
        {data && data.meals.map((meal)=>{

          // console.log(Object.keys(meal))
          const YoutubeId = meal.strYoutube.split('=')[1];

          return <div key={meal.idMeal}
        className='max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-6'>

          <Typography variant='h4' className='font-bold text-blue-gray-800'>{meal.strMeal}</Typography>

            <div className=''>
              <img src={meal.strMealThumb} alt={meal.strMeal} 
              className='w-full h-auto rounded-lg shadow-md object-cover mb-2'/>

              {YoutubeId && (
                <div className='aspect-w-16 aspect-h-9'>
                  <iframe 
                    className='w-full h-full rounded-lg'
                    width="420"
                    height="315"
                    allowFullScreen
                    title={meal.strMeal}
                    src={`https://www.youtube.com/embed/${YoutubeId}`}>
            
                  </iframe>
              </div>
            )}

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <Typography variant='h6' className='mb-2 font-semibold text-gray-800'>Ingredients</Typography>
                <ul>
                  {Object.keys(meal).map((str)=>{
                    if(str.includes('strIngredient'))
                      return <li key={str} className='text-gray-700 leading-relaxed'>{meal[str]}</li>
                  })}
                </ul>
                
              </div>

              <div>
                <Typography variant='h6' className='mb-2 font-semibold text-gray-800'>Measure</Typography>
                <ul>
                  {Object.keys(meal).map((str)=>{
                    if(str.includes('strMeasure'))
                      return <li key={str} className='text-gray-700'>{meal[str]}</li>
                  })}
                </ul>
                
              </div>
            </div>

            <div>
              <Typography variant='h5' className='mb-2 font-semibold text-gray-800'>Instruction</Typography>
              <ol className='list-decimal pl-5 space-y-2 text-gray-700'>
                <li className='leading-relaxedtext-gray-700 leading-relaxed whitespace-pre-line'>{meal.strInstructions}</li>
              </ol>
              
            </div>

          </div>
        })}
      </div>
    </div>
    
    </>
    
  )
}
