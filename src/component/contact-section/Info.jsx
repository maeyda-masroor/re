import React from 'react'
import { Icon, InlineIcon } from '@iconify/react'
import 'iconify-icon';

import facebookIcon from '@iconify/icons-mdi/facebook'
import linkedinIcon from '@iconify/icons-mdi/linkedin'
import twitterIcon from '@iconify/icons-mdi/twitter'

import './info.css'

const contactDetails = [
  {
    value: 'D-9, BLOCK-I, NORTH NAZIMABAD, KARACHI, PAKISTAN-74700',
    icon: '',
  },
  { value: '92 21-36633834 - 5 - 6', icon: '' },
  { value: 'info@remedialcentre.com', icon: '' },
]

const renderContactDetails = () =>
  contactDetails.map(detail => (
    <i><p key={detail.value} className="info-detail">
      <InlineIcon icon={detail.icon} /> {detail.value}
    </p>
    </i>
  ))

const renderIcons = () =>
  [facebookIcon, linkedinIcon, twitterIcon].map((icon, key) => (
    <Icon icon={icon} key={key} className="info-icon" />
  ))

const Info = () => (
  <section className="info bg-amber-900">
    <i><h2 style={{fontSize:'35px'}}>Contact information</h2></i>

    <div className="info-details-container">{renderContactDetails()}</div>

    <div className="info-icons-container">{renderIcons()}</div>
  </section>
)

export default Info
