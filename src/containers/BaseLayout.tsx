import React from 'react'
import { useMachine } from '@xstate/react'
import { Nav } from '../components/Nav'
import { StepsLayout } from './StepsLayout'
import bookingMachine from '../machines/bookingMachine'
import './BaseLayout.css'

export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine)

  console.log('Our machine:', state.value, state.context)
  // console.log('this matches to true', state.matches('initial'))
  // console.log('this matches to false', state.matches('tickets'))
  // console.log('can execute FINISH', state.can('FINISH'))

  return (
    <div className="BaseLayout">
      <Nav state={state} send={send} />
      <StepsLayout state={state} send={send} />
    </div>
  )
}
