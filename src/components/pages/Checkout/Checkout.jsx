import {ShoppingCartCheckoutRounded } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import * as React from 'react';
import TextField from '@mui/material/TextField';

export const Checkout = ({ envioDeFormulario, capturar, orderId }) => {
  return (
    <div>
      {orderId ? (
       <div>
         <h1>Gracias... tu numero es {orderId} </h1>
         <Link to="/">Seguir comprando</Link>
       </div>
      ) : (
        <form onSubmit={envioDeFormulario}>

        <TextField
          required
          id="outlined-required"
          defaultValue="Nombre"
          name="name"
          />

        <TextField
          required
          id="outlined-required"
          defaultValue="Numero de telefono"
          name="phone"
          />

        <TextField
        required
        id="outlined-required"
        defaultValue="Email"
        name="email"
        />

          <Button sx={{ 
              height: '56px' 
            }} variant="contained" type="submit" endIcon={<ShoppingCartCheckoutRounded />}> Proceder al pago </Button>

        </form>
      )}
    </div>
  );
};