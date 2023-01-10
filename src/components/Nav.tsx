import React from 'react'
import { Props } from '../containers/StepsLayout'
import './Nav.css'

export const Nav = ({ state, send }: Props) => {
  const goToWelcome = () => {
    send('CANCEL')
  }

  return (
    <nav className="Nav">
      <h1 className="Nav-logo">Book a fly ✈</h1>
      {!state.matches('initial') && (
        <button onClick={goToWelcome} className="Nav-cancel button-secondary">
          Cancelar
        </button>
      )}
    </nav>
  )
}
