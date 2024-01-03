import React from 'react'
import { SelectOverPotal } from '../modal/Potal'
import SelectOver from '../modal/SelectOver'
import SelectHide from '../modal/SelectHide';
import {
    Box,
    SelectBox,
    SelectBoxIn,
    ButtonSelect
} from '../../styled/StyledApp'

function Select({selectOverOpen, selectHideOpen, selectOver, selectHide}) {
    return (
        <div>
            <Box>
                <SelectBox>
                    <h1>Select</h1>
                    <SelectBoxIn>
                        <ButtonSelect onClick={() => { selectOverOpen() }}>
                            <div>리엑트</div>
                            <div>▼</div>
                        </ButtonSelect>
                        {selectOver && (
                            <SelectOverPotal>
                                <SelectOver />
                            </SelectOverPotal>
                        )}

                        <ButtonSelect onClick={() => { selectHideOpen() }}>
                            <div>리엑트</div>
                            <div>▼</div>
                        </ButtonSelect>
                        {selectHide && (
                            <SelectHide />
                        )}
                    </SelectBoxIn>
                </SelectBox>
            </Box>
        </div>
    )
}

export default Select