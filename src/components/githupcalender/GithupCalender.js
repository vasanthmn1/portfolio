import React from 'react'

import GitHubCalendar from 'react-github-calendar'
import './githupCalender.css'
const GithupCalender = () => {
    return (
        <div className='githupconatiner'>
            <h4>Githup</h4>
            <div className='githup_warper'>
                <GitHubCalendar username="vasanthmn1" colorScheme='dark' showWeekdayLabels blockRadius={'21'} style={{ width: "1700px" }} />

            </div>
        </div>
    )
}

export default GithupCalender
