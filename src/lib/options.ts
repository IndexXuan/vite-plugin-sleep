/**
 * Sleep Plugin options.
 */

export interface SleepOptions {
  /**
   * DevServer start delay(ms)
   * @default 20000
   */
  devServerStartDelay: number
  /**
   * HMR delay(ms)
   * @default 3000
   */
  hmrDelay: number
}

export type UserOptions = Partial<SleepOptions>
