import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 10px;
`
export const BtnBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
`
export const SelectBox = styled.div`
    border: 3px solid rgb(221, 221, 221);
    height: 200px;
    overflow: hidden;
    position: relative;
    margin-top: 50px;
`
export const SelectBoxIn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`

export const Button1 = styled.button`
    border-radius: 8px;
    height: 50px;
    width: 200px;
    border: 3px solid ${props => props.borderColor};
    color: ${props => props.fontColor};
    background-color: rgb(255, 255, 255);
    font-weight: 600;
    cursor: pointer;
    &:active {    
    filter: brightness(80%);
    }
`
export const Button2 = styled.button`
    border: none;
    border-radius: 8px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.fontColor};
    height: 45px;
    width: 130px;
    cursor: pointer;
    &:active {
        filter: brightness(80%);
    }
`
export const Button3 = styled.button`
    border: none;
    border-radius: 8px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.fontColor};
    height: 40px;
    width: 100px;
    cursor: pointer;
    &:active {
        filter: brightness(80%);
    }
`
export const Inpiut = styled.input`
    border: 1px solid rgb(51, 51, 51);
    height: 40px;
    width: 200px;
    outline: none;
    border-radius: 8px;
    padding-left: 12px;
    padding-right: 12px;
`
export const ButtonSelect = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 28px;

    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 300px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
`