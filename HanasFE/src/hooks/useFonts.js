import * as Font from "expo-font";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

const useFonts = async () => {
  await Font.loadAsync({
    Regular: Roboto_400Regular,
    Medium: Roboto_500Medium,
    Bold: Roboto_700Bold,
    // All Other Fonts
  });
};

export default useFonts;
