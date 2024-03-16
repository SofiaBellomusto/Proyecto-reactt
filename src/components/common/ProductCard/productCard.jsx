import React from 'react';
import { Link } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import PaidOutlined from "@mui/icons-material/PaidOutlined";

const ProductCard = ({ id, title, desc, price, img, extension }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/item/${id}`}> 
        <CardMedia
          sx={{ height: 140 }}
          image={`../../../assets/${img}.${extension}`}
          title={title} 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
          <Chip icon={<PaidOutlined />} label={`$${price}`} variant="outlined" /> 
        </CardContent>
      </Link>
      <CardActions>
        <Button size="small">Ver mas</Button>
        <Button size="small">Agregar al carrito</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
