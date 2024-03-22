'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import classnames from 'classnames'

const NavBar = () => {
  const currentPath = usePathname();
  

  const links =[
    {label: 'Dashboard', href:'/'},
    {label: 'Cases', href:'/cases'},
  ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href= "/">Logo</Link>
        <ul className='flex space-x-6'>
          {/* {links.map(link => <Link key = {link.href} className={`${link.href === currentPath ? 'text-sky-400' : 'text-sky-100'} hover:text-sky-400 transition-colors`} href={link.href}>{link.label}</Link>)} */}
          {links.map(link => 
          <Link key = {link.href} 
          className={classnames({
            'text-sky-700': link.href === currentPath,
            'text-sky-400': link.href !== currentPath,
            'hover:text-sky-600': true
          })} 
          href={link.href}>{link.label}</Link>)}
        </ul>
        
        
    </nav>
  )
}

export default NavBar