import React from 'react'
import { useMachine } from '@xstate/react'
import bookingMachine from '../machines/booklingMachine'

export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine)

  console.log('Our machine:', state)

  console.log('this matches to true', state.matches('initial'))
  console.log('this matches to false', state.matches('tickets'))
  console.log('can execute FINISH', state.can('FINISH'))

  return <div>Base Layout</div>
}
