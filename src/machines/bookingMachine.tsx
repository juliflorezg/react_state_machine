import { createMachine } from 'xstate'

const bookingMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QCMCuBPABAMwDYEsoALAF0xPwGMBrME2AOnwDt8KBDXAYgGUAVAIIAlPgG0ADAF1EoAA4B7WG3zzmMkAA9EAVgDMAJgYA2bQHYAjOfFGAHOf37dNgDQh0iALTaGAFnMBOAz1dI11-cX1zIwBfaNc0LDxCUnIqWnoGWDB2ACdKIi4AYQB5ADk+AElSgFUAUQlpJBAFJQpVdS0EPUMTCytbe0cXN09zUxsGfVNtf39Q7XM7MZtY+IwcAmIyCho6Rizc-KKBUsLagBkG9RbldqbO7QWGccj+uwcnV3cEL28bU0C+hsjkeRnE5h8qxACQ2yW2aT2DFk7FgWWYMBysC4ABEyvUpNdFLc1PdEDYJuJdKZxP59EZpjZtFMjF9PGYGNofDN-D5wg46cCoTCkltUrsMsjUWB0WBMcdThcrk0bm0SaBOuSGJTqbT6dpGczWQhQgxFj5xNZOaZdPqIUL1iKUjt0oxnXsuAAxKoVHgACSVciJqo6iF09i1ESsPim+m6XKNXlMHK5s15EQctn09sSmydCIlKLRGKxlHkAFtZQHmkGVGrNJ5IrpJkYfEZQlEfK2ItoE-0GP4zTYfKZTGDFqYs1DmPIIHB1MLc-DxfBlTW7uqG0ZzM3W+2W139Am6d4R2DxGYIREbJTs7DRW6MixlJxCa1ayGENHtwOLOfFteZlMHwE15Bh3jbaxxgBIDTFvR0lxdTJsjyIhX2JD96XECM+npIdrR5BMmTAnkDFHWN9HERlpjgxcxUQyUi1lFdAzfdd6x+bQjAYJwASsKkZnPc9eyMfxfDNfxujNG1JzWHM4ToxEH2Y6tWLrToKK4ukKP8f4ARCIdCKTawaR5fQB3+JkYjiaEHVopSGGYMAAHdMFgEh2BIMBMHMNDg1JH5Ah3Nsw33MFYyNELTU5AJ-AnGwnECWJYiAA */

  /** @xstate-layout N4IgpgJg5mDOIC5QCMCuBPABAMwDYEsoALAF0xPwGMBrME2AOnwDt8KBDXAYgGUAVAIIAlPgG0ADAF1EoAA4B7WG3zzmMkAA9EANgBMAFgYAOI9oDMZvQFYA7OP02zAGhDpEARnE2G47e4Ccdu5m+n7+VvoAvpEuaFh4hKTkVLT0DLBg7ABOlERcAMIA8gByfACSxQCqAKIS0kggCkoUqupaCHqGJuaWurb2ji5uCAC02lYMNv4O4uImc+K64mbRsRg4BMRkFDR0jBnZuQUCxfnVADJ16k3KrQ3t2vqG4u7Bvf0Ozq6IVtoM2i9-NobLozBF9EDdKsQHENoltik9gxZOxYBlmDAsrAuAAREq1KTXRS3NT3DxGcQMXTaczuIx9dzA8xDH6GfxgsyzX5GGz09lWaGwhJbZK7NIotFgDFgLHHU4XK4NG4tUmgdp0ynU2n0qyMmzM74Idw2CY0qycpZ0yxTQXrYVJHapRiOvZcABiFTKPAAEoq5MSVW1EPp7FSzMFdP4jPojGDtCyEBEGPzOeJubzI2DojEQMx5BA4OohZsHYj6ETmipVZpECN3LoGO4rKZoxTZkYm8aE3XzVTpjZPAZOVbbfESwixYwWMpOBWSUHE+5DEuel5zCYLAm9P9tKYQlNdLp65HR3CRS60gcckQ54GyQh9Q3QeZ9M+0wbhlZ-Axm9ogbz9GbF46VPe0JydZFUXRTF4CVAMqwXMFjH0YJO38dC6RjbtfmTMwB3QowrDmCx9SiHNi3hUUIIvWD-UrO41UQSMjAYCEI30MFdX8AIEysCZX2WYCpmCQDs0iIA */
  createMachine(
    {
      tsTypes: {} as import('./bookingMachine.typegen').Typegen0,
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
            START: { target: 'search', actions: 'logStart' },
          },
        },

        search: {
          entry: 'logEntrySearch',
          exit: 'logExitSearch',
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
      predictableActionArguments: true,
    },
    {
      actions: {
        logStart: () => console.log('log start!'),
        logEntrySearch: () => console.log("->you're entering search state<-"),
        logExitSearch: () => console.log("<-you're exiting search state->"),
      },
    }
  )

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
