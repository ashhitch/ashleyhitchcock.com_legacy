import React, { Children } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

const ActiveLink = withRouter(({ router, children, ...props }) => {
  const thePath = router.asPath.split('/');
  return (
    <Link {...props}>
      {React.cloneElement(Children.only(children), {
        className: router.asPath === props.as || `/${thePath[1]}` === props.href ? `is-active` : null,
      })}
    </Link>
  );
});
// pathname
export default ActiveLink;
