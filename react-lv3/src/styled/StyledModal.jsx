import styled from 'styled-components';

export const Mask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(221, 221, 221, 0.8);
`

export const ModalBody = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    left: 50%;
    top: 50%;
    border-radius: 12px;
    box-sizing: border-box;
    padding: 24px;
    background-color: rgb(255, 255, 255);
    width: 500px;
    height: 300px;
    gap: 10px;
`
export const ContentB = styled.div`
    left: 50%;
    top: 50%;
    border-radius: 12px;
    box-sizing: border-box;
    padding: 24px;
    background-color: rgb(255, 255, 255);
    width: 300px;
    height: 200px;
`