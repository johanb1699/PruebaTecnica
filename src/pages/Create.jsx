import React from 'react'
import { useForm } from "react-hook-form";
import { createDish } from '../api/dishes';
import { useNavigate } from "react-router-dom";

export const Create = () => {
    let navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        let ingredients = data.ingredients.split(",");
        console.log(ingredients)
        data.ingredients = ingredients
        const response = await createDish(data)
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
