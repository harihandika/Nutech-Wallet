import { Box, Button, Input, Select, Text, TextArea, Image } from "native-base";
import { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";
import payment from "../assets/payment.png"

function TopUp({ navigation }) {
  return (
    <Box
      display="flex"
      flex={1}
      alignItems="center"
      justifyContent="center"
      bg="white"
    >
      <Image
        source={payment}
        width={300}
        height={300}
        resizeMode="contain"
        alt={payment}
      />
      <Text textAlign="center" width={250} marginTop={5}>
      Easy for payment, transfer, and booking
      </Text>
      <Box marginTop={10} width="80%">
        <Button
          bg="error.500"
          _hover={{ backgroundColor: "error.600" }}
          py={3}
          _text={{
            fontSize: "md",
            fontWeight: "bold",
          }}
        >
          Transfer
        </Button>
        <Button
          bg="muted.400"
          width="100%"
          _hover={{ backgroundColor: "muted.500" }}
          py={3}
          _text={{
            fontSize: "md",
            fontWeight: "bold",
          }}
          marginTop={4}
        >
          Top Up
        </Button>
      </Box>
    </Box>
  );
}

export default TopUp;
