/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard2(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="350px"
      height="550px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HomeCard2")}
    >
      <Image
        width="350px"
        height="262px"
        position="absolute"
        top="0px"
        left="0px"
        borderRadius="25px"
        padding="0px 0px 0px 0px"
        src={home?.image_url}
        {...getOverrideProps(overrides, "g 1")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="56.25px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="310px"
        left="127px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="うま"
        {...getOverrideProps(overrides, "\u3046\u307E")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="414px"
        left="115px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="牧場にいる"
        {...getOverrideProps(overrides, "\u7267\u5834\u306B\u3044\u308B")}
      ></Text>
    </View>
  );
}
