import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { ModalPotal, ModalBPotal, SelectOverPotal } from './component/Potal'
import Modal from './component/Modal'
import ModalB from './component/ModalB';
import SelectOver from './component/SelectOver';
import SelectHide from './component/SelectHide';




const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 10px;
`
const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`
const SelectBox = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
`
const SelectBoxIn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`

const Button1 = styled.button`
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
const Button2 = styled.button`
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
const Button3 = styled.button`
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
const Inpiut = styled.input`
    border: 1px solid rgb(51, 51, 51);
    height: 40px;
    width: 200px;
    outline: none;
    border-radius: 8px;
    padding-left: 12px;
    padding-right: 12px;
`
const ButtonSelect = styled.button`
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


// export const a = () => <FontAwesomeIcon icon={faPaperPlane} />



function App() {

  // Button Form
  const Color = ["rgb(85, 239, 196)", "rgb(250, 177, 160)"]

  const getName = (color) => {
    switch (color) {
      case "rgb(250, 177, 160)":
        return `Large Negative Button 👿`;
      default:
        return "Large Primary Button";
    }
  }

  const ColorModal = ["rgb(250, 177, 160)", "rgb(85, 239, 196)"]

  const getNameModal = (color) => {
    switch (color) {
      case "rgb(250, 177, 160)":
        return `닫기`;
      default:
        return "확인";
    }
  }

  // Red Button Prompt
  const alertsButton = (color) => {
    if (color === "rgb(85, 239, 196)") {
      alert("버튼을 만들어보세요")
    } else {
      let value = prompt("어렵나요?");
      console.log(value)
    }
  }

  // input
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // ,찍어주기
  const refPrice = useRef("")

  useEffect(() => {
    if (price.split(',').join('').length % 3 === 0 && price.length > 0 && !price.endsWith(',')) {
      setPrice(refPrice.current.value = refPrice.current.value + ",");
    }
  }, [price])

  // ,경고창
  const alertsInput = () => {
    const newAlertsInput = {
      name,
      price: price.split(',').join(''),
    }
    return alert(`{ name: ${newAlertsInput.name}, price: ${newAlertsInput.price} }`)
  }

  // Modal State
  const [modal, setModal] = useState(false)
  const modalOpen = () => {
    return (modal === false ? setModal(true) : setModal(false))
  }

  const [modalB, setModalB] = useState(false)
  const modalBOpen = () => {
    return (modalB === false ? setModalB(true) : setModalB(false))
  }

  // Select State
  const [selectHide, setSelectHide] = useState(false)
  const selectHideOpen = () => {
    return (selectHide === false ? setSelectHide(true) : setSelectHide(false))
  }

  const [selectOver, setSelectOver] = useState(false)
  const selectOverOpen = () => {
    return (selectOver === false ? setSelectOver(true) : setSelectOver(false))
  }

  return (
    <div>
      <Box>
        <h1>Button</h1>
        {
          Color.map((color) => {
            let fontColor = ""
            color === "rgb(85, 239, 196)" ? fontColor = "black" : fontColor = "rgb(214, 48, 49)"
            return (
              <BtnBox>
                <Button1 borderColor={color} fontColor={fontColor}
                  onClick={() => {
                    alertsButton(color)
                  }}
                >
                  {getName(color)}
                </Button1>
                <Button2 backgroundColor={color} fontColor={fontColor}>Medium</Button2>
                <Button3 backgroundColor={color} fontColor={fontColor}>Small</Button3>
              </BtnBox>
            )
          })
        }
      </Box>

      <Box>
        <h1>Input</h1>
        <BtnBox>
          이름: <Inpiut
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value)
            }}
          />
          가격: <Inpiut
            ref={refPrice}
            type="text"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value)
            }}
          />
          <Button3 backgroundColor={Color[0]}
            onClick={() => alertsInput()}
          >
            저장
          </Button3>
        </BtnBox>
      </Box>

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

      <Box>
        <SelectBox>
          <h1>Select</h1>
          <SelectBoxIn>
            <ButtonSelect onClick={() => { selectOverOpen() }}>
              <div>리엑트</div>
              <div>▼</div>
            </ButtonSelect>
            {selectOver && (
              <SelectOverPotal>
                <SelectOver />
              </SelectOverPotal>
            )}

            <ButtonSelect onClick={() => { selectHideOpen() }}>
              <div>리엑트</div>
              <div>▼</div>
            </ButtonSelect>
            {selectHide && (
              <SelectHide />
            )}
          </SelectBoxIn>
        </SelectBox>
      </Box>

    </div>
  );
}

export default App;
