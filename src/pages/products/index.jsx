import React, { useEffect } from 'react'
import { Box, Button, Stack, Typography } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import { callProductListApi, getProducts } from '../../feature/productslice'
import { addtoCart } from '../../feature/cartslice'

function Products() {
    const dispatch = useDispatch()
    const { productList, isLoading } = useSelector(state => state.product)
    const { cartItems } = useSelector(state => state.cart)

    useEffect(() => {
        // call the particular action 
        dispatch(callProductListApi())
    }, [])

    console.log(productList)

    const handleAddtoCart = (currentItem) => {
        dispatch(addtoCart(currentItem))
    }

    if (isLoading) {
        return <Typography>Loading! Please wait ... </Typography>
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
                productList && productList.length > 0 ?
                    productList.map((item) => (
                        <Box key={item.id}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid #6f6c6c',
                                width: '100%',
                                gap: '12px',
                                padding: '20px 10px'
                            }}
                        >
                            <Box
                                sx={{
                                    height: '200px',
                                    padding: '10px',
                                    borderBottom: '1px solid #d7cccc',
                                }}>
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
                                        width: '200px',
                                        margin: 'auto'
                                    }}
                                >{item.description}</Typography>
                            </Box>
                            <Box
                                sx={{
                                    padding: '10px',
                                    border: '1px solid black',
                                    width: '150px',
                                    margin: "auto",
                                    borderRadius: '10px',
                                }}
                            >
                                <Button
                                    sx={{
                                        color: '#000',
                                    }}
                                    onClick={() => handleAddtoCart(item)}
                                    disabled={cartItems && cartItems.length > 0 ? cartItems
                                        .map((cartItem) => cartItem.id).indexOf(item.id) > -1
                                        :
                                        false}
                                >
                                    Add to Cart
                                </Button>
                            </Box>
                        </Box>
                    )) : null
            }
        </Stack>
    )
}

export default Products