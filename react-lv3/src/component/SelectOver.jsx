import React from 'react'
import styled from 'styled-components';

const DropButtonSelect = styled.div`
    margin-top: 10px;
    height: 200px;
    width: 300px;
    border-radius: 12px;
    border: 1px solid rgb(221, 221, 221);
    background-color: white;
    position: relative;
    bottom: 80px;
    left: 10px;
`

const Droplist = styled.div`
    margin: 10px 0px;
`


function SelectOver() {
    return (
        <DropButtonSelect>
            <Droplist>리엑트</Droplist>
            <Droplist>자바</Droplist>
            <Droplist>스프링</Droplist>
            <Droplist>리엑트네이티브</Droplist>
        </DropButtonSelect>
    )
}

export default SelectOver