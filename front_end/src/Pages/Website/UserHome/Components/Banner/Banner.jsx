import styles from "./Banner.module.css";

function Banner() {
  const text =
    "This Content is Coming Soon. Please check back later for updates.";

  return (
    <div className={styles.soonBannerContainer}>
      <div className={styles.soonBanner}>
        <div className={styles.soonBannerText}>{text}</div>
        <div className={styles.soonBannerText}>{text}</div>
      </div>
    </div>
  );
}

export default Banner;
