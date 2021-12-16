import * as React from "react";

function Pin(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" {...props}>
      <path d="M40.8 2.4H19.2c-2.1 0-3.8 1.7-3.8 3.8 0 1 .4 2 1.1 2.7.7.7 1.7 1.1 2.7 1.1h.7v18.9L14.8 35c-.2.3-.3.7-.1 1.1.2.3.5.6.9.6h28.7c.3 0 .5-.1.7-.3.1-.1.1-.2.2-.3.2-.4.1-.8-.1-1.1l-5-6V10.1h.7c1.1 0 2-.4 2.7-1.1.7-.7 1.1-1.6 1.1-2.7 0-2.1-1.7-3.9-3.8-3.9zM29 56.8c.1.4.5.7 1 .8.3 0 .5-.1.7-.3.1-.1.2-.3.3-.5l4.7-18.1H24.4L29 56.8z" />
    </svg>
  );
}

export default Pin;
