import styles from './header.module.css'
import { currentDate, currentTime, currentMonth, currentYear, currentDay } from "../../../../utils/getDate"

export default function Header() {
  return (
    <div className={styles.header_container}>
    <div className={styles.title}>
        <p>Todo App</p>
    </div>
    <div className={styles.day}>
        <p className={styles.time}>{currentTime}</p>
        <h1>{currentDay}</h1>
    </div>
    <div className={styles.date}>
      <p>{currentMonth} {currentDate}, {currentYear}</p>
    </div>
  </div>
  )
}
