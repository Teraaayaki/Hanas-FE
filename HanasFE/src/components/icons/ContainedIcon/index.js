import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";

import styles from "./styles";
import { colors } from "@constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const ContainedIcon = ({
  check, //Check Icon
  xMark, //X Icon
  customIconName,
  customIconType,
  success, //colors.success
  danger, //colors.danger
  disabled, //colors.muted50
  customColor, //default: black
  customSize, //default: 38
  pressable, //Applies TouchableOpacity to Icon
  onPress, //Pressable Action
  borderThin, //borderWidth: 1
  circle, //borderRounded: 100
}) => {
  const iconName = ({ check, xMark, customIconName }) => {
    if (check) {
      return "check";
    } else if (xMark) {
      return "x";
    }
    return customIconName;
  };

  const iconType = ({ check, xMark, customIconType }) => {
    if (check) {
      return "ant-design";
    } else if (xMark) {
      return "feather";
    }
    return customIconType;
  };

  const colorStyle = ({ success, danger, disabled, customColor }) => {
    if (success) {
      return colors.success;
    } else if (danger) {
      return colors.danger;
    } else if (disabled) {
      return colors.muted50;
    }
    return customColor;
  };

  const borderWidthStyle = ({ borderThin }) => {
    if (borderThin) {
      return styles.border;
    }
    return styles.border2;
  };

  const roundedStyle = ({ circle }) => {
    if (circle) {
      return styles.rounded100;
    }
    return styles.rounded;
  };

  const iconSize = ({ customSize }) => {
    if (customSize) {
      return customSize;
    }
    return 38;
  };

  const renderIcon = () => {
    return (
      <View
        style={[
          borderWidthStyle({ borderThin }),
          roundedStyle({ circle }),
          styles.square,
          styles.p1,
          styles.justifyContentCenter,
          styles.alignCenter,
          {
            borderColor: colorStyle({ success, danger, disabled, customColor }),
          },
        ]}
      >
        <Icon
          name={iconName({ check, xMark, customIconName })}
          type={iconType({ check, xMark, customIconType })}
          color={colorStyle({ success, danger, disabled, customColor })}
          size={iconSize({ customSize })}
        />
      </View>
    );
  };

  const isButtonHandler = ({ pressable, onPress }) => {
    if (pressable) {
      return (
        <TouchableOpacity onPress={() => onPress}>
          {renderIcon()}
        </TouchableOpacity>
      );
    }
    return renderIcon();
  };

  return isButtonHandler({ pressable, onPress });
};

export default ContainedIcon;
