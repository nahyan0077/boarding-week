import React from 'react'
import Hoc1 from './Hoc1'
import TestHoc22 from './TestHoc22'

const TestHoc21 = () => {

  const Modefied = Hoc1(TestHoc22)

  return (
    <div>
        <h2> helloo </h2>
      <Modefied isLoading={false} data={"its hoc data"} />
    </div>
  )
}

export default TestHoc21
