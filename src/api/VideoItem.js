import React from 'react';

import { Card, Grid, Paper, Typography, Fab, Button } from "@material-ui/core";

const VideoItem = ({ video }) => {
    return (

        <Card style={{ textAlign: 'left', cursor: 'pointer', marginRight: '20px', width: '30vh', height: 'fit-content', marginBottom: '20px' }}>
            <Button variant="contained"><b>{video.snippet.title}</b></Button>
            <img style={{ marginRight: '20px', width: '30vh' }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        </Card>

    )
}

export default VideoItem;