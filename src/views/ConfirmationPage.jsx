import React from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Message,
  Header,
  Segment,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import "./ConfirmationPage.css";
export function ConfirmationPage() {
  const location = useLocation();
  const customer = location.state.token;

  return (
    <Segment className="confirmation-page">
      <Dimmer className="loading-page">
        <Loader size="large">Loading</Loader>
      </Dimmer>
      {/* <div>Thank you for your order</div>
      <div>{customer.card.name}</div> */}
      <Container></Container>
      <Container>
        <Message>
          <Header>
            {" "}
            Thank you for your purchase! We have received your order!{" "}
          </Header>
        </Message>
      </Container>
      <Container>
        <Message className="confirmation">
          Will be delivered to:{" "}
          <div className="shipping-info">
            <Header>{customer.card.name}</Header>
            <p>{customer.email}</p>
            <p>{customer.card.address_line1}</p>
            <p>{customer.card.address_line2}</p>
            <div>
              {customer.card.address_city} {customer.card.address_state},{" "}
              {customer.card.address_zip}
              <div className="billing-info">
                <Header>Payment Method:</Header>
                <Header>Credit Card</Header>
                <p>************{customer.card.last4}</p>
              </div>
            </div>
          </div>
        </Message>
        <Message.Content>
          <div className="snape-gif">
            <img
              className="snape-image"
              src="/images/snape-approves.gif"
              alt="snape approving your purchase"
            />
          </div>
        </Message.Content>
      </Container>
    </Segment>
  );
}
