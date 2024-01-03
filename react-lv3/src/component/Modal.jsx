import React from 'react'
import styled from 'styled-components';

const Mask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`

const ModalBody = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Content = styled.div`
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

function Modal({ modalOpen, ColorModal, BtnBox, Button3, getNameModal }) {
    return (
        <div>
            <Mask></Mask>
            <ModalBody>
                <Content>
                    <div>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</div>
                    <BtnBox style={{ marginLeft: "auto", marginTop: "auto"}}>
                        {
                            ColorModal.map((color) => {
                                let fontColor = ""
                                color === "rgb(85, 239, 196)" ? fontColor = "black" : fontColor = "rgb(214, 48, 49)"
                                return (
                                    <Button3 onClick={() => modalOpen()} backgroundColor={color} fontColor={fontColor}>{getNameModal(color)}</Button3>
                                )
                            })
                        }
                    </BtnBox>
                </Content>
            </ModalBody>
        </div>
    )
}

export default Modal