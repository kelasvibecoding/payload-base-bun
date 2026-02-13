import * as migration_20260213_133345_init from './20260213_133345_init';

export const migrations = [
  {
    up: migration_20260213_133345_init.up,
    down: migration_20260213_133345_init.down,
    name: '20260213_133345_init'
  },
];
