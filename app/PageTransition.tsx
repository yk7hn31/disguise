import { ViewTransition } from "react";

// iOS-style push/pop between pages. Links opt in with transitionTypes={["nav-forward"]}
// or {["nav-back"]}; untyped navigations (e.g. browser back) don't animate.
export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition
      enter={{ "nav-forward": "push-enter", "nav-back": "pop-enter", default: "none" }}
      exit={{ "nav-forward": "push-exit", "nav-back": "pop-exit", default: "none" }}
      default="none"
    >
      {children}
    </ViewTransition>
  );
}
