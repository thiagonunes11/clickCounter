import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    function decreaseClick() {
        setCount(count - 1);
    }

    return (
        <Box textAlign="center" mt={5}>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleClick}
                sx={{ marginBottom: 2 }}
            >
                Aumentar

            </Button><br/>
            <Button 
                variant="contained" 
                color="secondary" 
                onClick={decreaseClick}
                sx={{ marginBottom: 2 }}
            >
                Diminuir
            </Button><br/>

            <p>Você clicou {count} vezes</p>
            
        </Box>
    );
}
