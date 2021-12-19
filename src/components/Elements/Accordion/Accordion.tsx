import React, { useState } from 'react';

type AccordionProps = {
  children: JSX.Element;
  id?: string;
  title?: string;
};

export function Accordion({
  children,
  id = 'accordion',
  title = '',
}: AccordionProps): JSX.Element {
  const [active, setActive] = useState(false);

  return (
    <div className="accordion-item bg-white border border-gray-200">
      <h2 className="accordion-header mb-0" id={id}>
        <button
          className="
          accordion-button
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded={active}
          aria-controls="collapseOne"
          onClick={() => {
            setActive(!active);
            console.log(active);
          }}
        >
          {title}
        </button>
      </h2>
      <div
        id={id}
        className="accordion-collapse collapse show"
        // aria-labelledby="headingOne"
        // data-bs-parent="#accordionExample"
      >
        <div className="accordion-body py-4 px-5">{children}</div>
      </div>
    </div>
  );
}
