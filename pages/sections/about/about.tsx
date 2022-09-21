import React from "react";
import Avatar from "react-avatar";
import Image from 'next/image'

type Props = {}

export default function About({ }: Props) {
    return (
        <>
            <div className="flex flex-col justify-center mx-6 text-gray-300">
                <Image src="/about.jpg" width={160} height={160} layout="fixed" />
                <br />

                <h1 className="pb-4">Jason, a guy who love coding</h1>
                <p className="text-sm lg:text-lg">I am a experienced Mobile Application Developer who mainly focus on Flutter.</p>
                <p className="text-sm lg:text-lg">Of course, I also enjoy developing application, system and website.</p>
                <p className="text-sm lg:text-lg">Also, I love learning new technology. Cutting the Edge</p>
            </div> 
        </>
    )
}