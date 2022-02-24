import React, {useEffect, useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import './style.scss';
import Avatar from '@mui/material/Avatar';

export const PhoneDetailComponent = (props) => {
  const {data} = props;
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {data?.map((item, index) => 
        <div key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar 
                alt={`employee`}
                src={item.photo}
              />
            </ListItemAvatar>
            <ListItemText
              primary={item.brand}
              className="list_body"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.model}
                  </Typography>
                  —{item.description}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      )}
    </List>
  );
}
