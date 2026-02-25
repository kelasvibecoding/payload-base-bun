# Content 31

## Metadata
- **Category**: Content
- **Objective**: General Content
- **Use Case**: Visual Content browsing.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
A fundamental section component for presenting narrative text, formatted prose, and supporting media in cohesive layouts.

## Source Code
```tsx
import { Button, ButtonProps, Input } from '@/components/ui';
import React, { useState } from 'react';

type SubscribeProps = {
  title: string;
  description: string;
  inputPlaceholder?: string;
  button: ButtonProps;
  termsAndConditions: string;
};

type Props = {
  subscribe: SubscribeProps;
  children: React.ReactNode;
};

export type Content31Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Content31 = (props: Content31Props) => {
  const { subscribe, children } = {
    ...Content31Defaults,
    ...props,
  };

  const [emailInput, setEmailInput] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      emailInput,
    });
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.5fr] lg:gap-x-20">
          <div className="prose mb-12 md:prose-md lg:prose-lg md:mb-20">{children}</div>
          <div>
            <div className="border border-border-primary p-8 lg:sticky lg:top-20">
              <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                {subscribe.title}
              </h6>
              <p className="mb-3 md:mb-4">{subscribe.description}</p>
              <form className="mb-4 flex flex-col gap-3 sm:gap-4" onSubmit={handleSubmit}>
                <Input
                  id="email"
                  type="email"
                  placeholder={subscribe.inputPlaceholder}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
                <Button {...subscribe.button}>{subscribe.button.title}</Button>
              </form>
              <div dangerouslySetInnerHTML={{ __html: subscribe.termsAndConditions }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Content31Defaults: Props = {
  subscribe: {
    title: "Subscribe to newsletter",
    description: "Subscribe to receive the latest blog posts to your inbox every week.",
    inputPlaceholder: "Enter your email",
    button: { title: "Subscribe", size: "sm" },
    termsAndConditions: `
      <p class='text-xs'>
        By subscribing you agree to with our 
        <a href='#' class='underline'>Privacy Policy</a>.
      </p>
      `,
  },
  children: (
    <React.Fragment>
      <h3>Introduction</h3>
      <p>
        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend
        faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna,
        etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
        varius id.
      </p>
      <p>
        Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus
        velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at.
        Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
        sodales id est ac volutpat.
      </p>
      <figure>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          alt="vibecoding placeholder image"
        />
        <figcaption>Image caption goes here</figcaption>
      </figure>
      <h6>
        Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In
        aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam
        in vitae malesuada fringilla.
      </h6>
      <p>
        Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur
        convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra
        purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
        aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu
        vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra,
        porttitor.
      </p>
      <blockquote>
        "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque
        congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci,
        tincidunt aenean tempus."
      </blockquote>
      <p>
        Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies
        vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis
        pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus
        molestie pellentesque. Arcu ultricies sed mauris vestibulum.
      </p>
      <h4>Conclusion</h4>
      <p>
        Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est
        ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique
        consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
      </p>
      <p>
        Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In
        tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis
        lobortis at sit dictum eget nibh tortor commodo cursus.
      </p>
      <p>
        Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna
        nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget
        consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.Nulla
        adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.
      </p>
    </React.Fragment>
  ),
};

Content31.displayName = 'Content31';
```


