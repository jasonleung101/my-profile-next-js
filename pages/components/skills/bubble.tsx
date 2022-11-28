import React from 'react';

type Props = {
    name: String,
    percent: String,
}

function FrontSide(name: String) {
    return (
        <div className='border-solid border-white border-[1px] rounded-full h-[100px] w-[100px] md:h-[130px] md:w-[130px] lg:h-[150px] lg:w-[150px] flex justify-center items-center bg-background-dark'>
            <div className='flex items-center justify-center w-[100px] md:w-[130px] lg:w-[150px] text-[18px] md:text-[24px] lg:text-[30px] text-center'>
                {name}
            </div>
        </div>
    );
}

function BackSide(percent: String) {
    return (
        <div className=''>
            <div className='border-solid border-white border-[1px] rounded-full h-[100px] w-[100px] md:h-[130px] md:w-[130px] lg:h-[150px] lg:w-[150px] flex justify-center items-center bg-background-dark'>
                <div className='flex items-center justify-center w-[100px] md:w-[130px] lg:w-[150px] text-[18px] md:text-[24px] lg:text-[30px] text-center'>
                    {percent}%
                </div>
            </div>
        </div>
    );
}

export default function SkillBubble({ name, percent }: Props) {
    return (
        <div className="relative">
            {FrontSide(name)}
            {BackSide(percent)}
        </div>
    )
}