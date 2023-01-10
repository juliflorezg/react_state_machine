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
    logEntrySearch: 'START'
    logExitSearch: 'CANCEL' | 'CONTINUE' | 'xstate.stop'
    logStart: 'START'
  }
  eventsCausingDelays: {}
  eventsCausingGuards: {}
  eventsCausingServices: {}
  matchesStates: 'initial' | 'passengers' | 'search' | 'tickets'
  tags: never
}
