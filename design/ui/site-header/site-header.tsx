import React from 'react'
import {Button} from '@appquality/design.ui.button/src/button'
import './site-header.scss'

interface User {
    id: number
    username: string
    name: string
    surname: string
    email: string
    image: string
}

type SiteHeaderProps = {
  user?: User
  logo?: React.ReactNode
};

const SiteHeader = ({ user, logo }: SiteHeaderProps) => {
  const UserInfo = () => (
    <div className='user-info'>
      <div className="user-avatar">
        <img src={user.image} />
      </div>
      <div className="user-name">
        {user.name} {user.surname} <span className="user-id">(T{user.id})</span>
      </div>
      <Button size='sm' type='link'>
        logout
      </Button>
    </div>
  )

  return (
    <div className='site-header'>
      <div className='brand-logo'>
        {(logo)
          ? {logo}
          : <img src='https://crowd.app-quality.com/wp-content/themes/crowdappquality/img/aq_vector_logo_light_crowd.svg' />
        }
      </div>
      <div className='header-menu'>
      </div>
      <div className="header-actions">
        {(user)
          ? <UserInfo />
          : <Button size='sm' type='link'>login</Button>
        }
      </div>
    </div>
  )
}

export {SiteHeader, SiteHeaderProps, User};