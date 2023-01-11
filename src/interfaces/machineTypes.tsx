import {
  BaseActionObject,
  Event,
  EventData,
  ResolveTypegenMeta,
  SCXML,
  ServiceMap,
  SingleOrArray,
  State,
  TypegenDisabled,
  EventObject,
} from 'xstate'
import { Typegen0 } from '../machines/bookingMachine.typegen'

export type StateType = any
// export type StateType = State<
//   {
//     passengers: string[]
//     selectedCountry: string
//   },
//   | {
//       type: 'START'
//     }
//   | {
//       type: 'CONTINUE'
//     }
//   | {
//       type: 'ADD'
//     }
//   | {
//       type: 'DONE'
//     }
//   | {
//       type: 'FINISH'
//     }
//   | {
//       type: 'CANCEL'
//     },
//   any,
//   {
//     value: any
//     context: {
//       passengers: string[]
//       selectedCountry: string
//     }
//   },
//   ResolveTypegenMeta<TypegenDisabled, EventObject, BaseActionObject, ServiceMap>
// >

export type Send = (
  event:
    | SCXML.Event<
        | {
            type: 'START'
          }
        | {
            type: 'CHANGE_COUNTRY'
          }
        | {
            type: 'CONTINUE'
          }
        | {
            type: 'ADD'
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
              type: 'CHANGE_COUNTRY'
            }
          | {
              type: 'CONTINUE'
            }
          | {
              type: 'ADD'
            }
          | {
              type: 'DONE'
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
