/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      colors: {
        "primary": '#38bdf8', // 默认颜色
        "secondary": '#d1d5db', // 次要颜色
        "success":"#86efac", // 成功颜色
        "info":"#cbd5e1", // 信息颜色
        "warning":"#fdba74", // 警告颜色
        "danger":"#ef4444", //  危险颜色
        "default":"#1f2937", // 默认颜色
      },
      flexBasis: {
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '12/12': '100%',
      },
    },
  },
  plugins: [],
} 

