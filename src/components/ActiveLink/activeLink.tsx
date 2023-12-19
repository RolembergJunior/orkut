
'use client'

import './activeLink.css'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


export default function ActiveLink({ children, href }){
    const router = useRouter();
    const pathName = usePathname();

    const style = {
        marginRight: 10,
        color: pathName === href ? '#ED2590' : 'black',
        fontWeight: pathName === href ? 700 : 100
    }

    function handleClick(e){
        e.preventDefault()
        router.push(href)
    }

    return(
        <Link className='link' href={href} onClick={(e) => {handleClick(e)}} style={style} >{children}</Link>
    )

}