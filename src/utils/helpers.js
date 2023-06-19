import {grey} from "@mui/material/colors";

export function calculateAverageProgress(lessons) {
    let totalProgress = 0;
    for (let i = 0; i < lessons.length; i++) {
        totalProgress += lessons[i].progress;
    }
    return totalProgress / lessons.length;
}

export function isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
}

export function isLastElementEqual(arr, element) {
    return arr.length > 0 && arr[arr.length - 1] === element;
}

export function checkDecimalInput(input, precision) {
    const regex = new RegExp(`^(0|[1-9]\\d*)(\\.\\d{1,${precision}}|\\.)?$`);
    return regex.test(input);
}

export function formatPercentage(number) {
    return `${number > 0 ? '+' : ''}${number}%`;
}

export function changeColorPicker(number, theme) {
    if (number == 0) return grey[500];
    if (number > 0) return theme.palette.success.main;
    return theme.palette.secondary.light;
}

export const validateData = (reg, fields) =>  {
    const emailRegex = /\S+@\S+\.\S+/;
    const today = new Date();
    const birthday = new Date(reg.birthday);
    const age = today.getFullYear() - birthday.getFullYear();

    return fields.map((obj) => {
        if (reg.password !== reg.repeatPassword && obj.id === 'repeatPassword') {
            return {...obj, error: true, helperText: 'Пароли не совпадают'};
        }
        if (reg.phone.length < 18 && obj.id === 'phone') {
            return {...obj, error: true, helperText: 'Неверный номер телефона'};
        }
        if (((age < 18) || isNaN(birthday.getTime())) && (obj.id === 'birthday')) {
            return {...obj, error: true, helperText: 'Неверная дата. Вам должно быть больше 18 лет.'};
        }
        if (!emailRegex.test(reg.email) && obj.id === 'email') {
            return {...obj, error: true, helperText: 'Неправильная почта'};
        }
        if (reg.password.length < 8 && obj.id === 'password') {
            return {...obj, error: true, helperText: 'Пароль меньше 6 символов'};
        }
        return obj;
    })
}
export const clearError = (id, fields) => {
    return fields.map((obj) => {
            if (obj.id === id) {
                return {...obj, error: false, helperText: ''}
            }
            return obj;
        }
    )
}
export const isErrorsExist = (fields) => {
    return fields.some(obj => obj.error === true);
}
export const transformRegData = (reg) => {
    const newData = Object.assign({}, reg);
    newData.phone = newData.phone.replace(/\D/g, '');
    newData.birthday = new Date(newData.birthday.replace(/\D/g, '.')).toISOString();
    delete newData.repeatPassword;
    return newData;
}
export function formatValue(value) {
    const float = parseFloat(value)
    if (Number.isInteger(float)) {
        return float.toFixed(2).replace(/\.?0+$/, '') + '.00';
    } else if (float >= 1.1) {
        return float.toFixed(2).replace(/\.?0+$/, '');
    } else if (float >= 0.1 && float < 1.1) {
        return float.toFixed(4).replace(/\.?0+$/, '');
    } else if (float >= 0.01 && float < 0.1) {
        return float.toFixed(6).replace(/\.?0+$/, '');
    } else if (float < 0.01) {
        return float.toFixed(9).replace(/\.?0+$/, '');
    }
}
export function getTotal(val1, val2) {
    const result = parseFloat(val1) * parseFloat(val2);
    return result.toFixed(2);
}

export function formatSum(value, price) {
    const float = parseFloat(price)
    if (Number.isInteger(float)) {
        return value.toFixed(9);
    } else if (float >= 5000) {
        return value.toFixed(9);
    } else if (float >= 1000 && float < 5000) {
        return value.toFixed(6);
    } else if (float >= 1 && float < 1000) {
        return value.toFixed(4);
    } else if (float < 1) {
        return value.toFixed(2);
    }
}

export function currentDateTime(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    return `${year}.${month}.${day} ${hours}:${minutes}`;
}

export function getLastId(array){
    if (isEmptyArray(array))
        return 0;
    else
        return array[array.length - 1].id;
}