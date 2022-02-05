import React from 'react'
import { Link } from 'gatsby'
import Page from '../components/page.js'

import './about.scss'

const About = () => {
  return (
    <Page
      about
      title="About the GM Æsop for Newbies"
      header={<Link className='about__link' to="/">List of the Fables »</Link>}
    >
      <div className='about'>
        <p>GM Aesop for Newbies contains the text of selected fables, and will be enjoyed by players of any rank.</p>
        <p>This is a parody site of the <a href="http://www.read.gov/aesop/index.html" target="_blank" rel="noopener noreferrer">Library of Congress's The Aesop for Children</a>,
          with the original fables slightly modified to be about the game <a href="https://playeternalreturn.com/" target="_blank" rel="noopener noreferrer">Eternal Return</a>. 
          You can check the original fables per parody by clicking the moral of the story.</p>
        <p>Originally started out as a joke when GM Aesop was asked for a fable in the official Discord chat, 
          where he linked <a href="http://www.read.gov/aesop/124.html" target="_blank" rel="noopener noreferrer">Two Travelers & a Bear</a>. 
          Edits were made to the story for humor, and this site serves as a collection for edited fables.</p>
        <p><u>This is NOT an official site of the Library of Congress, nor Nimble Neuron, nor Eternal Return.</u></p>
      </div>
    </Page>
  )
}

export default About