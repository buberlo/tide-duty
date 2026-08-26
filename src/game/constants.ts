/**
 * Global tuning values for Tide Duty.
 *
 * Values are expressed in seconds, normalized water levels (0..1), or coins.
 */
export const WATER = {
  baseFlow: 0.025,
  waveAmplitude: 0.18,
  wavePeriod: 5,
  leftInflow: 0.035,
  rightInflow: 0.028,
  drainRate: 0.012,
  valveEffect: 0.06,
  overflowDamage: 0.04,
  panicSurge: 1.35,
} as const;

export const VALVE = {
  speed: 0.03,
  minOpen: 0,
  maxOpen: 1,
  leftDelta: 1,
  rightDelta: -1,
  upgradeSpeedMultiplier: 1.3,
  extraValveFlowBonus: 0.12,
} as const;

export const PANIC = {
  idleThreshold: 3,
  duration: 60,
  transferDelay: 0.75,
  waterSurge: 1.4,
  crateRisk: 1.25,
} as const;

export const CRATE = {
  spawnInterval: 4.5,
  maxActive: 6,
  moveSpeed: 0.07,
  rescueReward: 6,
  lostPenalty: 2,
  panicRewardMultiplier: 1.2,
} as const;

export const ROOM = {
  capacity: 3,
  sandbagCapacity: