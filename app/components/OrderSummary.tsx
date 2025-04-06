"use client"

import { useState } from "react"

export default function Summary({
  plans,
  selected,
  Cycle,
}: {
  plans: {
    name: string
    monthly_price?: number
    year_price?: number
    description: string
    recommended: boolean
  }[]
  selected: string
  Cycle: string
}) {
  const [billingCycle, setBillingCycle] = useState(Cycle || "monthly")
  const [selectedPlan, setSelectedPlan] = useState(selected || "Premium")

  return (
    <div className="min-h-screen container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center md:text-left md:ml-4">
        Your Order <span className="text-orange-500">Summary</span>
      </h1>

      <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg max-w-4xl mx-auto p-4 md:p-6">
        <div className="w-full">
          {/* Billing Cycle Toggle */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-lg font-semibold text-white">Select Plan</h2>

            <div className="bg-gray-700 rounded-full p-1 flex items-center self-start sm:self-auto">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-3 py-1 md:px-4 rounded-full text-xs md:text-sm font-medium transition-colors ${
                  billingCycle === "monthly" ? "bg-yellow-400 text-gray-900" : "text-gray-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-3 py-1 md:px-4 rounded-full text-xs md:text-sm font-medium transition-colors ${
                  billingCycle === "yearly" ? "bg-yellow-400 text-gray-900" : "text-gray-400 hover:text-white"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Select Plan Section */}
          <div className="space-y-4">
            {plans.map((plan, idx) => (
              <label
                key={idx}
                className={`block p-4 rounded-lg transition-all duration-200 cursor-pointer bg-white/20 hover:bg-white/30 ${
                  selectedPlan === plan.name ? "ring-2 ring-yellow-400" : ""
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="mt-1 sm:mt-0">
                      <input
                        type="radio"
                        name="plan"
                        value={plan.name}
                        checked={selectedPlan === plan.name}
                        onChange={(e) => setSelectedPlan(e.target.value)}
                        className="hidden"
                      />
                      <span className="w-5 h-5 border-2 border-yellow-400 bg-white rounded-full flex items-center justify-center">
                        {selectedPlan === plan.name && <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-white font-semibold">{plan.name}</h3>
                        {plan.recommended && (
                          <span className="inline-block bg-yellow-400 text-gray-900 text-xs px-2 py-0.5 rounded-full">
                            Recommended
                          </span>
                        )}
                      </div>
                      <p className="text-white/80 text-sm mt-1 max-w-md">{plan.description}</p>
                    </div>
                  </div>

                  <div className="text-white font-semibold text-right whitespace-nowrap ml-auto sm:ml-0">
                    ${billingCycle === "monthly" ? plan.monthly_price : plan.year_price}
                    <span className="text-white/70 text-xs block sm:inline sm:ml-1">
                      {billingCycle === "monthly" ? "/month" : "/year"}
                    </span>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

