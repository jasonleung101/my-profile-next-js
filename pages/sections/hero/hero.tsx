import Link from "next/link";
import React from "react";
import Avatar from "react-avatar";
import { useTypewriter, Cursor } from "react-simple-typewriter";

type Props = {}

export default function Hero({ }: Props) {

    const [text, count] = useTypewriter({
        words: [
            'HI, I am Jason Leung',
            'Love_playing_with_my_cat.dart',
            'Widget ButLovesToCodeMore {}'
        ],
        loop: true,
        delaySpeed: 2000,
    })


    return (
        <div className="flex flex-col items-center justify-center text-center overflow-hidden space-y-8">
            <Avatar className="relative mx-auto object-cover" githubHandle="jasonleung101" size="180" round={true} />
            <div className="">
                <h2 className="text-xs lg:text-sm uppercase text-gray-600 tracking-[10px] pb-4">Application Engineer</h2>
                <h1 className="text-xl lg:text-4xl scroll-px-18">
                    <span>{text}</span>
                    <Cursor cursorColor="#fcba03" />
                </h1>
                <div className="flex flex-row text-gray-600 pt-4 space-x-2 justify-center">
                    <Link href='#about'>
                        <a className="heroBtn">
                            About
                        </a>
                    </Link>
                    <Link href='#experience'>
                        <a className="heroBtn">
                            Experience
                        </a>
                    </Link>
                    <Link href='#skills'>
                        <a className="heroBtn">
                            Skills
                        </a>
                    </Link>
                    <Link href='#projects'>
                        <a className="heroBtn">
                            Projects
                        </a>
                    </Link>

                </div>
            </div>
        </div>
    )
}