import React from 'react'
import styled from 'styled-components';

const MaskB = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(221, 221, 221, 0.8);
`

const ModalBodyB = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const ContentB = styled.div`
    left: 50%;
    top: 50%;
    border-radius: 12px;
    box-sizing: border-box;
    padding: 24px;
    background-color: rgb(255, 255, 255);
    width: 300px;
    height: 200px;

`

function ModalB({modalBOpen}) {
    return (
        <div>
            <MaskB onClick={()=> modalBOpen()}></MaskB>
            <ModalBodyB>
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
            </ModalBodyB>
        </div>
    )
}

export default ModalB