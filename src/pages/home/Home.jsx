import { Avatar, Button, Typography } from '@material-tailwind/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const nav = useNavigate();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false)

    const getData =async () =>{
        setLoading(true);
        try{
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            setData(response.data);
            setLoading(false)
            
        }catch(err){
            console.log(err);
            setLoading(false)
        }
        
    }

    useEffect(()=>{
            getData();
    },[])

    const[expandText, setText] = useState(false);

    const toggleExpand =(categoryId)=>{
        setText(expandText === categoryId ? null : categoryId);
    };

    if(loading){
        return <div className='p-5'>
            <Skeleton count={5}/>
            <Skeleton count={5}/>
            <Skeleton count={5}/>
            <Skeleton count={5}/>
            <Skeleton count={5}/>

        </div>
    }



  return (
    <div className='p-5'>
    
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
    
        {data && data.categories.map((cata)=>{
            const isExpanded = expandText === cata.idCategory

            return <div 
            onClick={()=> nav(`/meal-items/${cata.strCategory}`)}
            key={cata.idCategory} 
            className='p-4 flex flex-col items-center bg-amber-50 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 hover:shadow-xl '>
                <div>
                     <Avatar src={cata.strCategoryThumb} className='mb-4'/>
                    <Typography variant='h6' className='font-semibold text-center'>{cata.strCategory}</Typography>
                </div>

                    <p className={`text-gray-600 text-sm mt-2 text-center overflow-hidden ${!isExpanded ? 'line-clamp-4' : 'line-clamp-none'}`}>
                        {cata.strCategoryDescription}
                        
                    </p>
                    <div className='flex bottom-0 left-0 justify-center right-0 w-full '>
                        <Button
                            variant='text'
                            className='text-sm mt-2'
                            onClick={(e)=> {
                                e.stopPropagation();
                                toggleExpand(cata.idCategory)}}
                        >
                            {isExpanded ? 'See Less' : 'See more'}
                        </Button>
                    </div>
                
            </div>
        })}
        
    </div>

    </div>
  )
}
