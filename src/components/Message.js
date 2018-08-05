import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import PropTypes from "prop-types";

function Message(props){
  return (
    <Grid item className={'chatBus-chatFeedItem'}>
      <Card>
        <CardContent className={'chatBus-chatFeedItemContent'}>
          <Typography className={'chatBus-chatFeedItemName'} variant="body2" >
            {props.name}
          </Typography>
          <Typography className={'chatBus-chatFeedItemMessage'} variant={"body1"}>
            {props.message}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

Message.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
};

export default Message;