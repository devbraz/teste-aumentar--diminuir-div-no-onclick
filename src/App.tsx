import { Button, Flex } from "@chakra-ui/react";
import React, { MouseEvent, useState } from "react";

const buttonsFaded = [
  { id: 1, color: "white" },
  { id: 2, color: "red" },
  { id: 3, color: "blue" },
  { id: 4, color: "green" },
];

export const App = () => {
  const [wDefault, setWDefault] = useState("250px");

  const handleMouseMove = (e: MouseEvent) => {
    console.log(e.clientX);
    if (buttonPressed) {
      setWDefault(`${e.clientX}px`);
    }
  };

  const [buttonPressed, setButtonPressed] = useState<number | null>(null);

  return (
    <Flex w="100vw" h="100vh" bg="black">
      {buttonsFaded.map((position) => {
        return (
          <Flex
            key={position.id}
            w={position.id === buttonPressed ? wDefault : "250px"}
            minW="250px"
            // maxW="500px"
            onMouseMove={handleMouseMove}
          >
            <Flex bg={position.color} w="100%" h="100%"></Flex>
            <Button
              minW="10px"
              bg="transparent"
              _hover={{ bg: "transparent" }}
              h="100%"
              w="10px"
              padding="0"
              onClick={() =>
                setButtonPressed(
                  position.id === buttonPressed ? null : position.id
                )
              }
            ></Button>
          </Flex>
        );
      })}
    </Flex>
  );
};
