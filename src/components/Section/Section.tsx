import React, { FC } from 'react';

interface SectionProps {
  title: string;
  // children: React.ReactNode;
}
//Make use of React.FC for composition
const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <h1>{title}</h1>
      <div>{children}</div>
    </section>
  );
};

export default Section;
