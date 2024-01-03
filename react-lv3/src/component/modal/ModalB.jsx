import React from 'react'
import {Mask, ModalBody, ContentB} from '../../styled/StyledModal'


function ModalB({modalBOpen}) {
    return (
        <div>
            <Mask onClick={()=> modalBOpen()}></Mask>
            <ModalBody>
                <ContentB>
                    <div>닫기 버튼 1개가 있고,<br/> 외부 영역을 누르면 모달이 닫혀요.</div>
                    <button onClick={()=> modalBOpen()}
                    style={{
                        position: "fixed",
                        top: "7%",
                        left: "82%",
                        borderRadius:"100%",
                        border: "1px solid rgb(221, 221, 221)",
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                    }}
                    >X
                    </button>
                </ContentB>
            </ModalBody>
        </div>
    )
}

export default ModalB