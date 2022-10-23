import { Box, Button, Input, Text } from "native-base";
import { useState, useContext, useEffect } from "react";
import { showMessage } from "react-native-flash-message";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";
import { UserContext } from "../context/userContext";

function Update({ navigation }) {
  const [state, dispatch] = useContext(UserContext);
  const [dataCategory, setDataCategory] = useState({
    email: "",
    firstName: "",
    lastName:"",
  });
  let id = state?.data?.user?._id
  let { data: users, refetch : listRefetch } = useQuery("usersChache", async () => {
    const response = await API.get(`/Users/${id}`);
    console.log(response)
    setDataCategory({
      firstName : response.data.firstName,
      lastName : response.data.lastName,
      email : response.data.email,
    })
    return response.data;
  });
  console.log("ini cate", dataCategory)
  console.log("ini data",users)


  function handleChangeText(name, value) {
    setDataCategory({
      ...dataCategory,
      [name]: value,
    });
  }

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

  async function handleUpdateIsDone(e) {
    e.preventDefault();
    try {
      const update = await API.patch(
        `/Users/${id}`,
        { validateStatus: () => true }
      );
      listRefetch();
      navigation.navigate("Home")
    } catch (err) {
      showMessage({
        message: "Gagal mengubah status todo!",
        type: "danger",
      });
    }
  }

  useEffect(() => {
    listRefetch();
  }, [users]);

  return (
    <Box display="flex" w={"100%"} mt={5} alignItems="center" >
    <Text fontWeight="bold" fontSize={30}>
      Update Profile
    </Text>
    <Box display="flex" w={"85%"} mt={5} alignItems="center" >
      <Input
        w={"100%"}
        bg="muted.200"
        placeholder="First Name"
        py={3}
        my={2}
        fontSize={15}
        borderRadius="sm"
        borderColor="muted.500"
        onChangeText={(value) => handleChangeText("firstName", value)}
        value={dataCategory?.firstName}
      />
            <Input
        w={"100%"}
        bg="muted.200"
        placeholder="Last Name"
        py={3}
        my={2}
        value={dataCategory?.lastName}
        fontSize={15}
        borderRadius="sm"
        borderColor="muted.500"
        onChangeText={(value) => handleChangeText("lastName", value)}
      />
      <Input
        w={"100%"}
        bg="muted.200"
        placeholder="Date (miliseconds)"
        type="number"
        keyboardType="numeric"
        py={3}
        my={2}
        value={dataCategory?.email}
        fontSize={15}
        borderRadius="sm"
        borderColor="muted.500"
        onChangeText={(value) => handleChangeText("email", value)}
      />
      <Button
        w={"100%"}
        mt={5}
        bg="error.500"
        _hover={{ backgroundColor: "error.600" }}
        py={3}
        _text={{
          fontSize: "md",
          fontWeight: "bold",
        }}
        onPress={(e) => handleUpdateIsDone(e)}
      >
        Update Profile
      </Button>
    </Box>
  </Box>  
  );
}

export default Update;
