import React from 'react';

import { Card, Grid, Paper, Typography, Fab, Button } from "@material-ui/core";

const VideoItem = ({ video }) => {
    return (

        <Card style={{ textAlign: 'left', cursor: 'pointer', marginRight: '20px', width: '200px', height: '150px', marginBottom: '20px' }}>
            <Button variant="contained" style={{ height: '75px', width: '200px' }}><b>{video.snippet.title.slice(0, 30)}...</b></Button>
            <img style={{ width: '200px' }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        </Card>

    )
}

export default VideoItem;