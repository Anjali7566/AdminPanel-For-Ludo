import React, { useState } from "react";
import "./Dashboard.css";
import {
  BarChart3,
  UserPlus,
  Wallet,
  CreditCard,
  Gamepad2,
  ShoppingCart
} from "lucide-react";
import CustomDateModal from "./component/CustomDate";

const InfoCard = ({ title, value, icon }) => (
  <div className="card">
    <div className="card-content">
      <div>
        <p className="card-title">{title}</p>
        <p className="card-value">{value}</p>
      </div>
      <div className="card-icon">{icon}</div>
    </div>
  </div>
);

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false); // ⬅️ modal state

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2 className="dashboard-title">Dashboard</h2>
        <button
          className="custom-dates-button"
          onClick={() => setModalOpen(true)}
        >
          CUSTOM DATES
        </button>
      </div>

      <div className="cards-grid">
        <InfoCard title="New Users" value="0 Users Joined" icon={<UserPlus className="icon-pink" />} />
        <InfoCard title="Deposits" value="₹0 Deposits" icon={<CreditCard className="icon-pink" />} />
        <InfoCard title="Matches" value="0 finished matches" icon={<Gamepad2 className="icon-pink" />} />
        <InfoCard title="Admin Earnings" value="₹0 Estimated" icon={<ShoppingCart className="icon-pink" />} />
        <InfoCard title="Withdraws" value="₹0.00 Withdraws, - Withdraw Fee" icon={<CreditCard className="icon-pink" />} />

        <div className="card wallet-card">
          <div className="card-content wallet-content">
            <div>
              <p className="card-title">Total Wallet Balance (All Users)</p>
              <p className="wallet-value">
                ₹358,706.09 <span className="wallet-users">268 Users Wallet</span>
              </p>
            </div>
            <Wallet className="icon-pink" />
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="card">
          <div className="card-content">
            <h3 className="section-title">New Registered Users</h3>
            <hr />
            <ul className="user-list">
              <li>User</li>
              <li>Refer By</li>
              <li>Registered</li>
              <li>On Wallet</li>
            </ul>
            <p className="no-data">no data available</p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3 className="section-title">Deposits By Users</h3>
            <hr />
            <p className="no-data">no data available</p>
          </div>
        </div>
      </div>

      {/* ⬇️ Include the modal */}
      <CustomDateModal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Dashboard;
