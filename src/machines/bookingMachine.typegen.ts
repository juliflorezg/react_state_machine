// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true
  internalEvents: {
    'done.invoke.getCountries': {
      type: 'done.invoke.getCountries'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'xstate.init': { type: 'xstate.init' }
    'xstate.stop': { type: 'xstate.stop' }
  }
  invokeSrcNameMap: {}
  missingImplementations: {
    actions: never
    delays: never
    guards: never
    services: 'getCountries'
  }
  eventsCausingActions: {
    addPassenger: 'ADD'
    logEntrySearch: 'CHANGE_COUNTRY' | 'START'
    logExitSearch: 'CANCEL' | 'CHANGE_COUNTRY' | 'CONTINUE' | 'xstate.stop'
    logStart: 'START'
    saveCountriesFromApi: 'done.invoke.getCountries'
    setFlightDestination: 'CHANGE_COUNTRY' | 'CONTINUE'
    setInitialContext: 'CANCEL'
  }
  eventsCausingDelays: {}
  eventsCausingGuards: {}
  eventsCausingServices: {
    getCountries: 'CHANGE_COUNTRY' | 'RETRY' | 'START'
  }
  matchesStates:
    | 'initial'
    | 'passengers'
    | 'search'
    | 'search.failure'
    | 'search.loading'
    | 'search.success'
    | 'tickets'
    | { search?: 'failure' | 'loading' | 'success' }
  tags: never
}
