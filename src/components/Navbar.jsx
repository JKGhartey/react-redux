import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'

import { Home, ShoppingBag } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const navigate = useNavigate()
    const {cartItems} = useSelector(state => state.cart)

    return (
        <Stack
            direction={'row'}
            width={'full'}
            sx={{
                padding: '10px 15px',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    flex: "1",
                    display: "flex"
                }}
            >
                <IconButton onClick={() => navigate("/")} size='large' >
                    <Home />
                </IconButton>
            </Box>
            <Box>
                <IconButton onClick={() => navigate("/cart")} size="large">
                    <Typography>{cartItems && cartItems.length} </Typography>
                    <ShoppingBag />
                </IconButton>
            </Box>
        </Stack>
    )
}

export default Navbar