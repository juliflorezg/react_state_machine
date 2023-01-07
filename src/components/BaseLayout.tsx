import React from 'react'
import { useMachine } from '@xstate/react'
import bookingMachine from '../machines/booklingMachine'

export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine)

  console.log('Our machine:', state)

  return <div>Base Layout</div>
}
