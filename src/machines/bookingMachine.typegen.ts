// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true
  internalEvents: {
    'xstate.init': { type: 'xstate.init' }
    'xstate.stop': { type: 'xstate.stop' }
  }
  invokeSrcNameMap: {}
  missingImplementations: {
    actions: never
    delays: never
    guards: never
    services: never
  }
  eventsCausingActions: {
    addPassenger: 'ADD'
    logEntrySearch: 'CHANGE_COUNTRY' | 'START'
    logExitSearch: 'CANCEL' | 'CHANGE_COUNTRY' | 'CONTINUE' | 'xstate.stop'
    logStart: 'START'
    setFlightDestination: 'CHANGE_COUNTRY' | 'CONTINUE'
    setInitialContext: 'CANCEL'
  }
  eventsCausingDelays: {}
  eventsCausingGuards: {}
  eventsCausingServices: {}
  matchesStates: 'initial' | 'passengers' | 'search' | 'tickets'
  tags: never
}
