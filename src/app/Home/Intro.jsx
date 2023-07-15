import { useTheme } from "@/components/ThemeProvider";
import { tokens } from "@/components/ThemeProvider/theme";
import { Transition } from "@/components/Transition";
import { AnimatePresence } from "framer-motion";
import { useInterval, usePrevious } from "@/hooks";

import { useEffect, useState } from "react";
import { cssProps } from "@/utils/style";
import styles from "./Intro.module.scss";

export function Intro({
  id,
  sectionRef,
  disciplines,
  scrollIndicatorHidden,
  ...rest
}) {
  const theme = useTheme();
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);

  const currentDiscipline = disciplines.find(
    (item, index) => index === disciplineIndex
  );

  useInterval(
    () => {
      const index = (disciplineIndex + 1) % disciplines.length;
      setDisciplineIndex(index);
    },
    5000,
    theme.themeId
  );

  useEffect(() => {
    if (prevTheme && prevTheme.themeId !== theme.themeId) {
      setDisciplineIndex(0);
    }
  }, [theme.themeId, prevTheme]);

  return (
    <div>
      <Transition in key={theme.themeId} timeout={1000}>
        {(visible, status) => (
          <header>
            <div component="span">
              <AnimatePresence>
                {disciplines.map((item) => (
                  <Transition
                    unmount
                    in={item === currentDiscipline}
                    timeout={{ enter: 3000, exit: 1000 }}
                    key={item}
                  >
                    {(visible, status) => (
                      <span
                        aria-hidden
                        className={styles.word}
                        data-status={status}
                        style={cssProps({ delay: tokens.base.durationL })}
                      >
                        {item}
                      </span>
                    )}
                  </Transition>
                ))}
              </AnimatePresence>
            </div>
          </header>
        )}
      </Transition>
    </div>
  );
}
