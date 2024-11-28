import React from 'react';
import { Card, Button } from 'antd';
import './PlansSection.css';

const PlansSection = () => {
  const plans = [
    {
      title: 'Free',
      price: '$0',
      features: ['Capture ideas', '10MB uploads', 'Basic dashboard'],
      buttonLabel: 'Get Started',
      cardStyle: 'free-card',
    },
    {
      title: 'Personal',
      price: '$11.99',
      features: ['Sync devices', '200MB uploads', 'Custom dashboard'],
      buttonLabel: 'Get Started',
      cardStyle: 'personal-card',
    },
    {
      title: 'Organization',
      price: '$49.99',
      features: ['Unlimited devices', '500MB uploads', 'Advanced dashboard'],
      buttonLabel: 'Get Started',
      cardStyle: 'organization-card',
    },
  ];

  return (
    <section className="plans-section">
      <h2 className="section-title">Choose Your Plan</h2>
      <p className="section-description">
        Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
      </p>
      <div className="cards-container">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`plan-card ${plan.cardStyle}`}
            title={<h3 className="card-title">{plan.title}</h3>}
          >
            <p className="price">{plan.price}</p>
            <ul className="features-list">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <Button className="get-started-btn">{plan.buttonLabel}</Button>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PlansSection;
