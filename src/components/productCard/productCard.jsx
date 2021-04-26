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
height: 400px
`;

export const ProductCard = ({ name, price, img, addClick }) => {
    return(
        <Card data-testid="product-card">
            <CardContent>
                <Image src={img} alt='' id="responsive-image" />
                <p data-testid="product-card__name">{name}</p>
                <p>{`£${price}`} </p>
            </CardContent>
            <Button size="small" onClick={addClick} >Add to Basket</Button>
      </Card>
    );
}
