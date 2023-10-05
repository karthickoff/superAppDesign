import React, { useEffect, useState } from 'react';
import "../css/overview.css";
import CustomDatePicker from './datepicker';
import { useSelector } from 'react-redux';
import AppReducer from '../redux/reducers/appReducer';
import { sendUserCredentials } from '../utils/device-interface';
import leftArrow from "../assets/images/left.png";
import rightArrow from "../assets/images/next.png";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { IconContext } from 'react-icons';

export default function Overview(props) {
    const appReducerData = useSelector(state => state.AppReducer)
    console.log('appReducerData', appReducerData);
    const userNameReducerValue = appReducerData.userName;
    const [userName, setUsername] = useState('Xavi');
    console.log('userName', userName);
    useEffect(() => {
        sendUserCredentials();
    }, [])
    useEffect(() => {
        let uName = userNameReducerValue;
        if (uName) {
            setUsername(uName)

        }
    }, [userNameReducerValue])
    console.log("props", props);

    return (
        <div className='OverViewParent' style={props.styles.parent} >
            <div className='calenderArea'>
                <div className='calendarHeader'>
                    <div className={'calendar_type selectedcal' + props.styles.name} >Daily</div>
                    <div className='calendar_type'>Weekly</div>
                    <div className='calendar_type'>Monthly</div>
                </div>
                <div className={'calendarBody calendarBody' + props.styles.name} >
                    <div className='calendarBodyOne'>
                        <div className='activitiesNextarrow'>   <IconContext.Provider value={{ color: props.styles.name == 'l' ? 'black' : 'white' }}>
                            <AiOutlineLeft />

                        </IconContext.Provider></div>
                        <div className='dateDisplayText'>   Sunday 12 th March 2023</div>
                        <div className='activitiesNextarrow'>
                            <IconContext.Provider value={{ color: props.styles.name == 'l' ? 'grey' : 'grey' }}>
                                <AiOutlineRight />

                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className='calendarBodyTwo' >
                        <div className={'dateDisplayArea unselectedDate' + props.styles.name} ><span >08</span>
                            <span style={{ fontSize: '14px' }}>Wed</span></div>
                        <div className={'dateDisplayArea unselectedDate' + props.styles.name} ><span>09</span>
                            <span style={{ fontSize: '14px' }}>Thu</span></div>
                        <div className={'dateDisplayArea unselectedDate' + props.styles.name} ><span>10</span>
                            <span style={{ fontSize: '14px' }}>Fri</span></div>
                        <div className={'dateDisplayArea unselectedDate' + props.styles.name}><span>11</span>
                            <span style={{ fontSize: '14px' }}>Sat</span></div>
                        <div className={'dateDisplayArea selectedDate' + props.styles.name}><span>12</span>
                            <span style={{ fontSize: '14px' }}>Sun</span></div>
                    </div>

                </div>
                {/* <CustomDatePicker /> */}
            </div>
            <div className='activitiesArea' style={props.styles.conatinerarea}>
                <div className={'ActivitiesHeader ActivitiesHeader' + props.styles.name}>
                    <div style={{ textAlign: 'initial', fontWeight: 'bold', fontSize: '18px', marginTop: 'auto', marginBottom: 'auto' }}>Activities</div>
                    {/* <div className={'userNameDisplayArea' + props.styles.name}><span>{userName}</span></div> */}
                    <div><span style={{ fontWeight: 'bold' }}>{userName}</span></div>
                </div>
                <div class={"card activitiesArea" + props.styles.name}  >
                    <div class="card-body">
                        <div className='cardRow1'>
                            <label>Mark Daily Attendece</label>
                            <div className='activitiesNextarrow'>  <IconContext.Provider value={{ color: props.styles.name == 'l' ? 'black' : 'white' }}>
                                <AiOutlineRight />

                            </IconContext.Provider></div>
                            {/* <span>&gt;</span> */}
                        </div>
                        <div className='cardRow2' >
                            <div className='c1'>
                                <button type="button" class={"btn tastcount" + props.styles.name} style={{ marginRight: '3%' }}>0/1</button>
                                <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3" style={{ width: '60%', marginRight: '1%' }} ></input>0%

                            </div>
                            <div className='c2' >
                                <button type="button" class="btn btn-outline-primary" style={props.styles.child}>+ Add </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div class={"card activitiesArea" + props.styles.name} >
                    <div class="card-body">
                        <div className='cardRow1'>
                            <label>Meeting with existing Partner</label>
                            <div className='activitiesNextarrow'>  <IconContext.Provider value={{ color: props.styles.name == 'l' ? 'black' : 'white' }}>
                                <AiOutlineRight />

                            </IconContext.Provider></div>
                        </div>
                        {/* <div className='cardRow2'>
                            <button type="button" class={"btn tastcount" + props.styles.name} >0/4</button>
                            <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3" style={{ width: '40%', height: '2px !important' }} ></input>0%
                            <button type="button" class="btn btn-outline-primary" style={props.styles.child}>+ Add </button>
                        </div> */}
                        <div className='cardRow2' >
                            <div className='c1'>
                                <button type="button" class={"btn tastcount" + props.styles.name} style={{ marginRight: '3%' }}>0/1</button>
                                <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3" style={{ width: '60%', marginRight: '1%' }} ></input>0%

                            </div>
                            <div className='c2' >
                                <button type="button" class="btn btn-outline-primary" style={props.styles.child}>+ Add </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div class={"card activitiesArea" + props.styles.name} >
                    <div class="card-body">
                        <div className='cardRow1'>
                            <label>Meeting with existing Partner  koriena sonala
                                lore impsummm </label>
                            <div className='activitiesNextarrow'>  <IconContext.Provider value={{ color: props.styles.name == 'l' ? 'black' : 'white' }}>
                                <AiOutlineRight />

                            </IconContext.Provider></div>
                        </div>
                        <div className='cardRow2' >
                            <div className='c1'>
                                <button type="button" class={"btn tastcount" + props.styles.name} style={{ marginRight: '3%' }}>0/1</button>
                                <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3" style={{ width: '60%', marginRight: '1%' }} ></input>0%

                            </div>
                            <div className='c2' >
                                <button type="button" class="btn btn-outline-primary" style={props.styles.child}>+ Add </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
