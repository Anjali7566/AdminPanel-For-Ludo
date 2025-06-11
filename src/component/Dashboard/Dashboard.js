import React, { useState } from "react";
import "./Dashboard.css";
import {
  UserPlus,
  CreditCard,
  Gamepad2,
<<<<<<< HEAD
  ShoppingCart,
  Wallet,
=======
  ShoppingCart
>>>>>>> 1aaa5ff3a88c0795a2f1ee82a93fa92a38e8af12
} from "lucide-react";
import CustomDateModal from "./component/CustomDate";

const InfoCard = ({ title, value, icon }) => (
  <div className="dashboard-card">
    <div className="dashboard-text">
      <p className="dashboard-title">{title}</p>
      <p className="dashboard-value">{value}</p>
    </div>
    <div className="dashboard-icon">{icon}</div>
  </div>
);

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
<<<<<<< HEAD
        <InfoCard
          title="New Users"
          value="0 Users Joined"
          icon={<UserPlus className="icon-pink" />}
        />
        <InfoCard
          title="Deposits"
          value="₹0 Deposits"
          icon={<CreditCard className="icon-pink" />}
        />
        <InfoCard
          title="Matches"
          value="0 finished matches"
          icon={<Gamepad2 className="icon-pink" />}
        />
        <InfoCard
          title="Admin Earnings"
          value="₹0 Estimated"
          icon={<ShoppingCart className="icon-pink" />}
        />
        <InfoCard
          title="Withdraws"
          value="₹0.00 Withdraws, - Withdraw Fee"
          icon={<CreditCard className="icon-pink" />}
        />

        <div className="card wallet-card">
          <div className="card-content wallet-content">
            <div>
              <p className="card-title">Total Wallet Balance (All Users)</p>
              <p className="wallet-value">
                ₹358,706.09{" "}
                <span className="wallet-users">268 Users Wallet</span>
              </p>
            </div>
            <Wallet className="icon-pink" />
=======
        <InfoCard title="New Users" value="0 Users Joined" icon={<UserPlus className="icon-white" />} />
        <InfoCard title="Deposits" value="₹0 Deposits" icon={<CreditCard className="icon-white" />} />
        <InfoCard title="Matches" value="0 finished matches" icon={<Gamepad2 className="icon-white" />} />
        <InfoCard title="Admin Earnings" value="₹0 Estimated" icon={<ShoppingCart className="icon-white" />} />
        <InfoCard title="Withdraws" value="₹0.00 Withdraws, - Withdraw Fee" icon={<CreditCard className="icon-white" />} />

        <div className="dashboard-total-card">
          <div>
            <p className="dashboard-total-amount">
              ₹ 358,712.09 <span className="dashboard-total-users">270 Users Wallet</span>
            </p>
            <p className="dashboard-total-label">Total Wallet Balance (All Users)</p>
>>>>>>> 1aaa5ff3a88c0795a2f1ee82a93fa92a38e8af12
          </div>
          <div className="dashboard-icon">💳</div>
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

<<<<<<< HEAD
      <CustomDateModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      />
=======
      <CustomDateModal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} />
>>>>>>> 1aaa5ff3a88c0795a2f1ee82a93fa92a38e8af12
    </div>
  );
};

export default Dashboard;
