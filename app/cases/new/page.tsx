'use client';

import { TextArea, TextField } from '@radix-ui/themes'
import { Button } from '@radix-ui/themes'
import React from 'react'

const NewCasePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder='Title' />
        </TextField.Root>
        <TextArea placeholder='Description' />
        <Button>Submit New Case</Button>
    </div>
  )
}

export default NewCasePage