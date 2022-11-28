import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai'; ''

type Props = {}

export default function Header({ }: Props) {
    return (
        <div className='text-gray-300 sticky top-0'>
            <div className='text-sm lg:text-lg flex justify-between p-[24px]'>

                <Link href={'#hero'} scroll>
                    <a className='flex justify-center'>{`{ "Jason's Portfolio" }`}</a>
                </Link>

                <Link href={'#contact'} scroll>
                    <a className='flex items-center justify-end'>
                        <AiOutlineMail className='mr-2' size={24} />
                        Get In Touch
                    </a>
                </Link>
            </div>
        </div>
    )
}