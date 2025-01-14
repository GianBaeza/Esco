"use client";
import { GradualSpacing } from "@/components/eldoraui/gradualspacing";
import React from "react";

interface Props {
  text: string;
  classStyle: string;
}

export default function Title({ text, classStyle }: Props) {
  return <GradualSpacing text={text} className={classStyle} />;
}
