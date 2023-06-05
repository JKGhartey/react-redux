import React from 'react'
import { Stack, Typography, Box, Button, IconButton } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'

import { Add, Remove } from "@mui/icons-material"
import { addtoCart, removeFromCart } from '../../feature/cartslice'

function Cart() {

    const { cartItems } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    console.log(cartItems)

    if (!cartItems.length) {
        return <Typography
            sx={{
                height: '50vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '120px',
                fontWeight: 'bold'
            }}
        >No Cart Items!</Typography>
    }

    return (
        <Stack
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '40px'
            }}
        >
            {
                cartItems && cartItems.length > 0 ?
                    cartItems.map((item) => (
                        <Box key={item.id}
                            sx={{
                                border: '1px solid #d7cccc',
                                borderRadius: '4px'
                            }}
                        >
                            <Box
                                sx={{
                                    height: '200px',
                                    padding: '10px',
                                    borderBottom: '1px solid #d7cccc',
                                }}
                            >
                                <img
                                    style={{ width: '100%', height: "100%" }}
                                    src={item.thumbnail} alt={item.title} />
                            </Box>
                            <Box>
                                <Typography sx={{
                                    flex: '1',
                                    color: '#6f6c6c',
                                    fontSize: '14px',
                                }}>{item.title}</Typography>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        color: '#6f6c6c',
                                        fontSize: '20px',
                                    }}
                                >${item.price}.00</Typography>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        color: '#000',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipses',
                                        overflow: 'hidden',
                                        width: '200px'
                                    }}
                                >{item.description}</Typography>
                            </Box>
                            <Box>
                                <IconButton onClick={() => dispatch(addtoCart(item))} > <Add /> </IconButton>
                                <Typography>{item.quantity} </Typography>
                                <IconButton onClick={() => dispatch(removeFromCart(item))}> <Remove /> </IconButton>
                            </Box>
                        </Box>
                    )) : null
            }
        </Stack>
    )
}

export default Cart