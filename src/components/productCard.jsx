import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const ProductCard = content => {
    console.log('productcardContent', content);
    const { name, price, img } = content;
    return(
        <Card>
            <CardContent>
                <p>{name}</p>
                </CardContent>
              <CardActions>
        <Button size="small">Add to Basket</Button>
      </CardActions>
      </Card>
    );
};
