import cx from "classnames";
import {
  AnchorHTMLAttributes,
  cloneElement,
  forwardRef,
  ReactElement,
  ReactNode,
} from "react";
import { ArrowUpRight } from "react-feather";
import NextLink from "next/link";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children?: ReactNode;
  gradientUnderline?: boolean;
  noGradientUnderline?: boolean;
  noExternalLinkIcon?: boolean;
  noHighlight?: boolean;
  icon?: ReactNode;
  _blank?: "y" | "n"; // Add _blank prop
}

const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  (
    {
      href,
      className,
      children,
      gradientUnderline,
      noGradientUnderline,
      noExternalLinkIcon,
      noHighlight = false,
      icon,
      _blank,
      ...otherProps
    }: ExternalLinkProps,
    ref
  ): JSX.Element => {
    const isInternalLink = href.startsWith("/") || href.startsWith("#");

    const isGradientUnderline = gradientUnderline
      ? true
      : (typeof children === "string" || typeof children === "undefined") &&
        !noGradientUnderline
      ? true
      : false;

    const targetAttribute = _blank === "y" ? "_blank" : undefined;

    return (
      <>
        {isInternalLink ? (
          <NextLink href={href}>
            <a
              className={cx(
                "transition duration-200",
                isGradientUnderline && "gradient-underline flex items-center",
                className
              )}
              ref={ref}
              {...otherProps}
            >
              {isGradientUnderline ? <span>{children ?? href}</span> : children}
            </a>
          </NextLink>
        ) : (
          <a
            href={href}
            className={cx(
              "mr-1 inline-flex items-center space-x-1 transition duration-200",
              isGradientUnderline && "gradient-underline no-underline",
              isGradientUnderline && !noHighlight,
              className
            )}
            target={targetAttribute} // Use the targetAttribute here
            rel={_blank === "y" ? "noopener noreferrer" : undefined} // Add rel attribute if _blank="y"
            ref={ref}
            {...otherProps}
          >
            {icon &&
              cloneElement(icon as ReactElement, { className: "h-4 w-4 mr-1" })}
            {noExternalLinkIcon ? children : <span>{children}</span>}{" "}
            {!noExternalLinkIcon && <ArrowUpRight className="h-4 w-4" />}
          </a>
        )}
        <style jsx>{`
          .gradient-underline :not(.anchor) {
            text-decoration: none;
            background-image: linear-gradient(
              to right,
              aquamarine,
              mediumpurple
            );
            background-repeat: no-repeat;
            background-position: bottom left;
            background-size: 0% 2px;
            transition: background-size 150ms ease-in-out;
          }

          .gradient-underline:hover :not(.anchor) {
            background-size: 100% 2px;
            color: inherit;
          }
        `}</style>
      </>
    );
  }
);

ExternalLink.displayName = "Link";

export default ExternalLink;
