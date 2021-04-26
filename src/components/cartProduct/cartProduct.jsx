import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const CardContent = styled.div`
text-align: center;
justify-content: center;
padding: 10px;
position: relative
height: 300px
width: 200px`;

const ItemCard = styled.div`
margin: 30px
background-color: #f4c2c2`;

const Image = styled.img`
padding: 10px;
height: 300px
`;

export const CartProduct = ({ name, price, img, quantity }) => {
    return(
        <Card>
            <CardContent>
                <Image src={img} alt='' id="responsive-image" />
                <p>{name}</p>
                <p>{`£${price}`} </p>
                <p>Quantity: {quantity}</p>
            </CardContent>
      </Card>
    );
}
