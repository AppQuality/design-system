import * as React from 'react';
import {Button} from '@appquality/design.ui.button';

interface User {
    id: number
    username: string
    name: string
    surname: string
    email: string
    image: string
}

type SiteHeaderProps = {
  /**
   * a text to be rendered in the component.
   */
  user?: User
  logo?: React.ReactNode
};

const SiteHeader = ({ user, logo }: SiteHeaderProps) => {
  const UserInfo = () => (
      <div className='user-info'>
        <div className="user-avatar"></div>
        <div className="user-name"></div>
        <div className="user-id"></div>
        <Button text='logout'></Button>
      </div>
  )

  return (
    <div>
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
          : <Button text='login'></Button>
        }
      </div>
    </div>
  )
}

export {SiteHeader, SiteHeaderProps};