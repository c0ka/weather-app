import styles from "./UnitSwitch.module.css"

export const UnitSwitch = ({ onclick, unitSystem }) => {
  return (
    <div className={styles.wrapper}>
      <p className={`${styles.switch} ${unitSystem == "metric" ? styles.active : styles.inactive}`} onClick={onclick}>
        Metric System
      </p>
      <p className={`${styles.switch} ${unitSystem == "metric" ? styles.active : styles.inactive}`} onClick={onclick}>
        Imperial System
      </p>
    </div>
  )
}