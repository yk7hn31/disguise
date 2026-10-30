import Link from "next/link";
import styles from "./page.module.css";
import Header from "./Header";
import PageTransition from "./PageTransition";
import { ChevronIcon, DollarIcon, HelpIcon, UsFlagIcon, WonIcon } from "./icons";

const menuItems = [
  { label: "주식 대여료", value: "주식 빌려주고 받기", valueClass: styles.valueBlue },
  { label: "거래·입출금·환전 내역" },
  { label: "주문 내역", value: "이번 달 0건", valueClass: styles.valueGray },
  { label: "해외주식담보대출" },
  { label: "내 권리" },
];

export default function Home() {
  return (
    <PageTransition>
      <div className={styles.page}>
        <Header title="토스증권" action="관리" />

        <nav className={styles.tabs}>
          <button className={`${styles.tab} ${styles.tabActive}`} aria-current="page">
            자산
          </button>
          <button className={styles.tab}>수익분석</button>
        </nav>

        <main className={styles.main}>
          <section className={`${styles.card} ${styles.account}`}>
            <div className={styles.accountLabel}>
              기본계좌 <span className={styles.accountNumber}>108-01-509218</span>
            </div>
            <div className={styles.balance}>126,419원</div>

            <div className={styles.actions}>
              <button>채우기</button>
              <button>보내기</button>
              <button>환전</button>
            </div>

            <ul className={styles.assets}>
              <li className={styles.asset}>
                <span className={styles.assetIcon}>
                  <WonIcon />
                </span>
                <div>
                  <div className={styles.assetLabel}>원화</div>
                  <div className={styles.assetValue}>0원</div>
                </div>
              </li>
              <li className={styles.asset}>
                <span className={styles.assetIcon}>
                  <DollarIcon />
                </span>
                <div>
                  <div className={styles.assetLabel}>달러</div>
                  <div className={styles.assetValue}>
                    $0.00 <span className={styles.assetSub}>0원</span>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/overseas" transitionTypes={["nav-forward"]} className={styles.asset}>
                  <span className={styles.assetIcon}>
                    <UsFlagIcon />
                  </span>
                  <div>
                    <div className={styles.assetLabel}>해외주식</div>
                    <div className={styles.assetValue}>
                      $95.44 <span className={styles.negative}>-4.2%</span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </section>

          <section className={`${styles.card} ${styles.profit}`}>
            <span>10월 수익</span>
            <span className={styles.profitValue}>+0원</span>
          </section>

          <section className={`${styles.card} ${styles.menu}`}>
            {menuItems.map((item) => (
              <a key={item.label} href="#" className={styles.menuRow}>
                <span>{item.label}</span>
                <span className={styles.menuRight}>
                  {item.value && <span className={item.valueClass}>{item.value}</span>}
                  <span className={styles.chevron}>
                    <ChevronIcon />
                  </span>
                </span>
              </a>
            ))}
          </section>

          <section className={`${styles.card} ${styles.rate}`}>
            <div>
              <div className={styles.rateTitle}>
                기준 환율
                <HelpIcon />
              </div>
              <div className={styles.rateSub}>10월 23일 오전 9:00 기준</div>
            </div>
            <div className={styles.rateRight}>
              <div className={styles.rateValue}>1,324.60원</div>
              <div className={styles.rateChange}>-0.9 (0.07%)</div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={styles.logo}>토스증권</div>
          <p className={styles.disclaimer}>
            토스증권에서 제공하는 투자 정보는 고객의 투자 판단을 위한 단순 참고용일뿐, 투자 제안 및 권유 · 종목
            추천을 위해 작성된 것이 아닙니다.
          </p>
          <div className={styles.links}>
            <a href="#">투자 유의사항</a>
            <span className={styles.linkSep}>|</span>
            <a href="#">고객센터</a>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
}
