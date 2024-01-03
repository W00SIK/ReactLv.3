import React from 'react'
import {
    Box,
    BtnBox,
    Button1,
    Button2,
    Button3,
} from '../../styled/StyledApp'

function Button({Color, alertsButton, getName}) {
    return (
        <div>
            <Box>
                <h1>Button</h1>
                {
                    Color.map((color) => {
                        let fontColor = ""
                        color === "rgb(85, 239, 196)" ? fontColor = "black" : fontColor = "rgb(214, 48, 49)"
                        return (
                            <BtnBox>
                                <Button1 borderColor={color} fontColor={fontColor}
                                    onClick={() => {
                                        alertsButton(color)
                                    }}
                                >
                                    {getName(color)}
                                </Button1>
                                <Button2 backgroundColor={color} fontColor={fontColor}>Medium</Button2>
                                <Button3 backgroundColor={color} fontColor={fontColor}>Small</Button3>
                            </BtnBox>
                        )
                    })
                }
            </Box>
        </div>
    )
}

export default Button