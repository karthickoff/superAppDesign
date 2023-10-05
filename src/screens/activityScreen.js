import React, { useState } from 'react';
import { UseSelector, useSelector } from 'react-redux';
import AppReducer from '../redux/reducers/appReducer';
import Overview from '../components/overview';
import ActivityWise from '../components/activityWise';
import PartnerCoverage from '../components/partnerCoverage';
import "../css/activity.css"
import { useEffect } from 'react';
import { sendTheme } from '../utils/device-interface';
export default function ActivityScreen() {
    const [currScreen, setCurrScreen] = useState('Overview');
    const [appTheme, setAppTheme] = useState({})
    const currenThemeDataReducer = useSelector(state => state.AppReducer);
    const currentTheme = currenThemeDataReducer.appTheme;
    useEffect(() => {
        sendTheme()
    }, [])
    useEffect(() => {
        setAppTheme(currentTheme)
    }, [currentTheme])
    function handleTab(tabName) {
        setCurrScreen(tabName);

    }
    return (
        <div className='parentActivity' style={appTheme.parent}>
            <div className='activityHeaders'>
                <button type="button" className={currScreen == 'Overview' ? `btn selectedBtn${appTheme.name}` : `btn unselectedBtn${appTheme.name}`} onClick={() => handleTab('Overview')}>Overview</button>
                <button type="button" className={currScreen == 'activity_wise' ? `btn selectedBtn${appTheme.name}` : `btn unselectedBtn${appTheme.name}`} onClick={() => handleTab('activity_wise')}>Activity Wise</button>
                <button type="button" className={currScreen == 'partner_coverage' ? `btn selectedBtn${appTheme.name}` : `btn unselectedBtn${appTheme.name}`} onClick={() => handleTab('partner_coverage')}>Partner Coverage</button>
            </div>
            <div className='activityBody'>
                {currScreen == 'Overview' && <Overview styles={appTheme} />}
                {currScreen == 'activity_wise' && <ActivityWise />}
                {currScreen == 'partner_coverage' && <PartnerCoverage />}

            </div>

        </div>
    )
}
