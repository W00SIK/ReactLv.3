import React from 'react'
import {Mask, ModalBody, Content} from '../../styled/StyledModal'

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