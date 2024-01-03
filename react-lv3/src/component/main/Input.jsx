import React from 'react'
import {
    Box,
    BtnBox,
    Button3,
    Inpiut,
    } from '../../styled/StyledApp'

function Input({
    setName,
    setPrice,
    alertsInput,
    name,
    refPrice,
    price,
    Color
}) {
    return (
        <div>
            <Box>
                <h1>Input</h1>
                <BtnBox>
                    이름: <Inpiut
                        type="text"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value)
                        }}
                    />
                    가격: <Inpiut
                        ref={refPrice}
                        type="text"
                        value={price}
                        onChange={(event) => {
                            setPrice(event.target.value)
                        }}
                    />
                    <Button3 backgroundColor={Color[0]}
                        onClick={() => alertsInput()}
                    >
                        저장
                    </Button3>
                </BtnBox>
            </Box>
        </div>
    )
}

export default Input