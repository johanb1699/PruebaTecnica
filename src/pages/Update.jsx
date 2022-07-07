import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getDishById, updateDish } from '../api/dishes';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Update = () => {
    let { id } = useParams();


    const [data, setData] = useState([]);
    const { register, handleSubmit, reset } = useForm({ mode: 'onBlur' });

    const getData = async () => {
        let response = await getDishById(id)
        console.log(response)
        if (response.status === 200) {
            console.log(response.data.data)
            setData(response.data.data)
            reset(response.data.data)
        } else {
            console.error(response)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    let navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data)
        let ingredients = data.ingredients.split(",");
        console.log(ingredients)
        data.ingredients = ingredients
        const response = await updateDish(id, data)
        console.log(response)
        return navigate("/");
    };

    return (
        <div className='py-20 px-20 bg-[#f2f2f2] h-screen w-screen'>
            <form className='block' onSubmit={handleSubmit(onSubmit)}>
                <div className='my-2'>
                    <label>name : </label>
                    <input className='border border-[#ccc]' {...register("name")} />
                </div>

                <div className='my-2'>
                    <label>description: </label>
                    <textarea className='border border-[#ccc]' {...register("description")} />
                </div>

                <div className='my-2'>
                    <label>price : </label>
                    <input type="number" className='border border-[#ccc]' {...register("price")} />
                </div>

                <div className='my-2'>
                    <label>Ingredientes: </label>
                    <textarea className='border border-[#ccc]' {...register("ingredients")} />
                </div>

                <div>
                    <input className='px-5 py-2 bg-slate-800 rounded-md text-white' type="submit" />
                </div>
            </form>
        </div>
    )
}
