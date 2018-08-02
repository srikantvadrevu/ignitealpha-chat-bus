import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import React from "react";

/**
 * Component rendering live chat feed.
 */
function ChatFeed() {
  return (
    <Grid container className={'chatBus-chatFeed'}>
      <Grid item className={'chatBus-chatFeedItem'}>
        <Card>
          <CardContent className={'chatBus-chatFeedItemContent'}>
            <Typography className={'chatBus-chatFeedItemName'} variant="body2" >
              Srikant
            </Typography>
            <Typography className={'chatBus-chatFeedItemMessage'} variant={"body1"}>
              Description
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>);
}

export default ChatFeed;