// import { Avatar } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

export default function MealItems() {
    const { category } =useParams()
    const [data, setData] = useState();
    const nav = useNavigate();

    const getData =async () =>{
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php`,{
                params: {
                    c: category
                }

            });
            setData(response.data)
        }
        catch (error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <>
    <div className='p-5'>
        <div className='space-y-4'>
            {data && data.meals?.map((meal)=>{
                return <Card className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 ease-in-out" key={meal.idMeal}
                onClick={()=> nav(`/meal/${meal.idMeal}`)}>
                    {/* <List className=''> */}
                        {/* <ListItem> */}
                        
                            <Avatar variant="circular" alt="candice" src={meal.strMealThumb} 
                            className='w-20 h-20 object-cover'/>
                        
                        <div className='flex flex-col space-y-2'>
                            <Typography variant="body" color="blue-gray" className='text-sm'>
                            {meal.strMeal}
                            </Typography>
                        </div>
                        
                        {/* </ListItem> */}
                    {/* </List> */}
                    </Card>
            })}
            
        </div>
    </div>
        
    </>
    
  )
}
