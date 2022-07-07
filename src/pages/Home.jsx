import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { deleteDish, getAllDishes } from '../api/dishes';

export const Home = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        let response = await getAllDishes()
        console.log(response)
        if (response.status === 200) {
            console.log(response.data.data)
            setData(response.data.data)
        } else {
            console.error(response)
        }
    }

    const deleteData = async (id) => {
        let response = await deleteDish(id)
        console.log(response)
        if (response.status === 200) {
            console.log(response.data.data)
            getData()
        } else {
            console.error(response)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div className='py-20 bg-[#f2f2f2] h-screen w-screen'>
            <div className='container mx-auto'>
                <section className='flex items-center justify-around'>
                    <div>
                        <h1>List of products</h1>
                    </div>
                    <div>
                        <Link to="/create" className='px-5 py-2 bg-slate-800 rounded-md text-white'> Create product </Link>
                    </div>
                </section>
                <section className='flex flex-col items-center justify-around'>
                    {data.map((item, index) =>
                        <div key={index} className="py-5 flex justify-between items-center">
                            <div>
                                {item.name} {item.description} ${item.price}
                            </div>
                            <div>
                                <Link to={"/update/" + item._id} className='px-5 py-2 mx-10 bg-yellow-800 rounded-md text-white'> Edit product </Link>
                                <button onClick={() => deleteData(item._id)} className='px-5 py-2 bg-red-800 rounded-md text-white'> Delete product </button>
                            </div>
                        </div>
                    )}
                </section>
                <section className='flex flex-col items-center justify-around'>
                    <Link to="/ingredients">See ingredients</Link>
                </section>
            </div>
        </div>
    )
}
