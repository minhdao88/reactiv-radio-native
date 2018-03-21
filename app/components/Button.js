import React, { Component } from 'react';
import { Text } from "react-native";
import { Button } from "@shoutem/ui";

export default ({children, width}) => (
  <Button
    style={{
      height: 40,
      width: width,
      backgroundColor: "#cc3458",
      borderColor: "#cc3458",
      borderRadius: 4
    }}
  >
    <Text style={{color: "#fff", fontWeight: "bold"}}>{children}</Text>
  </Button>
);
