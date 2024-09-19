import React from 'react'

export const EarningSection = () => {
  return (
    <div className="lg:col-span-2">
    <div className="card h-full">
      <div className="card-header">
        <h3 className="card-title">Earnings</h3>
        <div className="flex gap-5">
          <label className="switch switch-sm">
            <input
              className="order-2"
              name="check"
              type="checkbox"
              defaultValue={1}
            />
            <span className="switch-label order-1">
              Referrals only
            </span>
          </label>
          <select
            className="select select-sm w-28"
            name="select"
          >
            <option value={1}>1 month</option>
            <option value={2}>3 month</option>
            <option value={3}>6 month</option>
            <option defaultValue={'1'} value={4}>
              12 month
            </option>
          </select>
        </div>
      </div>
      <div className="card-body flex flex-col justify-end items-stretch grow px-3 py-1">
        <div id="earnings_chart"></div>
      </div>
    </div>
  </div>
  )
}
