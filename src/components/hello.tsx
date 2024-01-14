"use client";

import { api } from "@/server/react";
import { useState } from "react";

export function Hello() {
  const [val, setVal] = useState("");
  const sendName = api.message.hello.useMutation();
  const handler = () => {
    sendName.mutate({ name: val });
  };

  return (
    <div className=" flex flex-col items-start gap-4">
      <div className=" flex items-center gap-2">
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className=" bg-gray-900 p-2 m-2 rounded-md"
          placeholder="enter your name"
        />
        <button onClick={handler}>send</button>
        {sendName.isLoading && <p>Waiting for response</p>}
      </div>
      {sendName.data && (
        <p className=" text-lg font-semibold">{sendName.data}</p>
      )}
    </div>
  );
}
