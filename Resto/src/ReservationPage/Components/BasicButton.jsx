import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from "react";


export default function BasicButton() {
  const [color, setColor] = useState("success");

  return (
    
      <Button variant="contained" color={color} onClick={() => setColor("error")}>T1</Button>
    
  );
}