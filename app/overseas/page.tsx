import styles from "./page.module.css";
import Header from "../Header";
import PageTransition from "../PageTransition";
import { CheckCircleIcon, ChevronIcon, DonutIcon, HelpIcon, ListIcon, Sparkline } from "../icons";

export default function OverseasStocks() {
  return (
    <PageTransition>
      <div className={styles.page}>
        <Header backHref="/" />

        <section className={styles.summary}>
          <a href="#" className={styles.summaryText}>
            <div>한 달 전보다</div>
            <div className={styles.summaryChange}>
              <span className={styles.blue}>1만원</span> 줄었어요
              <ChevronIcon size={14} />
            </div>
          </a>
          <Sparkline />
        </section>

        <section className={styles.investment}>
          <div className={styles.investLabel}>
            내 투자
            <HelpIcon size={14} />
          </div>
          <div className={styles.investTotal}>$95.26</div>
          <div className={styles.feeNote}>
            <CheckCircleIcon />
            예상 수수료·세금 포함
          </div>

          <dl className={styles.stats}>
            <div className={styles.stat}>
              <dt>원금</dt>
              <dd>$99.68</dd>
            </div>
            <div className={styles.stat}>
              <dt>총 수익</dt>
              <dd className={styles.blue}>-$4.42 (4.4%)</dd>
            </div>
            <div className={styles.stat}>
              <dt>
                일간 수익
                <HelpIcon size={15} />
              </dt>
              <dd className={styles.blue}>-$0.04 (0.04%)</dd>
            </div>
          </dl>

          <a href="#" className={styles.weightRow}>
            <span className={styles.weightIcon}>
              <DonutIcon />
            </span>
            <span className={styles.weightLabel}>투자 비중 보기</span>
            <span className={styles.chevron}>
              <ChevronIcon />
            </span>
          </a>
        </section>

        <section className={styles.holdings}>
          <div className={styles.holdingsHeader}>
            <h2>보유 종목</h2>
            <button className={styles.blue}>보기 설정</button>
          </div>

          <div className={styles.controls}>
            <button className={styles.chip}>
              <ListIcon />
              자세히 보기
            </button>
            <div className={styles.controlsRight}>
              <div className={styles.segment}>
                <button>현재가</button>
                <button className={styles.segmentActive}>평가금</button>
              </div>
              <div className={styles.segment}>
                <button className={`${styles.segmentActive} ${styles.currency}`}>$</button>
                <button>원</button>
              </div>
            </div>
          </div>

          <div className={styles.groupLabel}>해외주식</div>

          <a href="#" className={styles.stock}>
            <span className={styles.stockLogo}>
              나스닥
              <br />
              100
            </span>
            <span className={styles.stockName}>
              <span className={styles.ticker}>QNDX</span>
              <span className={styles.quantity}>4주</span>
            </span>
            <span className={styles.stockValue}>
              <span className={styles.price}>$95.26</span>
              <span className={styles.blue}>-4.42 (4.4%)</span>
            </span>
          </a>
        </section>
      </div>
    </PageTransition>
  );
}
