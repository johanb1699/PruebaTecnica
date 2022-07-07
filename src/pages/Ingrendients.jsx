import React, { useEffect, useState } from 'react'
import { getDishMoreThreeIng, getIngredients } from '../api/dishes';
import { Link } from "react-router-dom";

export const Ingrendients = () => {
    const [data, setData] = useState([]);
    const [ingredients, setIngredients] = useState([]);


    const getData = async () => {
        let response = await getDishMoreThreeIng()
        console.log(response)
        if (response.status === 200) {
            console.log(response.data.data)
            setData(response.data.data)
        } else {
            console.error(response)
        }
    }

    const getIngredientsData = async () => {
        let response = await getIngredients()
        console.log(response)
        if (response.status === 200) {
            console.log(response.data.data)
            setIngredients(response.data.data)
        } else {
            console.error(response)
        }
    }

    useEffect(() => {
        getData()
        getIngredientsData()
    }, [])


    return (
        <div className='py-20 bg-[#f2f2f2] h-screen w-screen'>
            <div className='container mx-auto'>
                <section className='my-5 flex items-center justify-around'>
                    <div>
                        <h1 className='font-bold'>List of products more than 3 ingredients</h1>
                    </div>
                </section>
                <section className='flex flex-col items-center justify-around'>
                    {data.map((item, index) =>
                        <div key={index} className="py-5 flex justify-between items-center">
                            <div>
                                {item.name} {item.description} ${item.price}
                            </div>
                        </div>
                    )}
                </section>
                <section className='flex items-center justify-around'>
                    <div>
                        <h1 className='font-bold'>List of Ingredients</h1>
                    </div>
                </section>
                <section className='flex flex-col items-center justify-around'>
                    {ingredients.map((item, index) =>
                        <div key={index} className="py-5 flex justify-between items-center">
                            <div>
                                {item._id} {item.count}
                            </div>
                        </div>
                    )}
                </section>
                <section className='flex flex-col items-center justify-around'>
                    <Link to="/">Go back</Link>
                </section>
            </div>
        </div>
    )
}
