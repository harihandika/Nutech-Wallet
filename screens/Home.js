import { AntDesign, FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Box,
  Button, Center, FlatList, Image, Input, Menu, Modal, Select, Text, View
} from "native-base";
import { useContext, useEffect, useState } from "react";
import { ViewBase } from "react-native";
import { showMessage } from "react-native-flash-message";
import { useQuery } from "react-query";
import ChecklistImage from "../assets/checklist-todo.png";
import DefaultProfile from "../assets/default-profile.jpg";
import { API } from "../config/api";
import { UserContext } from "../context/userContext";

function Home({ navigation }) {
  const [state, dispatch] = useContext(UserContext);
  const [showModalFilter, setShowModalFilter] = useState(false);
  const [shouldOverlapWithTrigger] = useState(false);
  const [dataFilter, setDataFilter] = useState({
    search: "",
    date: "",
    category: "",
    status: "",
  });
  let id = state?.data?.user?._id

  const [tempDataFilter, setTempDataFilter] = useState({
    date: "",
    category: "",
    status: "",
  });

  const todoColor = [
    {
      index: 0,
      bgColor: "primary.200",
    },
    {
      index: 1,
      bgColor: "green.200",
    },
    {
      index: 2,
      bgColor: "danger.200",
    },
    {
      index: 3,
      bgColor: "warning.200",
    },
    {
      index: 4,
      bgColor: "purple.200",
    },
  ];

  const categoryColor = [
    {
      index: 0,
      bgColor: "danger.500",
    },
    {
      index: 1,
      bgColor: "purple.500",
    },
    {
      index: 2,
      bgColor: "green.500",
    },
    {
      index: 3,
      bgColor: "primary.500",
    },
    {
      index: 4,
      bgColor: "warning.500",
    },
  ];


  function handleLogout() {
    AsyncStorage.removeItem("token");
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
    showMessage({
      message: "Logout berhasil!",
      type: "success",
    });
  } 

useEffect(() => {
  API.get(`/Users/${id}`)
}, []);

  return (
    <Box display="flex" flex={1} alignItems="center" bg="white" marginBottom={25}>
      <Box display="flex" flexDirection="row" w={"85%"} mt={10} mb={5}>
        {/* profile  */}
        <Box flex={1} justifyContent="center" mx={2}>
          <Text fontWeight="bold" fontSize={30}>
            Hi {state?.data?.user?.firstName}
          </Text>
          <Text fontSize={16} color="error.500">
           Saldo anda :<br/>Rp 300.000,00
          </Text>
        </Box>
        {/* end-profile */}
        <Box flex={1} justifyContent="center" alignItems="flex-end" mx={2}>
          <Menu
            w="160"
            shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
            placement={"bottom right"}
            trigger={(triggerProps) => {
              return (
                <Button variant="ghost" {...triggerProps}>
                  <Image
                    source={DefaultProfile}
                    w={50}
                    h={50}
                    borderRadius="100%"
                    borderWidth="2px"
                    borderColor="error.500"
                    alt={DefaultProfile}
                  />
                </Button>
              );
            }}
          >
            <Menu.Item onPress={handleLogout}>Logout</Menu.Item>
          </Menu>
        </Box>
      </Box>
      <Image
            source={DefaultProfile}
            w={200}
            h={200}
            borderWidth="2px"
            borderColor="error.500"
            alt={DefaultProfile}
                  />
      <View style={{justifyContent:"flex-start", width: "85%", marginTop: 20 }}>
        <Text fontWeight="bold" fontSize={15} color={"black"} marginBottom={2}>Nama Depan
          <Text style={{marginLeft: 23}}> : {state?.data?.user?.firstName} </Text>
        </Text>
        <Text fontWeight="bold" fontSize={15} color={"black"}>Nama Belakang
          <Text style={{marginLeft: 5}}> : {state?.data?.user?.lastName} </Text>
        </Text>
        <Text fontWeight="bold" fontSize={15} color={"black"}>Email
          <Text style={{marginLeft: 74}}> : {state?.data?.user?.email} </Text>
        </Text>
      </View>

      <Box marginTop={10} width="80%">
        <Button
          bg="error.500"
          _hover={{ backgroundColor: "error.600" }}
          py={3}
          _text={{
            fontSize: "md",
            fontWeight: "bold",
          }}
          onPress={() => navigation.navigate("Update")}
        >
          Update Profile
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
