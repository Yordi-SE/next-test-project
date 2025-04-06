'use client';

import { plans } from '@/constant';
import { useState } from 'react';
import Summary from '../components/OrderSummary';
import { useRouter } from 'next/navigation';

export default function PricingPage() {
  const router = useRouter();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const [setshowSummary, setSetshowSummary] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(plans[0].name);

if (setshowSummary) {
  return (
    <Summary selected={selectedPlan} Cycle={billingCycle} plans={[plans[0],plans[1]]} />

  )
}

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-28">
          <h1 className="text-4xl font-bold mb-4">
            Flexible <span className="text-orange-500">Plans</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Choose a plan that work best for you & your team
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-800 rounded-full p-1 px-2 ">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors h-16 min-w-48 ${
                billingCycle === 'monthly'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors h-16  min-w-48 ${
                billingCycle === 'yearly'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly<span className="text-xs ml-1">(Save 60%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-center items-center bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-lg p-8 transition-all duration-200 ${
                plan.recommended ? 'transform md:-translate-y-20' : ''
              }`}
            >

              
              <h3 className="text-xl font-semibold text-white mb-4">{plan.name}
               {plan.recommended && (
                  <span className=" text-white text-sm ml-2">
                    [Recommended]
                  </span>
              )}
              </h3>
              <p className="text-gray-300 text-sm text-center mb-6">{plan.description}</p>
              
              {!plan.customPlan ? (
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">${billingCycle == "monthly" ? plan.monthly_price : plan.year_price}</span>
                  <span className="text-gray-400 ml-2">/Per Month</span>
                </div>
              ) : (
                <div className="mb-6">
                  <span className="text-xl font-semibold text-white">Custom Plan</span>
                </div>
              )}

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-full text-sm font-medium transition-colors h-16 ${
                  plan.recommended
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-blue-900 hover:bg-blue-800 text-white'
                }`}
                onClick={() => {
                  if (plan.customPlan) {
                    router.push('/contact');
                    return;
                  }
                  setSelectedPlan(plan.name);
                  setSetshowSummary(true);
                }}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 