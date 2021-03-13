import React, { useState } from "react";
import Icons from './Components/Icons';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill("empty");

const App = () => {

  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  }
  const checkIsWinner = () => {
    if (itemArray[0] !== "empty" && itemArray[0] === itemArray[1] && itemArray[1] === itemArray[2]) {
      setWinMessage(itemArray[0]);
    }
    if (itemArray[3] !== "empty" && itemArray[3] === itemArray[4] && itemArray[4] === itemArray[5]) {
      setWinMessage(itemArray[3]);
    }
    if (itemArray[6] !== "empty" && itemArray[6] === itemArray[7] && itemArray[7] === itemArray[8]) {
      setWinMessage(itemArray[6]);
    }
    if (itemArray[0] !== "empty" && itemArray[0] === itemArray[3] && itemArray[3] === itemArray[6]) {
      setWinMessage(itemArray[0]);
    }
    if (itemArray[1] !== "empty" && itemArray[1] === itemArray[4] && itemArray[4] === itemArray[7]) {
      setWinMessage(itemArray[1]);
    }
    if (itemArray[2] !== "empty" && itemArray[2] === itemArray[5] && itemArray[5] === itemArray[8]) {
      setWinMessage(itemArray[2]);
    }
    if (itemArray[0] !== "empty" && itemArray[0] === itemArray[4] && itemArray[4] === itemArray[8]) {
      setWinMessage(itemArray[0]);
    }
    if (itemArray[2] !== "empty" && itemArray[2] === itemArray[4] && itemArray[4] === itemArray[6]) {
      setWinMessage(itemArray[2]);
    }
  }

  const changeItem = (itemNumber) => {

    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (itemArray[itemNumber] === "empty") {
      console.log(isCross);
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    }
    else {
      return toast("Already filled", { type: "error" })
    }

    checkIsWinner();
  }
  

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage || !(itemArray.includes("empty")) ? (
            <div className="mb-2 mt-2" >
              <h1 className="text-success text-uppercase text-center"> {winMessage} </h1>
              <Button color="success" block onClick={reloadGame}>Reload the Game</Button>
            </div>
          ) : (
          <h1 className="text-center text-warning">
            {isCross ? "Cross" : "Circle"} turns
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color="warning" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icons name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;