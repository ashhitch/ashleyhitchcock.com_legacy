import React, { Children } from "react";
import Link from "next/link";
import { withRouter } from "next/router";

const ActiveLink = withRouter(({ router, children, ...props }) => {
  console.log(router.asPath.split("/"), props.href);
  return (
    <Link {...props}>
      {React.cloneElement(Children.only(children), {
        className:
          `/${router.asPath.split("/")[1]}` === props.href ? `is-active` : null
      })}
    </Link>
  );
});
// pathname
export default ActiveLink;
