import React, { useState } from 'react'
import dataBase from "../data.json"
import { DataType } from "@/types";


function useData() {
  const [data, setData] = useState<DataType[]>([])

  return {data, setData}

}

export default useData