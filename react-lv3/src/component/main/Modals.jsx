import React from 'react'
import Modal from '../modal/Modal';
import ModalB from '../modal/ModalB';
import { ModalPotal, ModalBPotal} from '../modal/Potal'
import {
    Box,
    BtnBox,
    Button1,
    Button3,
} from '../../styled/StyledApp'

function Modals({
    modalOpen, 
    ColorModal,
    getNameModal, 
    Color,
    modalBOpen,
    modalB,
    modal
}) {
    return (
        <div>
            <Box>
                <h1>Modal</h1>
                <BtnBox>

                    <Button3 backgroundColor={Color[0]}
                        onClick={() => modalOpen()}
                    >
                        open modal
                    </Button3>
                    {modal && (
                        <ModalPotal>
                            <Modal
                                modalOpen={modalOpen}
                                ColorModal={ColorModal}
                                BtnBox={BtnBox}
                                Button3={Button3}
                                getNameModal={getNameModal}
                            />
                        </ModalPotal>
                    )}

                    <Button1 borderColor={Color[1]} fontColor={"rgb(214, 48, 49)"} onClick={() => modalBOpen()}>
                        open modal
                    </Button1>
                    {modalB && (
                        <ModalBPotal>
                            <ModalB
                                modalBOpen={modalBOpen}

                            />
                        </ModalBPotal>
                    )}
                </BtnBox>
            </Box>
        </div>
    )
}

export default Modals