import { assign, createMachine, EventObject } from 'xstate'
import { fetchCountries } from '../utils/api'

// type MachineContext = {
//   passengers: string[]
//   selectedCountry: string
// }

// type MachineEvents =
//   | { type: 'START' }
//   | { type: 'CONTINUE' }
//   | { type: 'DONE' }
//   | { type: 'FINISH' }
//   | { type: 'CANCEL' }

// type MachineStates =
//   | { value: 'initial'; context: MachineContext }
//   | { value: 'search'; context: MachineContext }
//   | { value: 'passengers'; context: MachineContext }
//   | { value: 'tickets'; context: MachineContext }
// | 'passengers' | 'search' | 'tickets'

const fillCountries = {
  initial: 'loading',
  states: {
    loading: {
      // on: {
      //   DONE: 'success',
      //   ERROR: 'failure',
      // },
      invoke: {
        id: 'getCountries',
        src: () => fetchCountries,
        onDone: {
          target: 'success',
          actions: 'saveCountriesFromApi',
          // actions: assign({
          //   countries: (context, event: any) => event.data,
          // }),
        },
        enError: {
          target: 'failure',
          actions: 'setError',
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: 'loading' },
      },
    },
  },
}

const bookingMachine = createMachine(
  {
    // tsTypes: {} as import('./bookingMachine.typegen').Typegen0,
    schema: {
      context: {} as {
        passengers: string[]
        selectedCountry: string
        countries: string[]
        error: string
      },
      events: {} as
        | { type: 'START' }
        | { type: 'DONE' }
        | { type: 'ERROR' }
        | { type: 'RETRY' }
        | { type: 'CHANGE_COUNTRY' }
        | { type: 'CONTINUE' }
        | { type: 'ADD' }
        | { type: 'DONE' }
        | { type: 'FINISH' }
        | { type: 'CANCEL' },
    },
    id: 'buy flight tickets',
    initial: 'initial',
    context: {
      passengers: [],
      selectedCountry: '',
      countries: [],
      error: '',
    },
    states: {
      initial: {
        on: {
          START: { target: 'search', actions: 'logStart' },
        },
      },

      search: {
        entry: 'logEntrySearch',
        exit: 'logExitSearch',
        on: {
          CONTINUE: {
            target: 'passengers',
            actions: 'setFlightDestination',
          },
          CHANGE_COUNTRY: {
            target: 'search',
            actions: 'setFlightDestination',
          },
          CANCEL: { target: 'initial', actions: 'setInitialContext' },
        },
        ...fillCountries,
      },

      passengers: {
        on: {
          DONE: {
            target: 'tickets',
            cond: 'atLeastOnePassenger',
            // actions: ''
          },
          CANCEL: { target: 'initial', actions: 'setInitialContext' },
          ADD: {
            target: 'passengers',
            actions: 'addPassenger',
          },
        },
      },

      tickets: {
        after: {
          5000: {
            target: 'initial',
            actions: 'setInitialContext',
          },
        },
        on: {
          FINISH: 'initial',
        },
      },
    },
    predictableActionArguments: true,
  },
  {
    actions: {
      logStart: () => console.log('log start!'),
      logEntrySearch: () => console.log("->you're entering search state<-"),
      logExitSearch: () => console.log("<-you're exiting search state->"),
      setFlightDestination: assign({
        selectedCountry: (
          context,
          event: any,
          // event: EventObject & { selectedCountry: string }
          // event: { type: 'CONTINUE'; selectedCountry: string }
          meta: any
        ) => {
          console.log(`${event.type} event from search state:`, event)
          // return event.selectedCountry
          // return 'CANADA'
          return event.selectedCountry
        },
      }),
      addPassenger: assign({
        passengers: (context, event: any) => {
          return [...context.passengers, event.newPassenger]
        },
      }),
      setInitialContext: assign({
        passengers: (context, event: any) => event.passengers,
        selectedCountry: (context, event: any) => event.selectedCountry,
      }),
      saveCountriesFromApi: assign({
        countries: (context, event: any) => event.data,
      }),
      setError: assign({
        error: (context, event) => 'error',
      }),
    },
    guards: {
      atLeastOnePassenger: context => {
        return context.passengers.length > 0
      },
    },
  }
)

export default bookingMachine

// StateNodeConfig<{
// passengers: string[];
// selectedCountry: string;
// },
// any,
// { type: 'START'; }
// | { type: 'CONTINUE'; }
// | { type: 'DONE'; }
// | { type: 'FINISH'; }
// | { type: 'CANCEL'; },
// BaseActionObject>.exit?: BaseActions<{
//     passengers: string[];
//     selectedCountry: string;
// }, {
//     type: 'START';
// } | {
//     type: 'CONTINUE';
// } | {
//     type: 'DONE';
// } | {
//     type: 'FINISH';
// } | {
//     type: 'CANCEL';
// }, BaseActionObject> | undefined

// const bookingMachine2 = createMachine(
//   {
//     tsTypes: {} as import('./bookingMachine.typegen').Typegen0,
//     id: 'buy plane tickets',
//     initial: 'initial',
//     schema: {
//       services: {} as {
//         fetchCountries: {
//           data: []
//         }
//       },
//       context: {} as {
//         passengers: []
//         selectedCountry: string
//         countries: []
//         error: string
//       },
//     },
//     context: {
//       passengers: [],
//       selectedCountry: '',
//       countries: [],
//       error: '',
//     },
//     states: {
//       initial: {
//         on: {
//           START: {
//             target: 'search',
//           },
//         },
//       },
//       search: {
//         on: {
//           CONTINUE: {
//             target: 'passengers',
//             actions: assign((context: any, event: any) => {
//               context.selectedCountry = event.selectedCountry
//             }),
//           },
//           CANCEL: 'initial',
//         },
//         ...fillCountries,
//       },

//       tickets: {
//         after: {
//           5000: {
//             target: 'initial',
//             actions: 'cleanContext',
//           },
//         },
//         on: {
//           FINISH: 'initial',
//         },
//       },
//       passengers: {
//         on: {
//           DONE: {
//             target: 'tickets',
//             cond: 'moreThanOnePassenger',
//           },
//           CANCEL: {
//             target: 'initial',
//             actions: 'cleanContext',
//           },
//           ADD: {
//             target: 'passengers',
//             actions: assign((context: any, event: any) =>
//               context.passengers.push(event.newPassenger)
//             ),
//           },
//         },
//       },
//     },
//   },

//   {
//     actions: {
//       cleanContext: () => {
//         assign((context: any, event: any) => {
//           context.selectedCountry = ''
//           context.passengers = []
//         })
//       },
//     },
//     guards: {
//       moreThanOnePassenger: context => {
//         return context.passengers.length > 0
//       },
//     },
//   }
// )
