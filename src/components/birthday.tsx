"use client";
import { api } from "@/server/react";
import { useState } from "react";
export function Birthday() {
  // your code goes here
  const birthdayMutation = api.message.birthday.useMutation();
  return <p>delete this to get started</p>;
}
