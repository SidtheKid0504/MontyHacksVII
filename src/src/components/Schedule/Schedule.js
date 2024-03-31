import {React, Component} from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Typography } from "@mui/material";
import TimelineDot from '@mui/lab/TimelineDot';
import LoginIcon from '@mui/icons-material/Login';
import CelebrationIcon from '@mui/icons-material/Celebration';
import LaptopIcon from '@mui/icons-material/Laptop';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import GavelIcon from '@mui/icons-material/Gavel';
import CampaignIcon from '@mui/icons-material/Campaign';
import "./Schedule.scss";

const ScheduleItem = ({time, activity, type, Icon}) => {
    return (
        <TimelineItem sx={{width:"100%", height: "100%"}}>
            <TimelineOppositeContent 
                sx={{m: "auto: 0", fontSize: "2cqmax"}}
                align="right"
                variant="body2"
                color="yellow"
            >
            <Typography className="schedule-text" sx={{fontSize: "2.5cqmax", fontFamily: ""}}>{time}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot sx={{
                    backgroundColor:"#499dc6",
                }}>
                    {Icon}
                </TimelineDot>
                <TimelineConnector sx={{
                height: "2.5rem"
            }}/>
            </TimelineSeparator>
            <TimelineContent >
                <Typography className="schedule-text" sx={{fontSize: "2.5cqmax", fontFamily: "Space Grotesk"}} color="#5bc0ef">{activity}</Typography>
                <Typography  className="schedule-text" sx={{fontSize: "1.5cqmax"}} color="white">{type}</Typography>
            </TimelineContent>
        </TimelineItem>
    );
};

export class Schedule extends Component {
    render() {
        return (
            <div class="container">
                <div class="header-container">
                    <h1 class="header-content">Schedule</h1>
                </div>
                <div class="schedule-container">
                    <Timeline>
                        <ScheduleItem time="8:00 am" activity="Check In" type="MPAC" Icon={<LoginIcon sx={{width: "4cqmax", height: "4cqmax"}}/>}/>
                        <ScheduleItem time="9:00 am" activity="Opening Ceremony" type="MPAC" Icon={<CelebrationIcon  sx={{width: "4cqmax", height: "4cqmax"}}/>}/>
                        <ScheduleItem time="09:30 am" activity="Hacking Starts and Team Formation" type="Commons" Icon={<LaptopIcon  sx={{width: "4cqmax", height: "4cqmax"}}/>}/>
                        <ScheduleItem time="11:00 am" activity="Workshop: TBD" type="Science Wing" Icon={<EngineeringIcon  sx={{width: "4cqmax", height: "4cqmax"}}/>} />
                        <ScheduleItem time="12:00 am" activity="Guest Speaker: Mandatory" type="MPAC" Icon={<CampaignIcon  sx={{width: "4cqmax", height: "4cqmax"}}/>} />
                        <ScheduleItem time="1:00 pm" activity="Lunch" type="Gym" Icon={<LunchDiningIcon  sx={{width: "4cqmax", height: "4cqmax"}}/>}/>
                        <ScheduleItem time="2:00 pm" activity="Cyber Security Workshop by CyberAware" type="Science Wing" Icon={<EngineeringIcon  sx={{width: "4cqmax", height: "4cqmax"}}/>} />
                        <ScheduleItem time="2:00 pm" activity="Workshop: TBD" type="MPAC" Icon={<EngineeringIcon  sx={{width: "4cqmax", height: "4cqmax"}}/>} />
                        <ScheduleItem time="3:00 pm" activity="Workshop: TBD" type="Science Wing" Icon={<EngineeringIcon  sx={{width: "4cqmax", height: "4cqmax"}}/>} />
                        <ScheduleItem time="3:00 pm" activity="Workshop: TBD" type="MPAC" Icon={<EngineeringIcon  sx={{width: "4cqmax", height: "4cqmax"}}/>} />
                        <ScheduleItem time="4:00 pm" activity="Workshop: TBD" type="Science Wing" Icon={<EngineeringIcon  sx={{width: "4cqmax", height: "4cqmax"}}/>} />
                        <ScheduleItem time="4:00 pm" activity="Workshop: TBD" type="MPAC" Icon={<EngineeringIcon  sx={{width: "4cqmax", height: "4cqmax"}}/>} />
                        <ScheduleItem time="5:00 pm" activity="Workshop: TBD" type="Science Wing" Icon={<EngineeringIcon  sx={{width: "4cqmax", height: "4cqmax"}}/>} />
                        <ScheduleItem time="5:00 pm" activity="Workshop: TBD" type="MPAC" Icon={<EngineeringIcon  sx={{width: "4cqmax", height: "4cqmax"}}/>} />
                        <ScheduleItem time="7:00 pm" activity="Hacking Stops" Icon={<HourglassTopIcon  sx={{width: "4cqmax", height: "4cqmax"}}/>}/>
                        <ScheduleItem time="7:30 pm" activity="Judging Starts" type="Commons" Icon={<GavelIcon  sx={{width: "4cqmax", height: "4cqmax"}}/>}/>
                        <ScheduleItem time="9:00 pm" activity="Closing Ceremony" type="MPAC" Icon={<CelebrationIcon  sx={{width: "4cqmax", height: "4cqmax"}}/>}/>
                    </Timeline>
                </div>
            </div>
        )
            
    }
}