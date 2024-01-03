import React from 'react'
import {DropButtonOverSelect, Droplist} from '../../styled/StyledSelect'

function SelectOver() {
    return (
        <DropButtonOverSelect>
            <Droplist>리엑트</Droplist>
            <Droplist>자바</Droplist>
            <Droplist>스프링</Droplist>
            <Droplist>리엑트네이티브</Droplist>
        </DropButtonOverSelect>
    )
}

export default SelectOver