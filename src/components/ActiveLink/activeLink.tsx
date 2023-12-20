
'use client'

import './activeLink.css'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, ReactNode } from 'react';

interface ActiveLinkProps{
    children: ReactNode,
    href: string
}


export default function ActiveLink({ children, href }:ActiveLinkProps){
    const router = useRouter();
    const pathName = usePathname();

    const style = {
        marginRight: 10,
        color: pathName === href ? '#ED2590' : 'black',
        fontWeight: pathName === href ? 700 : 100
    }

    function handleClick(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        router.push(href)
    }

    return(
        <Link className='link' href={href} onClick={(e) => {handleClick(e)}} style={style} >{children}</Link>
    )

}