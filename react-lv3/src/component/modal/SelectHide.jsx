import React from 'react'
import {Droplist, DropButtonHideSelect} from '../../styled/StyledSelect'


function SelectHide() {
    return (
        <DropButtonHideSelect>
            <Droplist>리엑트</Droplist>
            <Droplist>자바</Droplist>
            <Droplist>스프링</Droplist>
            <Droplist>리엑트네이티브</Droplist>
        </DropButtonHideSelect>
    )
}

export default SelectHide