type convertToJalali = boolean | true
type globalTimeUtilsOutput = Date | String

export function useTimeUtils(convertState?: convertToJalali) {

    function customFullDateConvert(date: Date): globalTimeUtilsOutput {
        if (convertState) {
            convertFullDateToJalali(date);
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
        return new Date(date.getTime() + minutes * 60000)
    }

    return {
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
        addMinutes

    }
}

