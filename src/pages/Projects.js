import React, { useState, useRef, useEffect } from "react";

import { Button } from "evergreen-ui";
import Line from "../components/Line";
import { v4 as uuidv4 } from "uuid";
import { Label, Input } from "@rebass/forms";

import { Box, Flex } from "rebass";

const LOCAL_STORAGE_KEY = "estimator";


export default function Dashboard() {

    const [component, setComponent] = useState("componentA");

    const [lines, setLines] = useState([]);
    const lineNameRef = useRef();
    const deviceRef = useRef();
    const qtyRef = useRef();
    const priceRef = useRef();
  
    useEffect(() => {
      const storedLines = JSON.parse(localStorage.getItem
        (LOCAL_STORAGE_KEY));
      if (storedLines) setLines(storedLines);
    }, [])
  
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lines));
    }, [lines])
  
    function handleAddLine(e) {
      const name = deviceRef.current.value;
      const qty = qtyRef.current.value;
      const price = priceRef.current.value;
  
      if (name === "") return;
  
      setLines((prevLines) => {
        return [...prevLines, { id: uuidv4(), name: name, qty: qty, price: price, complete: false }];
      });
  
      lineNameRef.current.value = null;
    }
  
    return (
      <div>
        <h1>ADD A PROJECT</h1>
  
       
  
        <Box as="form" onSubmit={(e) => e.preventDefault()} py={3}>
          {/*row 1 */}
          <Flex mx={10} mb={3}>
            <Box width={1 / 4} px={1}>
              <Label htmlFor="device">Project Name</Label>
  
              <div className="d-flex flex-row">
  
                <div className="p-0 align-self-center me-1" >
                  <Button margin={0} appearance="primary" intent="success" onClick={(handleAddLine)}>
                    +</Button>
                </div>
                <div className="p-0 align-self-center me-1" >
  
                  <Input ref={deviceRef} id="device" device="device" />
                </div>
              </div>
  
            </Box>
  
            <Box width={1 / 4} px={1}>
              <Label htmlFor="qty">Contract Amount</Label>
              <Input ref={qtyRef} id="qty" qty="qty" />
            </Box>
  
            <Box width={1 / 4} px={1}>
              <Label htmlFor="price">Design Hours</Label>
              <Input ref={priceRef} id="price" price="price" />
            </Box>
  
            <Box width={1 / 4} px={1}>
              <Label htmlFor="subtotal">Labor Hours</Label>
              <Input id="subtotal" subtotal="subtotal" />
            </Box>
  
            <Box width={1 / 4} px={1}>
              <Label htmlFor="markup">Start Date</Label>
              <Input id="markup" markup="markup" />
            </Box>
  
            <Box width={1 / 4} px={1}>
              <Label htmlFor="total">End Date</Label>
              <Input id="total" total="total" />
            </Box>
          </Flex>
        </Box>
  
        {/* {component === 'componentA' && <Estimatortool />} */}
  
        {component === "componentA" && <Line lines={lines} />}
      </div>
    );
  };