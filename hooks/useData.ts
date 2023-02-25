import { useState } from 'react'
import { DataType } from "@/types";

function useData() {
  const [data, setData] = useState<DataType[]>([])

  return {data, setData}

}

export default useData