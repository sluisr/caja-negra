import React, { useState } from 'react';
import './DemoPage.css';

const DemoPage: React.FC = () => {
  const [copyText, setCopyText] = useState('Copy Address');

  const handleCopy = () => {
    const walletAddress = '0xf7D806AEA7AfDb7773795b7FC155844926Cbc2E9';
    const textArea = document.createElement('textarea');
    
    textArea.value = walletAddress;
    
    // Make the textarea out of sight
    textArea.style.position = 'fixed';
    textArea.style.top = '-9999px';
    textArea.style.left = '-9999px';

    document.body.appendChild(textArea);
    
    textArea.focus();
    textArea.select();

    let success = false;
    try {
      success = document.execCommand('copy');
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }

    document.body.removeChild(textArea);

    if (success) {
      setCopyText('Copied!');
    } else {
      setCopyText('Failed!');
    }

    setTimeout(() => {
      setCopyText('Copy Address');
    }, 2000);
  };

  return (
    <div className="DemoPageContainer">
      <div className="DemoCard">
        <div className="DemoCard-content">
          <header className="DemoCard-header">
            <h1 className="DemoCard-main-title">DRAXION</h1>
            <p className="DemoCard-subtitle">End-to-End Encrypted Storage Platform.</p>
          </header>

          <main className="DemoCard-body">
            <div className="FeaturesGrid">
              {/* Feature 1: E2E Encryption */}
              <div className="FeatureCard">
                <div className="FeatureCard-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                </div>
                <h3>End-to-End Encryption</h3>
                <p>All your information is encrypted on your device. We use a hybrid scheme of AES-128 and RSA-OAEP for maximum security.</p>
              </div>

              {/* Feature 2: Key Sharding */}
              <div className="FeatureCard">
                <div className="FeatureCard-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21" /></svg>
                </div>
                <h3>Key Sharding</h3>
                <p>Implements Shamir's Secret Sharing to split master keys, preventing a single point of failure.</p>
              </div>

              {/* Feature 3: Secure Accounts */}
              <div className="FeatureCard">
                <div className="FeatureCard-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                </div>
                <h3>User Authentication</h3>
                <p>User registration and login system to ensure only you can access your encrypted file manager.</p>
              </div>

              {/* Feature 4: Key Control */}
              <div className="FeatureCard">
                <div className="FeatureCard-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /></svg>
                </div>
                <h3>Full Key Control</h3>
                <p>Key generation and management is always performed client-side, ensuring they never leave your control.</p>
              </div>
            </div>

            <section className="ProjectStatus">
              <h2>Current Project Status</h2>
              <div className="ProgressGrid">
                <div className="ProgressItem">
                  <div className="ProgressItem-label"><span>Web Interface</span><span>60%</span></div>
                  <div className="ProgressBar"><div className="ProgressBar-inner" style={{width: '60%'}}></div></div>
                </div>
                <div className="ProgressItem">
                  <div className="ProgressItem-label"><span>Backend System</span><span>70%</span></div>
                  <div className="ProgressBar"><div className="ProgressBar-inner" style={{width: '70%'}}></div></div>
                </div>
                <div className="ProgressItem">
                  <div className="ProgressItem-label"><span>Console Client (CLI)</span><span>90%</span></div>
                  <div className="ProgressBar"><div className="ProgressBar-inner" style={{width: '90%'}}></div></div>
                </div>
                <div className="ProgressItem">
                  <div className="ProgressItem-label"><span>Pending Tasks</span><span>10%</span></div>
                  <div className="ProgressBar"><div className="ProgressBar-inner" style={{width: '10%'}}></div></div>
                </div>
              </div>
              <p className="Final-text">
                We are a team of 3 developers building this project independently. While significant technical progress has been made, there is still much to improve. We are not currently funded, which limits the scope and speed of development and an official launch.
              </p>
            </section>

            

            <section className="DonationSection">
              <h2>Support the Project</h2>
              <p className="Final-text">Any contribution, no matter how small, helps us continue development. Even $1 makes a difference!</p>
              <div className="DonationCard">
                <div className="DonationCard-header">
                  <h3>USD Coin (USDC)</h3>
                  <span className="Network-tag">Polygon (PoS)</span>
                </div>
                <div className="WalletAddress">
                  <span>0xf7D806AEA7AfDb7773795b7FC155844926Cbc2E9</span>
                  <button onClick={handleCopy} className="CopyButton">{copyText}</button>
                </div>
                <p className="NetworkWarning">Important: Only send Native USD Coin (PoS) (USDC) to this address.</p>
              </div>
            </section>
          </main>

          <footer className="DemoCard-footer">
            <div className="DemoCard-footer-button">
              Launch Date: Pending
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;