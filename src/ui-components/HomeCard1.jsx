/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard1(props) {
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
      {...getOverrideProps(overrides, "HomeCard1")}
    >
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
        top="307px"
        left="79px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="しろくま"
        {...getOverrideProps(overrides, "\u3057\u308D\u304F\u307E")}
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
        top="411px"
        left="115px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="北極にいる"
        {...getOverrideProps(overrides, "\u5317\u6975\u306B\u3044\u308B")}
      ></Text>
      <Image
        width="350px"
        height="261px"
        position="absolute"
        top="0px"
        left="0px"
        borderRadius="25px"
        padding="0px 0px 0px 0px"
        src={home?.image_url}
        {...getOverrideProps(overrides, "h 1")}
      ></Image>
    </View>
  );
}
