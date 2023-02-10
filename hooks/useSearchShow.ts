import { useState } from 'react'

function useSearchShow() {
const [searchShow, setSearchShow] = useState<string>("")

return {searchShow, setSearchShow}
}

export default useSearchShow