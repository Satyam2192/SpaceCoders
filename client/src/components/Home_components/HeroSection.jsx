import React from "react";
import { Link } from "react-router-dom";
import { homeImage, f1 } from "../../assets";
import { IoSearchCircleOutline } from "react-icons/io5";

const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
]
import p55 from "../../assets/pexels-quang-nguyen-vinh-6713006.jpg"
export const HeroSection = () => {
    return (
        <div className="mx-auto flex flex-col w-11/12  overflow-hidden
       ">
            <div className=" flex  justify-center  bg-gray-200 ">

                <div className="  flex flex-col  gap-3  pl-6     py-20 ">

                    <h1 className="text-5xl font-inter pl-2 font-bold w-[90%]    text-richblue-700">
                        Lorem ipsum dolor sit amet.

                    </h1>
                    <p className=" font-medium font-sans text-blue-gray-600    mx-3 w-[70%]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam esse sapiente aliquid, illo fugiat cupiditate aliquam saepe vitae optio debitis!</p>


                </div>
                <img className="  shadow-sm  " width={"850px"} src={p55} alt="" />







            
            </div>
            <div className="bg-white  sm:py-20 ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="  mt-12  max-w-7xl mx-auto h-[1px]  bg-gray-600"> </div>
            </div>





        </div>



    );
};

export default HeroSection;