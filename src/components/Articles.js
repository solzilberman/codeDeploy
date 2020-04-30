import React from 'react'
import { Card, Icon } from "@material-ui/core"
import CodeIcon from '@material-ui/icons/Code';
import { Link } from 'react-router'


export default function Articles() {

    return (
        <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'space-evenly' }} >
            <div style={{ width: '300px', height: '150px', marginRight: '20px' }}>

                <Card>
                    <a style={{ textDecoration: 'none' }} href={"https://github.com/"} target="_blank">
                        <div style={{ width: '300px', height: '150px' }}>
                            <CodeIcon style={{ marginTop: '5%', width: 'larger' }} />
                            <h1>
                                Github
                        </h1>



                        </div>
                    </a>
                </Card>
            </div>

            <div style={{ width: '300px', height: '150px', marginRight: '20px' }}>
                <Card>
                    <a style={{ textDecoration: 'none' }} href={"https://leetcode.com/"} target="_blank">
                        <div style={{ width: '300px', height: '150px' }}>
                            <CodeIcon style={{ marginTop: '5%', width: 'larger' }} />
                            <h1>
                                LeetCode
                        </h1>
                        </div>
                    </a>
                </Card>
            </div>

            <div style={{ width: '300px', height: '150px', marginBottom: '20px', marginRight: '20px' }}>
                <Card>
                    <a style={{ textDecoration: 'none' }} href={"https://stackoverflow.com/"} target="_blank">
                        <div style={{ width: '300px', height: '150px' }}>
                            <CodeIcon style={{ marginTop: '5%', width: 'larger' }} />
                            <h1>
                                StackOverflow
                        </h1>
                        </div>
                    </a>
                </Card>
            </div>

            <div style={{ width: '300px', height: '150px', marginBottom: '20px', marginRight: '20px' }}>
                <Card>
                    <a style={{ textDecoration: 'none' }} href={"https://www.geeksforgeeks.org/"} target="_blank">
                        <div style={{ width: '300px', height: '150px' }}>
                            <CodeIcon style={{ marginTop: '5%', width: 'larger' }} />
                            <h1>
                                GeeksforGeeks
                        </h1>
                        </div>
                    </a>
                </Card>
            </div>

            <div style={{ width: '300px', height: '150px', marginBottom: '20px', marginRight: '20px' }}>
                <Card>
                    <a style={{ textDecoration: 'none' }} href={"https://www.codecademy.com/"} target="_blank">
                        <div style={{ width: '300px', height: '150px' }}>
                            <CodeIcon style={{ marginTop: '5%', width: 'larger' }} />
                            <h1>
                                Code Academy
                        </h1>
                        </div>
                    </a>
                </Card>
            </div>
        </ div>
    )
}
