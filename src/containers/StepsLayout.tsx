import React from 'react'
import { Welcome } from '../components/Welcome'
import { Search } from '../components/Search'
import { Passengers } from '../components/Passengers'
import { Tickets } from '../components/Tickets'
import './StepsLayout.css'
import { Send, StateType } from '../interfaces/machineTypes'

export const StepsLayout = ({
  state,
  send,
}: {
  state: StateType
  send: Send
}) => {
  const renderContent = () => {
    if (state!.matches('initial')) return <Welcome send={send} />
    if (state!.matches('search')) return <Search send={send} />
    if (state!.matches('tickets')) return <Tickets send={send} context={{}} />
    if (state!.matches('passengers'))
      return <Passengers state={state} send={send} />
    return null
  }

  return <div className="StepsLayout">{renderContent()}</div>
}
