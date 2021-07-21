import React, { useState } from 'react'
import { Paper } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import ErrorOutlineSharpIcon from '@material-ui/icons/ErrorOutlineSharp'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import HeaderInfo from '../../components/util/HeadLine'
import { LinkedInLightBlue } from '../../assets/Colors'
import { LinkedInJobAdd } from '../../assets/images/images'
import Style from './Style'

const Widgets = () => {
  const classes = Style()
  const [expand, setExpand] = useState(false)

  return (
    <div className={classes.widgets}>
      <Paper className={classes.widgets__top}>
        <div className={classes.heading}>
          <h4>LinkedIn News</h4>
          <ErrorOutlineSharpIcon/>
        </div>
        {top1.map((title, i) => (
          <HeaderInfo
            key={`widgets-top_1_${i}`}
            Icon={
              <FiberManualRecordIcon
                style={{
                  color: LinkedInLightBlue,
                  fontSize: 12
                }}
              />
            }
            title={title}
            time={true}
            count={true}
          />
        ))}
        {expand &&
        top2.map((title, i) => (
          <HeaderInfo
            key={`widgets-top_2_${i}`}
            Icon={<FiberManualRecordIcon style={{ color: LinkedInLightBlue, fontSize: 12 }}/>}
            title={title}
            time={true}
            count={true}
          />
        ))}
        <div className={classes.expand} onClick={() => setExpand(!expand)}>
          <h4>{expand ? 'Show less' : 'Show more'}</h4>
          <ExpandMoreIcon style={{ transform: expand ? 'rotate(180deg)' : '' }}/>
        </div>
      </Paper>
      <div className={classes.widgets__bottom}>
        <Paper className={classes.addBanner}>
          <img src={LinkedInJobAdd} alt="linked-in-jub-add"/>
        </Paper>
      </div>
    </div>
  )
}

const top1 = [
  'Google cracks down on loan apps',
  'Byju’s new acquisition',
  'Lost password? That\'ll be $220M',
  'Tesla gets an India address',
  'India Inc returns gingerly to office'
]

const top2 = [
  'To Bitcoin or not to Bitcoin',
  'Infosys, Wipro post robust numbers',
  'Longer hours equal less productivity',
  'Fake commute has real benefits'
]

export default Widgets
