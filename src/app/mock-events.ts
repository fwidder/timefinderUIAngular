import {Event} from './event';

export const EVENTS: Event[] = [
  {
    id: 1,
    creator: {
      id: 1,
      username: 'Test',
      email: 'te@s.t',
      password: '********',
      Enabled: true,
      AccountNonExpired: true,
      AccountNonLocked: true,
      CredentialsNonExpired: true
    },
    description: 'Test Event 1',
    name: 'Test Event 1',
    password: '',
    secure: false,
    end: '2020-01-10',
    start: '2020-01-01'
  },
  {
    id: 3,
    creator: {
      id: 1,
      username: 'Test',
      email: 'te@s.t',
      password: '********',
      Enabled: true,
      AccountNonExpired: true,
      AccountNonLocked: true,
      CredentialsNonExpired: true
    },
    description: 'Test Event 3',
    name: 'Test Event 3',
    password: '',
    secure: false,
    end: '2020-01-10',
    start: '2020-01-01'
  },
  {
    id: 2,
    creator: {
      id: 1,
      username: 'Test',
      email: 'te@s.t',
      password: '********',
      Enabled: true,
      AccountNonExpired: true,
      AccountNonLocked: true,
      CredentialsNonExpired: true
    },
    description: 'Test Event 2',
    name: 'Test Event 2',
    password: '',
    secure: false,
    end: '2020-01-10',
    start: '2020-01-01'
  }
]
