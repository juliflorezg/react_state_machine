import React from 'react'
import { Welcome } from '../components/Welcome'
import { Search } from '../components/Search'
import { Passengers } from '../components/Passengers'
import { Tickets } from '../components/Tickets'
import './StepsLayout.css'
import {
  BaseActionObject,
  Event,
  EventData,
  ResolveTypegenMeta,
  SCXML,
  ServiceMap,
  SingleOrArray,
  State,
} from 'xstate'
import { Typegen0 } from '../machines/bookingMachine.typegen'

export type StateType = State<
  {},
  | {
      type: 'START'
    }
  | {
      type: 'CONTINUE'
    }
  | {
      type: 'DONE'
    }
  | {
      type: 'FINISH'
    }
  | {
      type: 'CANCEL'
    },
  any,
  {
    value: any
    context: {}
  },
  ResolveTypegenMeta<
    Typegen0,
    | {
        type: 'START'
      }
    | {
        type: 'CONTINUE'
      }
    | {
        type: 'DONE'
      }
    | {
        type: 'FINISH'
      }
    | {
        type: 'CANCEL'
      },
    BaseActionObject,
    ServiceMap
  >
>

export type Send = any
//   send: (event: SCXML.Event<{
//     type: "START";
// } | {
//     type: "CONTINUE";
// } | {
//     type: "DONE";
// } | {
//     type: "FINISH";
// } | {
//     type: "CANCEL";
// }> | SingleOrArray<Event<{
//     type: "START";
// } | {
//     type: "CONTINUE";
// } | {
//     type: "DONE";
// } | {
//     type: "FINISH";
// } | {
//     type: "CANCEL";
// }>>, payload?: EventData | undefined) => State<...>

export interface Props {
  state: StateType
  send?: Send
}

export const StepsLayout = ({ state, send }: Props) => {
  const renderContent = () => {
    if (state.matches('initial')) return <Welcome send={send} />
    // if (state.matches('search')) return <Search send={send} />
    // if (state.matches('tickets')) return <Tickets send={send} />
    // if (state.matches('passengers')) return <Passengers send={send} />
    return null
  }

  return <div className="StepsLayout">{renderContent()}</div>
}
