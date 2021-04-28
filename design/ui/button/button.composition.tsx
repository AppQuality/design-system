import React from 'react'
import { Button, ButtonProps } from './button'

export const Buttons = () => (
  <>
    <div>
      <span style={{margin: '20px'}}>
        <Button type='primary' size='sm'>Primary</Button>
      </span>
      <span style={{margin: '20px'}}>
        <Button type='primary'>Primary</Button>
      </span>
      <span style={{margin: '20px'}}>
        <Button type='primary' size='lg'>Primary</Button>
      </span>
    </div>
  </>
)

export const LinkButtons = () => (
  <>
    <div>
      <div >
        <Button type='link' size='sm'>Link</Button>
      </div>
      <div style={{margin: '20px'}}>
        <Button type='link'>Link</Button>
      </div>
      <div style={{margin: '20px'}}>
        <Button type='link' size='lg'>Link</Button>
      </div>
    </div>
  </>
)