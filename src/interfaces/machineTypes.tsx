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

export type Send = (
  event:
    | SCXML.Event<
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
          }
      >
    | SingleOrArray<
        Event<
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
            }
        >
      >,
  payload?: EventData | undefined
) => StateType

export interface Props {
  state?: StateType
  send?: Send
}
