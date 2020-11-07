import React from "react";
import { screen,render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render( <CheckoutForm/>)
});

test("form shows success message on submit with form details", async () => {

    render(<CheckoutForm/>)
    const button = screen.getByRole('button', {name: /checkout/i})

    fireEvent.click(button)
    // const lastaddress = screen.getByLabelText(/Last Name:/i)

    const addressInput = screen.getByLabelText(/Address:/i)

    // const cityInput = screen.getByLabelText(/City:/i)

    // const stateInput = screen.getByLabelText(/State/i)
});
