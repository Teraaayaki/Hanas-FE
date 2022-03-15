import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuthRoute = async () => {
  let token = await AsyncStorage.getItem("token");
  if (!token) {
    return false;
  } else {
    return true;
  }
};

export default useAuthRoute;
