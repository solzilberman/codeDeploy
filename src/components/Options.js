import React, { useState } from 'react';
import Content from './Content'
import youtube from '../api/youtube'

import { Fab, Stepper, Step, StepLabel, Typography, makeStyles } from '@material-ui/core';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import DevicesRoundedIcon from '@material-ui/icons/DevicesRounded';
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';


export default function Options() {
    const [step, setStep] = useState(0);
    const [category, setCategory] = useState("");
    const [stackend, setStackend] = useState("")
    const [language, setLanguage] = useState("");
    const [level, setLevel] = useState("");
    const [videos, setVideos] = useState([]);

    const nextStep = () => {
        var s = step;
        s += 1;
        setStep(s)
    }

    const prevStep = () => {
        var s = step;
        s -= 1;
        setStep(s)
        console.log(s)
    }

    const handleCategory = (val) => {
        switch (step) {
            case 0:
                console.log(val);
                setCategory(val);
                nextStep();
                break;
            case 1:
                console.log(val);
                setStackend(val);
                nextStep();
                break;
            case 2:
                console.log(val);
                setLanguage(val);
                nextStep();
                break;
            case 3:
                console.log(val);
                setLevel(val);
                nextStep();
                break;
        }

    }



    const handleSubmit = async () => {
        const searchTerm = `${category} ${language} ${level} ${stackend}`
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: '10',
                key: 'AIzaSyDcKCSt0VCLOylTNT0LjTdw0qwTNPhD6o4',
                q: searchTerm
            }

        })
        const data = await response.data.items;
        setVideos(data);
        console.log(data);
        if (data) {
            nextStep();
        }
    }




    const steps = ["Category", "Stack", "Language", "Level"];

    const [stepColor] = useState(["", "", "", ""])
    const stepper = () => {
        stepColor[step] = "primary"
        return (
            <Stepper activeStep={step} alternativeLabel>
                <Step key={0}>
                    <StepLabel icon={<AppsRoundedIcon color={stepColor[0]} />}>{steps[0]}</StepLabel>
                </Step>
                <Step key={1}>
                    <StepLabel icon={<DevicesRoundedIcon color={stepColor[1]} />}>{steps[1]}</StepLabel>
                </Step>
                <Step key={2}>
                    <StepLabel icon={<CodeRoundedIcon color={stepColor[2]} />}>{steps[2]}</StepLabel>
                </Step>
                <Step key={3}>
                    <StepLabel icon={<AssessmentRoundedIcon color={stepColor[3]} />}>{steps[3]}</StepLabel>
                </Step>
            </Stepper>
        )
    }


    switch (step) {
        //category
        case 0:
            return (
                <div className="questionButtons">
                    <div style={{ width: '100%' }}>
                        {stepper()}
                    </div>
                    <div style={{ marginBottom: '10%', width: '100%' }}>
                        <Typography color="textSecondary" variant="h5" component="h2">
                            Select a Category
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', flexFlow: 'column', margin: 'auto', width: '70%' }}>
                        <Fab style={{ marginBottom: '40px' }} color="primary" variant="extended" onClick={() => handleCategory("Web Developement")}>Web Development</Fab>
                        <Fab style={{ marginBottom: '40px' }} color="primary" variant="extended" onClick={() => handleCategory("Coming Soon")}>Coming Soon...</Fab>
                    </div>
                </div >
            )

        //front vs back vs full
        case 1:
            return (

                <div className="questionButtons">
                    <div style={{ width: '100%' }}>
                        {stepper()}
                    </div>
                    <div style={{ marginBottom: '10%', width: '100%' }}>
                        <Typography color="textSecondary" variant="h5" component="h2">
                            Select a stack
                     </Typography>
                    </div>
                    <div style={{ display: 'flex', flexFlow: 'column', margin: 'auto', width: '70%' }}>
                        <Fab style={{ marginBottom: '20px' }} color="primary" variant="extended" onClick={() => handleCategory("Front End")}>Front End</Fab>
                        <Fab style={{ marginBottom: '20px' }} color="primary" variant="extended" onClick={() => handleCategory("Back End")}>Back End</Fab>
                        <Fab style={{ marginBottom: '20px' }} color="primary" variant="extended" onClick={() => handleCategory("Full Stack")}>Full Stack</Fab>
                    </div>
                </div >
            )
        // language
        case 2:
            return (

                <div className="questionButtons">
                    <div style={{ width: '100%' }}>
                        {stepper()}
                    </div>
                    <div style={{ marginBottom: '10%', width: '100%' }}>
                        <Typography color="textSecondary" variant="h5" component="h2">
                            Select a language
                </Typography>
                    </div>
                    <div style={{ display: 'flex', flexFlow: 'column', margin: 'auto', width: '70%' }}>
                        <Fab style={{ marginBottom: '20px' }} color="primary" variant="extended" onClick={() => handleCategory("Python")}>Python</Fab>
                        <Fab style={{ marginBottom: '20px' }} color="primary" variant="extended" onClick={() => handleCategory("JavaScript")}>JavaScript</Fab>
                        <Fab style={{ marginBottom: '20px' }} color="primary" variant="extended" onClick={() => handleCategory("Java")}>Java</Fab>
                        <Fab style={{ marginBottom: '20px' }} color="primary" variant="extended" onClick={() => handleCategory("Golang")}>Golang</Fab>
                    </div>
                </div >
            )
        //level
        case 3:
            return (
                <div className="questionButtons">
                    <div style={{ width: '100%' }}>
                        {stepper()}
                    </div>
                    <div style={{ marginBottom: '10%', width: '100%' }}>
                        <Typography color="textSecondary" variant="h5" component="h2">
                            Select a level
                </Typography>
                    </div>
                    <div style={{ display: 'flex', flexFlow: 'column', margin: 'auto', width: '70%' }}>
                        <Fab style={{ marginBottom: '20px' }} color="primary" variant="extended" onClick={() => handleSubmit()}>Basic</Fab>
                        <Fab style={{ marginBottom: '20px' }} color="primary" variant="extended" onClick={() => handleSubmit()}>Intermediate</Fab>
                        <Fab style={{ marginBottom: '20px' }} color="primary" variant="extended" onClick={() => handleSubmit()}>Advanced</Fab>
                    </div>
                </div >
            )
        case 4:
            return (
                <div className="mainContent">
                    <h2 className="contentHeader">Swipe to explore free resources</h2>
                    <Content videos={videos} />
                </div >
            )
        default:
            return (
                <div className="questionButtons">
                    <div style={{ width: '100%' }}>
                        {stepper()}
                    </div>
                    <div style={{ marginBottom: '10%', width: '100%' }}>
                        <Typography color="textSecondary" variant="h5" component="h2">
                            Select a Category...
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', flexFlow: 'column', margin: 'auto', width: '70%' }}>
                        <Fab style={{ marginBottom: '40px' }} color="primary" variant="extended" onClick={() => handleCategory("Web Developement")}>Web Development</Fab>
                        <Fab style={{ marginBottom: '40px' }} color="primary" variant="extended" onClick={() => handleCategory("Coming Soon")}>Coming Soon...</Fab>
                    </div>
                </div >
            )
    }

}
