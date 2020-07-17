import React from 'react'
import UpcomingConf from './UpcomingConf'
import EditorNote from './EditorNote'
import Question from './Question'
import Email from './Email'

export default function SideBar(props) {
    return (
        <div>
            <UpcomingConf />
            <EditorNote />
            <Question />
            <Email />
        </div>
    )
}