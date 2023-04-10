import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <section>
            <ul className='flex items-center'>
                <li className='px-5'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='px-5'>
                    <Link href='/server'>Server</Link>
                </li>
                <li className='px-5'>
                    <Link href='/client'>Client</Link>
                </li>
                <li className='px-5'>
                    <Link href='/staticprops'>Staticprops</Link>
                </li>
            </ul>
        </section>
    )
}

export default Navbar
