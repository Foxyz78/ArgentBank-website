import Button from "./Button";

const Account = ({ title, amount, description }) => {
    return (
        <div>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">{title}</h3>
                    <p className="account-amount">{amount}</p>
                    <p className="account-amount-description">{description}</p>
                </div>
                <div className="account-content-wrapper cta">
                    <Button className={"transaction-button"} text={"View transactions"} />
                </div>
            </section>
        </div>
    );
};

export default Account;
