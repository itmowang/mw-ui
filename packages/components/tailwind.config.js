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
      }
    },
  },
  plugins: [],
} 

