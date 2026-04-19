// ========================
// App-wide Constants
// ========================

module.exports = {
  // Daily scoring point values
  POINTS: {
    HABIT_COMPLETE: 10,
    TIME_BLOCK_COMPLETE: 15,
    URGE_RESISTED: 20,
    TASK_COMPLETE: 5,
    JOURNAL_ENTRY: 10,
    WORK_SESSION_COMPLETE: 15,
    MOOD_LOG: 5,
  },

  // Streak thresholds
  STREAK: {
    BRONZE: 7,
    SILVER: 30,
    GOLD: 90,
    DIAMOND: 365,
  },

  // Defaults
  DEFAULTS: {
    POMODORO_DURATION: 25,  // minutes
    SHORT_BREAK: 5,         // minutes
    LONG_BREAK: 15,         // minutes
    DELAY_TIMER: 10,        // minutes (urge delay)
  },
};
