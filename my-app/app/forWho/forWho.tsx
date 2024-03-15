import React from 'react';

interface ContentProps {
  topper: string;
  title: string;
  text: string;
}

const Content: React.FC<ContentProps> = ({ topper, title, text }) => (
  <div className="flex flex-col items-center text-center">
    <span className="cs-topper">{topper}</span>
    <h2 className="cs-title">{title}</h2>
    <p className="cs-text">{text}</p>
  </div>
);

const SideBySideContentBox = () => {
  const content = [
    "Our services streamline operations and enhance productivity by taking away all repetitive tasks, allowing you to focus on strategic growth. ",
    "Competitive Startups Aiming to Outshine compitition Veloxforce makes it possible to provide you with custom tools tailored to your needs to find untapped potential and get ahead of your competition.    ",
    "Established companies with outdated operations Upgrade your well-established business with software that simplifies daily tasks. Letting your administration, payments and customer service run on autopilot so your team can focus on the most valuable tasks.",
    "Overworked Teams Seeking a Breather\nOur automations are a lifeline for businesses drowning in day-to-day tasks. For the business owner who spends more time managing emails and spreadsheets than growing their business.",
    "Businesses facing high frequency processing\nOur solutions make sure the high throughput of you operation will relieve you from your manual interventions. from the moment of receiving data to filing tax papers.",
    "Business developers looking for operational insights.\nOur softwares allow for extraction of the specific data you need  in order to give insights into the most valuable operations for the business, which allows for systematic growth over time."
  ];

  // Create an array of objets that has the headers and the text as values
  const contentArray = [
    {
      header: "Header 1",
      text: "Our services streamline operations and enhance productivity by taking away all repetitive tasks, allowing you to focus on strategic growth."
    },
    {
      header: "Header 2",
      text: "Competitive Startups Aiming to Outshine compitition Veloxforce makes it possible to provide you with custom tools tailored to your needs to find untapped potential and get ahead of your competition."
    },
    {
      header: "Header 3",
      text: "Established companies with outdated operations Upgrade your well-established business with software that simplifies daily tasks. Letting your administration, payments and customer service run on autopilot so your team can focus on the most valuable tasks."
    },
    {
      header: "Header 4",
      text: "Overworked Teams Seeking a Breather\nOur automations are a lifeline for businesses drowning in day-to-day tasks. For the business owner who spends more time managing emails and spreadsheets than growing their business."
    },
    {
      header: "Header 5",
      text: "Businesses facing high frequency processing\nOur solutions make sure the high throughput of you operation will relieve you from your manual interventions. from the moment of receiving data to filing tax papers."
    },
    {
      header: "Header 6",
      text: "Business developers looking for operational insights.\nOur softwares allow for extraction of the specific data you need  in order to give insights into the most valuable operations for the business, which allows for systematic growth over time."
    }
  ];


  return (
    <div className='p-section'>
      <Content topper="Why Choose 8?" title="We're the best in the business" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      {contentArray.map((item, index) => (
        <div className="flex flex-col sm:flex-row text-white m-10" key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="w-full sm:w-1/2 p-4">
                <h1 className="text-xl font-bold mb-4">{item.header}</h1>
                <p>{item.text}</p>
              </div>
              <div className="hidden sm:block sm:w-1/2 p-4"></div>
            </>
          ) : (
            <>
              <div className="hidden sm:block sm:w-1/2 p-4"></div>
              <div className="w-full sm:w-1/2 p-4">
                <h1 className="text-xl font-bold mb-4"> {item.header} </h1>
                <p>{item.text}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBySideContentBox;