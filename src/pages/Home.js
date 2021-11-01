import React from 'react'
import { FaqsContainer } from '../containers/faqs'
import { JumbotronContainer } from '../containers/Jumbotron'
import { FooterContainer } from '../containers/footer'

export default function Home() {
    return (
        <>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}