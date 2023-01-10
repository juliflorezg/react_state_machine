import React from 'react'
import { Props } from '../containers/StepsLayout'
import './Tickets.css'

interface TicketProps extends Props {
  context: any
}

export const Tickets = ({ send, context }: TicketProps) => {
  const finish = () => {
    send('FINISH')
  }

  return (
    <div className="Tickets">
      <p className="Tickets-description description">
        Gracias por volar con book a fly 💚
      </p>
      <div className="Tickets-ticket">
        <div className="Tickets-country">Colombia</div>
        <div className="Tickets-passengers">
          <span>✈</span>
        </div>
      </div>
      <button onClick={finish} className="Tickets-finalizar button">
        Finalizar
      </button>
    </div>
  )
}
