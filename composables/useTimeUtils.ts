type convertToJalali = boolean | true;
type globalTimeUtilsOutput = Date | string;

const daysTillFriday: Record<string, number> = {
  Friday: 6,
  Saturday: 5,
  Sunday: 4,
  Monday: 3,
  Tuesday: 2,
  Wednesday: 1,
  Thursday: 0,
};
const daysFromFriday: Record<string, number> = {
  Saturday: 0,
  Sunday: 1,
  Monday: 2,
  Tuesday: 3,
  Wednesday: 4,
  Thursday: 5,
  Friday: 6,
};

export function useTimeUtils(convertState: convertToJalali = true) {
  function customConvertMonthAndDay(date: Date): globalTimeUtilsOutput {
    if (convertState) {
      return convertMonthAndDateToJalali(date);
    }
    return convertMonthAndDateToGregorian(date);
  }
  function customFullDateConvert(date: Date): globalTimeUtilsOutput {
    if (convertState) {
      return convertFullDateToJalali(date);
    }
    return convertFullDateToGregorian(date);
  }

  function customConvertYear(date: Date): globalTimeUtilsOutput {
    if (convertState) {
      return convertYearToJalali(date);
    }
    return convertYearToGregorian(date);
  }

  function customConvertMonth(date: Date): globalTimeUtilsOutput {
    if (convertState) {
      return convertMonthToJalali(date);
    }
    return convertMonthToGregorian(date);
  }

  function customConvertHourAndMinute(date: Date): globalTimeUtilsOutput {
    if (convertState) {
      return convertHourAndMinute(date);
    }
    return convertHourAndMinuteToGregorian(date);
  }

  function customConvertWeekDay(date: Date): globalTimeUtilsOutput {
    if (convertState) {
      return convertWeekdayToJalali(date);
    }
    return convertWeekdayToGregorian(date);
  }

  function customConvertDate(date: Date): globalTimeUtilsOutput {
    if (convertState) {
      return convertDayToJalali(date);
    }
    return convertDayToGregorian(date);
  }

  function convertMonthAndDateToJalali(date: Date): globalTimeUtilsOutput {
    return new Date(date).toLocaleDateString("fa-IR", {
      month: "2-digit",
      day: "2-digit",
    });
  }

  function convertFullDateToJalali(date: Date): globalTimeUtilsOutput {
    return new Date(date).toLocaleDateString("fa-IR");
  }

  function convertFullDateToGregorian(date: Date): globalTimeUtilsOutput {
    return new Date(date).toLocaleDateString("en-GB");
  }

  function convertYearToJalali(date: Date): globalTimeUtilsOutput {
    return new Date(date).toLocaleDateString("fa-IR", {
      year: "numeric",
    });
  }

  function convertMonthAndDateToGregorian(date: Date): globalTimeUtilsOutput {
    return new Date(date).toLocaleDateString("en-GB", {
      month: "2-digit",
      day: "2-digit",
    });
  }

  function convertYearToGregorian(date: Date): globalTimeUtilsOutput {
    return new Date(date).toLocaleDateString("en-GB", {
      year: "numeric",
    });
  }

  function convertWeekdayToGregorian(date: Date): globalTimeUtilsOutput {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
    });
  }

  function convertWeekdayToJalali(date: Date): globalTimeUtilsOutput {
    return new Date(date).toLocaleDateString("fa-IR", {
      weekday: "long",
    });
  }

  function convertDayToJalali(date: Date): globalTimeUtilsOutput {
    return new Date(date)
      .toLocaleDateString("fa-IR", {
        day: "numeric",
      })
      .replace("م", "");
  }

  function convertMonthToJalali(date: Date): globalTimeUtilsOutput {
    return new Date(date).toLocaleDateString("fa-IR", {
      month: "long",
    });
  }

  function convertDayToGregorian(date: Date): globalTimeUtilsOutput {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
    });
  }

  function convertMonthToGregorian(date: Date): globalTimeUtilsOutput {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
    });
  }

  function convertHourAndMinute(date: Date): globalTimeUtilsOutput {
    return new Date(date).toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function convertHourAndMinuteToGregorian(date: Date): globalTimeUtilsOutput {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  function dateToISOLikeButLocal(date: Date): string | Date {
    const offsetMs = date.getTimezoneOffset() * 60 * 1000;
    const msLocal = date.getTime() - offsetMs;
    const dateLocal = new Date(msLocal);
    const iso = dateLocal.toISOString();
    const isoLocal = iso.slice(0, 19);
    return isoLocal;
  }
  function addMinutes(date: Date, minutes: number): Date {
    return new Date(date.getTime() + minutes * 60000);
  }

  function calculateDaysTillFriday(inputDate: string) {
    const weekDayDates: string[] = [];
    const todayWeekDay = new Date(inputDate).toLocaleDateString("en-US", {
      weekday: "long",
    });
    const iterationCount = daysTillFriday[todayWeekDay];
    for (let i = 1; i <= iterationCount; i++) {
      let readyToAddDate = new Date().setDate(
        new Date(inputDate).getDate() + i
      );
      readyToAddDate = new Date(readyToAddDate).setHours(0, 0, 0, 0);
      weekDayDates.push(new Date(readyToAddDate).toISOString());
    }
    return weekDayDates;
  }

  function calculateDaysFromFriday(inputDate: string | Date): string[] {
    const weekDayDates: string[] = [];
    const todayWeekDay = new Date(inputDate).toLocaleDateString("en-US", {
      weekday: "long",
    });
    const iterationCount = daysFromFriday[todayWeekDay];
    for (let i = 1; i <= iterationCount; i++) {
      let readyToAddDate = new Date().setDate(
        new Date(inputDate).getDate() - i
      );
      readyToAddDate = new Date(readyToAddDate).setHours(0, 0, 0, 0);
      weekDayDates.push(new Date(readyToAddDate).toISOString());
    }
    return weekDayDates;
  }

  function compareDates(firstDate: Date, secondDate: Date): boolean {
    return (
      new Date(firstDate).toDateString() == new Date(secondDate).toDateString()
    );
  }

  return {
    customConvertMonthAndDay,
    customFullDateConvert,
    customConvertYear,
    customConvertMonth,
    customConvertHourAndMinute,
    customConvertWeekDay,
    customConvertDate,
    convertFullDateToJalali,
    convertFullDateToGregorian,
    convertYearToJalali,
    convertYearToGregorian,
    convertWeekdayToGregorian,
    convertWeekdayToJalali,
    convertDayToJalali,
    convertMonthToJalali,
    convertDayToGregorian,
    convertMonthToGregorian,
    convertHourAndMinute,
    convertHourAndMinuteToGregorian,
    dateToISOLikeButLocal,
    addMinutes,
    calculateDaysTillFriday,
    calculateDaysFromFriday,
    compareDates,
  };
}
