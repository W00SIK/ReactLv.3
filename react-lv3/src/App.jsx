import { useState, useRef, useEffect } from 'react';
import Modals from './component/main/Modals'
import Button from './component/main/Button';
import Input from './component/main/Input';
import Select from './component/main/Select';

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

  // Modal Form
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
      <Button
        Color={Color}
        alertsButton={alertsButton}
        getName={getName}
      />

      <Input
        setName={setName}
        setPrice={setPrice}
        alertsInput={alertsInput}
        name={name}
        price={price}
        Color={Color}
        refPrice={refPrice}
      />

      <Modals
        modalOpen={modalOpen}
        ColorModal={ColorModal}
        getNameModal={getNameModal}
        Color={Color}
        modalBOpen={modalBOpen}
        modalB={modalB}
        modal={modal}
      />

      <Select
        selectOverOpen={selectOverOpen}
        selectHideOpen={selectHideOpen}
        selectOver={selectOver}
        selectHide={selectHide}
      />

    </div>
  );
}

export default App;
