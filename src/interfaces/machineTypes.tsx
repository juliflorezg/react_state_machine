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

export type StateType = any
// State<{
//     passengers: string[];
//     selectedCountry: string;
// }, {
//     type: "START";
// } | {
//     type: "CONTINUE";
// } | {
//     type: "DONE";
// } | {
//     type: "FINISH";
// } | {
//     type: "CANCEL";
// }, any, {
//     value: any;
//     context: {
//         passengers: string[];
//         selectedCountry: string;
//     };
// }, ResolveTypegenMeta<...>>

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
