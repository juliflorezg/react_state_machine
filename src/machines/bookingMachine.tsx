import { createMachine } from 'xstate'

const bookingMachine = createMachine({
  tsTypes: {} as import("./bookingMachine.typegen").Typegen0,
  schema: {
    context: {},
    events: {} as
      | { type: 'START' }
      | { type: 'CONTINUE' }
      | { type: 'DONE' }
      | { type: 'FINISH' }
      | { type: 'CANCEL' },
  },
  id: 'buy flight tickets',
  initial: 'initial',
  states: {
    initial: {
      on: {
        START: 'search',
      },
    },
    search: {
      on: {
        CONTINUE: 'passengers',
        CANCEL: 'initial',
      },
    },
    passengers: {
      on: {
        DONE: 'tickets',
        CANCEL: 'initial',
      },
    },
    tickets: {
      on: {
        FINISH: 'initial',
      },
    },
  },
})

export default bookingMachine

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
