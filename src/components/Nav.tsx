import React from 'react'
import { Send, StateType } from '../interfaces/machineTypes'
import './Nav.css'

export const Nav = ({ state, send }: { state: StateType; send: Send }) => {
  const goToWelcome = () => {
    send('CANCEL', { passengers: [], selectedCountry: '' })
  }

  // console.log(state)

  return (
    <nav className="Nav">
      <h1 className="Nav-logo">Book a fly ✈</h1>
      {!state.matches('initial') && !state.matches('tickets') && (
        <button onClick={goToWelcome} className="Nav-cancel button-secondary">
          Cancelar
        </button>
      )}
    </nav>
  )
}
