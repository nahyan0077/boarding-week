import React from 'react'
import TestHoc from './TestHoc'
import { Hoc } from './Hoc'

const TestHoc1 = () => {

    const Modifined = Hoc(TestHoc)

  return (
    <div>
        <Modifined isLoading={false} data={"this is data"} />
    </div>
  )
}

export default TestHoc1