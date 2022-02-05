import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'gatsby';

import './page.scss'

const Page = ({ about, children, title, header }) => {
    return(
        <div className='page'>
            <div className='page__container'>
                <div className='page__header'>{header}</div>
                <div className='page__title'>{title}</div>
                <div className='page__body'>
                    {children}
                </div>
            </div>
            {!about && <div className='page__about'><Link className='page__link' to="/about">About</Link></div>}
        </div>
    )
}

Page.propTypes = {
    about: bool
}

Page.defaultProps = {
    about: false
}

export default Page;