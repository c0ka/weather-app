import styles from "./ContentBox.module.css";

export const ContentBox = ({ children }) => {
  return (
  <div className="col-span-2">
    {children}
  </div>
  )}