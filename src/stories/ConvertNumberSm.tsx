import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  convertNumberSm,
  ConvertNumberSmProps,
} from "../components/ConvertNumberSm";

export const ConvertNumberSm = ({ number }: ConvertNumberSmProps) => {
  const formattedNumber = convertNumberSm({ number });
  return <span>{formattedNumber}</span>;
};
