import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

const CasesPage = () => {
  return (
    <div><Button><Link href='/cases/new'>New Case</Link></Button></div>
  )
}

export default CasesPage